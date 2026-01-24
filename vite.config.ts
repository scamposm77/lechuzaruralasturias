import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ViteImageOptimizer({
      png: {
        quality: 75,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      webp: {
        lossless: false,
        quality: 75,
        alphaQuality: 80,
        force: false,
      },
      cache: true,
      cacheLocation: "node_modules/.cache/vite-plugin-image-optimizer",
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".");
          const ext = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext || "")) {
            return `assets/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Target modern browsers for smaller bundles
    target: "esnext",
    // Minify with terser for better compression
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: mode === "production",
        drop_debugger: true,
        pure_funcs: mode === "production" ? ["console.log", "console.info"] : [],
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
    cssMinify: true,
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 500,
  },
}));
