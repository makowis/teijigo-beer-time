// サイト共通設定
const SITE_NAME = '定時後ビールタイム'
const SITE_TITLE = '定時後ビールタイム公式サイト'
const SITE_DESCRIPTION =
  '定時後にビール飲みながら作曲するかというノリで集まったメンバーでやってる音楽サークルです。'
const SITE_URL = 'https://teijigo-beer-ti.me/'
const OGP_IMAGE = `${SITE_URL}ogp.png`
const TWITTER_ACCOUNT = '@tbt_cf'

export default defineNuxtConfig({
  app: {
    head: {
      title: SITE_NAME,
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: SITE_DESCRIPTION },
        // OGP
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:title', content: SITE_TITLE },
        { property: 'og:description', content: SITE_DESCRIPTION },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:image', content: OGP_IMAGE },
        { property: 'og:locale', content: 'ja_JP' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: TWITTER_ACCOUNT },
        { name: 'twitter:title', content: SITE_TITLE },
        { name: 'twitter:description', content: SITE_DESCRIPTION },
        { name: 'twitter:image', content: OGP_IMAGE },
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
