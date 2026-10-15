import { defineConfig } from "vite";
export default defineConfig({
  root: "app",
  base: "./",
  publicDir: false,
  build: { outDir: "../dist", emptyOutDir: true, manifest: true, target: "es2018", chunkSizeWarningLimit: 900 },
});
