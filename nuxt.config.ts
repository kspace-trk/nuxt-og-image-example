// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-og-image'],
  site: {
  // production URL
  url: 'https://nuxt-og-image-example.vercel.app/',
  },
})
