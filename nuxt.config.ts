// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-og-image'],
  site: {
  // production URL
  url: 'https://nuxt-og-image-example.vercel.app/',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja', prefix: 'og: https://nuxt-og-image-example.vercel.app/'
      },
      title: 'Nuxt OG Image Example',
      meta: [
        { hid: 'og:type',  property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt OG Image Example' },
        { hid: 'og:url',  property: 'og:url', content: 'https://nuxt-og-image-example.vercel.app/' },
        { hid: 'og:title', property: 'og:title', content: 'Nuxt OG Image Example' },
      ]
    }
  },
})
