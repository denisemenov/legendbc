// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/image', '@nuxtjs/i18n'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-01-29',
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/main.css'],
  content: {
    renderer: {
      anchorLinks: false,
    },
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
    families: [
      {
        name: 'Noto Sans',
        provider: 'google',
      },
      {
        name: 'Noto Serif',
        provider: 'google',
      },
      {
        name: 'Noto Sans Display',
        provider: 'google',
      },
      {
        name: 'Noto Sans Mono',
        provider: 'google',
      },
      {
        name: 'Noto Serif Display',
        provider: 'google',
      },
    ],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  i18n: {
    locales: [
      { code: 'en', name: 'En', language: 'en', file: 'en.json' },
      { code: 'ru', name: 'Ру', language: 'ru', file: 'ru.json' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
});
