import { defineConfig } from "vite";
import { vitePlugin as react } from "@react-router/dev";
import inspect from "vite-plugin-inspect";
import themeImporter from "@repo/vite-theme-importer-plugin";

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
      include: ["../../packages/shared/ui/**/*.ts"],
    }),
    react({
      appDirectory: "src",
      ssr: true,
      future: {
        //@ts-expect-error unstable_singleFetch not added yet to the Types of React Router.
        unstable_singleFetch: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("", "containers/App.tsx", { index: true });
          route("*", "catchAllRoutes.tsx");
        });
      },
    }),
    inspect(),
  ],
});
