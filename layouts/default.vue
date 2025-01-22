<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <SiteHeader />
    <slot />
    <SiteFooter />
    <Toast />
  </div>
</template>

<script setup lang="ts">
// Initialize theme
useTheme()
</script>
