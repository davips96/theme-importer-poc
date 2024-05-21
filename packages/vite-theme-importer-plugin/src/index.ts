import { createFilter, type Plugin, type TransformResult } from "vite";
import fs from "node:fs";

type ThemeImporterOptions = {
  include?: (string | RegExp)[];
  exclude?: (string | RegExp)[];
  themeName?: string;
  forceThemeCss?: boolean;
};

function getCssFileName(themeName: string): string {
  return `${themeName}.css`;
}

function getCssPathName(id: string, fileName: string): string {
  return id.split("/").slice(0, -1).concat(fileName).join("/");
}

function getCssFileInfo(
  id: string,
  themeName: string
): {
  fileName: string;
  pathName: string;
} {
  const fileName = getCssFileName(themeName);
  const pathName = getCssPathName(id, fileName);

  return {
    fileName,
    pathName,
  };
}

function hasThemeCss(fileName: string, pathName: string, forceThemeCss?: boolean): boolean {
  if (!fs.existsSync(pathName)) {
    if (forceThemeCss) {
      throw new Error(`File Not Found Error: Missing ${fileName} in directory, ${pathName} cannot be found.`);
    } else {
      console.warn(`Warning: ${pathName} cannot be found.`);
      return false;
    }
  }

  return true;
}

function parseImportStatement(fileName: string): string {
  return `import "./${fileName}";`;
}

function transformCode(code: string, fileName: string): string {
  try {
    const lines = code.split("\n");
    lines.splice(0, 0, parseImportStatement(fileName));
    return lines.join("\n");
  } catch (error) {
    const message = (error as Error).message ?? "unknown error";
    throw new Error(`Invalid Code Error: Failed to split code into lines: ${message}.`);
  }
}

function transformResultFormatter(code: string): TransformResult {
  return {
    code,
    map: null,
  };
}

export default function themeImporter(options: ThemeImporterOptions = {}): Plugin {
  const themeList = ["theme-1", "theme-2", "theme-3", "theme-4"];


  if (!!options.themeName && !themeList.includes(options.themeName)) {
    throw new Error(
      `Invalid VITE_THEME provided. Expected one of: ${themeList.join(", ")}.`
    );
  }

  if (!options.themeName) {
    process.env.VITE_THEME = "theme-1";

    console.log(
      `No VITE_THEME provided. Using theme-1 as value Theme.`
    );
  }

  const { include = [], exclude = [], themeName = "theme-1", forceThemeCss } = options;


  const filter = createFilter(include, exclude);

  return {
    name: "theme-importer",
    enforce: "pre",

    transform(code: string, id: string): TransformResult {
      if (filter(id) && themeName) {
        const { fileName, pathName } = getCssFileInfo(id, themeName);

        if (!hasThemeCss(fileName, pathName, forceThemeCss)) {
          return transformResultFormatter(code);
        }

        const result = transformCode(code, fileName);
        return transformResultFormatter(result);
      }

      return transformResultFormatter(code);
    },
  };
}
