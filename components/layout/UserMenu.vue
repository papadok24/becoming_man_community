<template>
  <div class="relative user-menu">
    <button
      type="button"
      @click="toggleMenu"
      class="flex items-center gap-x-4 px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <ClientOnly>
        <img
          v-if="userStore.userAvatar"
          :src="userStore.userAvatar"
          :alt="userStore.userName"
          class="h-8 w-8 rounded-full object-cover"
        />
        <div
          v-else
          class="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
        >
          <span class="text-sm font-medium text-gray-600 dark:text-gray-300">
            {{ userStore.userName.charAt(0) }}
          </span>
        </div>
      </ClientOnly>
      <span class="text-sm font-medium text-gray-700 dark:text-gray-200">
        {{ userStore.userName }}
      </span>
    </button>

    <!-- Dropdown menu -->
    <div 
      v-show="isOpen"
      class="absolute right-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-lg py-1 ring-1 ring-black/10 dark:ring-white/10"
    >
      <NuxtLink
        to="/profile"
        class="block px-4 py-2 text-sm text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5"
        @click="closeMenu"
      >
        Your Profile
      </NuxtLink>
      <button
        @click="handleSignOut"
        class="block w-full text-left px-4 py-2 text-sm text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5"
      >
        Sign Out
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()
const router = useRouter()
const isOpen = ref(false)
const hasImageError = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleSignOut = async () => {
  try {
    await userStore.signOut()
    await router.push('/')
  } catch (error) {
    console.error('Error signing out:', error)
  }
}

const handleImageError = () => {
  hasImageError.value = true
}

// Close menu when clicking outside
onMounted(() => {
  const handleClick = (event: MouseEvent) => {
    const userMenu = document.querySelector('.user-menu')
    if (userMenu && !userMenu.contains(event.target as Node)) {
      isOpen.value = false
    }
  }
  
  document.addEventListener('click', handleClick)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClick)
  })
})
</script>

<style scoped>
.user-menu {
  z-index: 50;
}
</style> 