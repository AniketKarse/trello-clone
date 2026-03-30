// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/vello.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  colorMode: {
    preference: 'light'
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
