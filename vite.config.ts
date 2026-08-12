import { copyFile } from 'node:fs/promises'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'vue-router/vite'
import { defineConfig } from 'vite'
import type { ViteSSGOptions } from 'vite-ssg'

const PRERENDER_ROUTES = ['/', '/disco', '/member', '/beenya', '/404']

const ssgOptions: ViteSSGOptions = {
  rootContainerId: 'root',
  // 既存の公開URL（/disco 等）を維持するため index.html 形式で出力する
  dirStyle: 'nested',
  beastiesOptions: false,
  includedRoutes: () => PRERENDER_ROUTES,
  // GitHub Pages がカスタム404として認識できるのはルート直下の 404.html だけ
  onFinished: async () => {
    await copyFile(
      path.resolve(import.meta.dirname, 'dist/404/index.html'),
      path.resolve(import.meta.dirname, 'dist/404.html'),
    )
  },
}

export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: 'src/pages',
      dts: 'src/route-map.d.ts',
    }),
    vue(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },

  ssgOptions,
})
