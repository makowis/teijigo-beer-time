export default defineNuxtConfig({
  app: {
    head: {
      title: '定時後ビールタイム',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            '定時後にビール飲みながら作曲するかというノリで集まったメンバーでやってる音楽サークルです。',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  devtools: {
    enabled: true,
  },

  modules: ['@nuxt/eslint'],
  compatibilityDate: '2024-11-12',
})
