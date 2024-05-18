import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themeImporter from "./plugin/theme-importer";

const themeList = ["theme-1", "theme-2", "theme-3", "theme-4"];

const themeName = process.env.VITE_THEME;

if (!themeName || !themeList.includes(themeName)) {
  throw new Error(`Invalid VITE_THEME provided. Expected one of: ${themeList.join(", ")}.`);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    themeImporter({
      themeName,
      include: ["./src/ui/**/*.tsx"],
    }),
    react(),
  ],
});
