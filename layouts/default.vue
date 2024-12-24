<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<script setup>
// Force dark mode by default
onMounted(() => {
  if (!document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark')
  }
})
</script>
