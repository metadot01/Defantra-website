import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async ({ mode }) => {
  const plugins = [react()];

  if (mode !== "production" && process.env.REPL_ID !== undefined) {
    const runtimeErrorOverlay = await import("@replit/vite-plugin-runtime-error-modal");
    const cartographer = await import("@replit/vite-plugin-cartographer");
    const devBanner = await import("@replit/vite-plugin-dev-banner");
    
    plugins.push(
      runtimeErrorOverlay.default(),
      cartographer.cartographer(),
      devBanner.devBanner()
    );
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist"),  // Simplified to just dist
      emptyOutDir: true,
    },
    base: './', // mode === 'production' ? '/Defantra-website/' : '/',
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
