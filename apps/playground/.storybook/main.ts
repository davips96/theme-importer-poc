import type { StorybookConfig } from "@storybook/react-vite";
import themeImporter from "@repo/vite-theme-importer-plugin";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: (config) => {
    const uiRootPath = getAbsolutePath("@repo/shared");
    config.plugins?.push(themeImporter({
      themeName: process.env.VITE_THEME,
      include: [`${uiRootPath}/ui/**/*.tsx`],
    }))
    return config
  }
};
export default config;
