import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: [/\.jsx?$/],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    target: "es2020",
  },
});
