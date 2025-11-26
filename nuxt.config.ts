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
        // OGP
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '定時後ビールタイム' },
        { property: 'og:title', content: '定時後ビールタイム公式サイト' },
        {
          property: 'og:description',
          content:
            '定時後にビール飲みながら作曲するかというノリで集まったメンバーでやってる音楽サークルです。',
        },
        { property: 'og:url', content: 'https://teijigo-beer-ti.me/' },
        { property: 'og:image', content: 'https://teijigo-beer-ti.me/ogp.png' },
        { property: 'og:locale', content: 'ja_JP' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@tbt_cf' },
        { name: 'twitter:title', content: '定時後ビールタイム公式サイト' },
        {
          name: 'twitter:description',
          content:
            '定時後にビール飲みながら作曲するかというノリで集まったメンバーでやってる音楽サークルです。',
        },
        {
          name: 'twitter:image',
          content: 'https://teijigo-beer-ti.me/ogp.png',
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
