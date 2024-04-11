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
        '**/*.d.ts',
        '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
        'nuxt.config.ts',
        '.nuxt/**',
        '.output/**',
        'commitlint.config.js',
        'stylelint.config.js',
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
