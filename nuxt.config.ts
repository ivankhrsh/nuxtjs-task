export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    appManifest: false,
  },
  css: ["~/assets/css/tailwind.css"],
  app: {
    head: {
      title: 'SageTrader',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icons/logo-mark.svg' },
      ],
    },
  },
  modules: ['@auth0/auth0-nuxt', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    auth0: {
      domain: process.env.NUXT_AUTH0_DOMAIN,
      clientId: process.env.NUXT_AUTH0_CLIENT_ID,
      clientSecret: process.env.NUXT_AUTH0_CLIENT_SECRET,
      sessionSecret: process.env.NUXT_AUTH0_SESSION_SECRET,
      appBaseUrl: process.env.NUXT_AUTH0_APP_BASE_URL,
    },
  },
});
