import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior: () => ({ top: 0 }),
  },
  ({ head }) => {
    // unhead が <html> の lang を en で上書きしてしまうため明示する
    head?.push({ htmlAttrs: { lang: 'ja' } })
  },
  {
    // vite.config.ts の ssgOptions.rootContainerId と対で index.html のコンテナを指す
    rootContainer: '#root',
  },
)
