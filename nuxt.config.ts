// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/image', '@nuxtjs/i18n'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/main.css'],
});
