import { defineConfig } from "vite";
import { vitePlugin as react } from "@react-router/dev";
import inspect from "vite-plugin-inspect";
import themeImporter from "@repo/vite-theme-importer-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

const themeName = process.env.VITE_THEME;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: process.env.NODE_ENV === "production",
    sourcemap: true,
    rollupOptions: {
      external: [/node:.*/, "stream", "crypto", "fsevents"],
    },
  },
  plugins: [
    themeImporter({
      themeName,
      include: ["../../packages/shared/ui/**/*.tsx"],
    }),
    react({
      appDirectory: "src",
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        // unstable_serverComponents: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("*", "catchAllRoutes.tsx");
        });
      },
    }),
    inspect(),
    tsconfigPaths(),
  ],
});
