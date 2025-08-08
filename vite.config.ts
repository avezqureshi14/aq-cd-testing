import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "cd-testing",
      formats: ["es", "cjs"],
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@tailwindcss/vite", "class-variance-authority"],
      treeshake: true,
    },
    cssCodeSplit: true,
    sourcemap: false,
    emptyOutDir: true,

    minify: "esbuild",
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      outDir: "dist/types",
      include: ["src"],
      exclude: ["vite.config.ts"],
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
