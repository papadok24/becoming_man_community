<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <SiteHeader />
    <slot />
    <SiteFooter />
    <Toast />
  </div>
</template>

<script setup lang="ts">

const { isDark } = useTheme()

// Initialize theme based on system preference
onMounted(() => {
  // The theme will be automatically handled by useDark
  // This ensures proper initialization and system preference sync
})
</script>
