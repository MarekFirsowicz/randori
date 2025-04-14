import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// ✅ CHANGE this to match your repo name on GitHub
const repoName = 'randori'; // Example: 'randori' or 'randori-pwa'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'randori 192.png',
        'randori 512.png',
        'offline.html'
      ],
      manifest: {
        name: 'Randori Scoreboard',
        short_name: 'Randori',
        description: 'Minimalist judo scoreboard and timer PWA.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'randori 192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'randori 512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        navigateFallback: '/offline.html'
      }
    })
  ]
})
