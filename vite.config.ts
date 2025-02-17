import { reactRouter } from "@react-router/dev/vite";
// import tailwindcss from "@tailwindcss/vite";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  server: { port: 3000 },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
