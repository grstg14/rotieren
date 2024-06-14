// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: ['@nuxt/image', '', '@nuxt/eslint'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  image: {
    providers: {
      imagekit: {
        provider: 'imagekit',
        options: {
          baseURL: 'https://ik.imagekit.io/u7a3hnt37/',
        },
      },
    },
    provider: 'imagekit',
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  },
})
