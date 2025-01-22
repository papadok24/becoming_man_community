<script setup lang="ts">
// Initialize theme globally
const { isDark, isThemeReady } = useTheme()

// Add early theme initialization
useHead({
  meta: [
    {
      name: 'color-scheme',
      content: computed(() => isDark.value ? 'dark' : 'light')
    }
  ],
  htmlAttrs: {
    class: computed(() => isDark.value ? 'dark' : '')
  },
  script: [
    {
      children: `
        try {
          const theme = localStorage.getItem('color-scheme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
          if (theme === 'dark') document.documentElement.classList.add('dark');
          window.__THEME_READY__ = true;
        } catch (e) {}
      `,
      tagPriority: 'critical'
    }
  ]
})
</script>

<template>
  <div v-if="isThemeReady">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
