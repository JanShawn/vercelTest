// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false,
  vite: {
    server: {
      proxy: {
        '/llm/': {
          target: 'http://210.61.14.20/',
          changeOrigin: true
        }
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})
