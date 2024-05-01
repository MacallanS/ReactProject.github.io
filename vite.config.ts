import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["logo.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "React",
        short_name: "React",
        description: "Reaction labs",
        theme_color: "#ffffff",
        start_url: "/",
        icons: [
          {
            src: "/public/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/public/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/public/logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'tests/setup.tsx',
    css: true,
  },
});
