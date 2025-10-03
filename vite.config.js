import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import ViteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    ViteImagemin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      pngquant: {
        quality: [0.65, 0.90],
        speed: 4
      },
      mozjpeg: {
        quality: 75
      },
      webp: {
        quality: 75
      }
    })
  ],
  base: '/',
  css: {
    postcss: './postcss.config.js', // 确保引入正确的配置
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
