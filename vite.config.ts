import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import viteSvgr from 'vite-plugin-svgr';

const manifestForPlugin: Partial<VitePWAOptions> = {
  includeAssets: ["manifest-icon-192.maskable.png", "manifest-icon-512.maskable.png", "logo.svg"],
  manifest: {
    icons: [
      {
        "src": "/manifest/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/manifest/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/manifest/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/manifest/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      },
    ],
    display: "standalone",
    scope: "/",
    start_url: "/",
    theme_color: "#ffffff"
  },
  workbox: {
    runtimeCaching: [{
      urlPattern: ({ url }) => {
        return url.pathname.startsWith("/api")
      },
      handler: "NetworkFirst",
      options: {
        cacheName: "api-cache",
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }]
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    viteSvgr(),
    VitePWA(manifestForPlugin)
  ],
})
