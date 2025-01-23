// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxtjs/supabase',
    '@pinia/nuxt'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/layout',
      prefix: 'Layout'
    }
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
  tailwindcss: {
    config: {
      darkMode: 'class',
    }
  },
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
      exclude: ['/', '/warrior-evolution', '/about', '/invite']
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: "bundler",
        allowImportingTsExtensions: true,
        verbatimModuleSyntax: true,
        types: ['vue', '@pinia/nuxt', '@nuxtjs/supabase', 'node']
      }
    }
  },
  imports: {
    dirs: ['composables/**'],
    presets: [
      {
        from: 'vue',
        imports: ['ref', 'computed', 'watch', 'onMounted', 'onUnmounted', 'nextTick', 'watchEffect']
      },
      {
        from: '@vueuse/core',
        imports: ['useDebounceFn', 'useStorage', 'useLocalStorage']
      }
    ]
  },
  vueuse: {
    ssrHandlers: true
  }
})