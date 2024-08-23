/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from "vite";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react(), eslintPlugin(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
