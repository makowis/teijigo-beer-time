import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      all: true,
      exclude: [
        'dist/**',
        'node_modules/**',
        'coverage/**',
        'types/**',
        '**/*.d.ts',
        '__mocks__/**',
        'stories/**',
        'test/**',
        '**/*.{spec,test}.{ts,js,vue}',
        '**/{vite,eslint,stylelint,vitest}.config.*',
        'src/main.ts',
        // 画像ファイルはテスト対象外
        'src/assets/**/*.{png,jpg,jpeg,gif,svg,webp}',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
  plugins: [vue()],
})
