import path from "path";
import vue from '@vitejs/plugin-vue';
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, ''),
    }
  },
  plugins: [vue()],
});
