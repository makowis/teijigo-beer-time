import path from 'path'
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
        '.nuxt/**',
        '.output/**',
        '**/{nuxt,eslint,stylelint,vitest}.config.*',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, ''),
    },
  },
  plugins: [vue()],
})
