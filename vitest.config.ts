import path from "path";
import vue from '@vitejs/plugin-vue';
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: 'v8',
      all: true,
      exclude: [
        'coverage/**',
        'dist/**',
        'packages/*/test?(s)/**',
        '**/*.d.ts',
        '**/virtual:*',
        '**/__x00__*',
        '**/\x00*',
        'cypress/**',
        'test?(s)/**',
        'test?(-*).?(c|m)[jt]s?(x)',
        '**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)',
        '**/__tests__/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
        '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
        'nuxt.config.ts',
      ]
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, ''),
    }
  },
  plugins: [vue()],
});
