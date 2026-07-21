import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "/cheat-sheet/",
  plugins: [TanStackRouterVite(), react(), tsconfigPaths(), tailwindcss()],
  build: {
    outDir: "dist",
  },
}));
