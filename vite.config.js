import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest: {
				name: "Rockspot Shawarma",
				short_name: "rockspot",
				description: "Gateway to flavorful bites and effortless orders",
        start_url: '/',
				theme_color: "#0f172a",
				background_color: "#E2E8F0",
        display: 'standalone',
        icons: [
          {
            src: '/logo.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logo.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
			},
		}),
	],
});
