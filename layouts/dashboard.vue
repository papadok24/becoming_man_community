<template>
  <div v-if="isThemeReady" class="min-h-screen bg-white dark:bg-black">
    <!-- Mobile menu button -->
    <div class="lg:hidden fixed top-0 left-0 z-50 p-4">
      <button 
        type="button"
        @click="toggleSidebarOpen"
        class="p-2 rounded-lg bg-white dark:bg-black border border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
      >
        <Icon 
          :name="isSidebarOpen ? 'mdi:close' : 'mdi:menu'" 
          class="w-6 h-6"
        />
      </button>
    </div>

    <!-- Sidebar -->
    <aside 
      :class="[
        'fixed inset-y-0 left-0 z-40 bg-white dark:bg-black border-r border-black/10 dark:border-white/10 transition-all duration-300 flex flex-col',
        isSidebarCollapsed ? 'lg:w-16' : 'lg:w-64',
        'w-64 lg:translate-x-0',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <!-- Logo section -->
      <div class="h-16 flex items-center justify-center border-b border-black/10 dark:border-white/10 overflow-hidden">
        <h1 
          :class="[
            'font-bold text-black dark:text-white transition-all duration-300 whitespace-nowrap',
            isSidebarCollapsed ? 'text-lg' : 'text-xl'
          ]"
        >
          {{ isSidebarCollapsed ? 'BM' : 'Becoming Man' }}
        </h1>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
        <NuxtLink 
          v-for="link in navigationLinks"
          :key="link.to"
          :to="link.to" 
          class="flex items-center px-2 py-2 rounded-lg transition-all duration-300"
          :class="[
            { 'justify-center': isSidebarCollapsed, 'px-4': !isSidebarCollapsed },
            route.path === link.to 
              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
              : 'text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5'
          ]"
          @click="isSidebarOpen = false"
        >
          <Icon 
            :name="link.icon" 
            class="w-5 h-5 flex-shrink-0" 
            :class="[
              { 'mr-3': !isSidebarCollapsed },
              route.path === link.to ? 'text-blue-600 dark:text-blue-400' : ''
            ]" 
          />
          <span v-show="!isSidebarCollapsed">{{ link.label }}</span>
        </NuxtLink>
      </nav>

      <!-- Sidebar Footer -->
      <div class="p-4 border-t border-black/10 dark:border-white/10">
        <button 
          @click="toggleSidebar"
          class="hidden lg:flex w-full items-center justify-center p-2 text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors duration-200"
        >
          <Icon 
            :name="isSidebarCollapsed ? 'mdi:chevron-right' : 'mdi:chevron-left'" 
            class="w-5 h-5"
          />
          <span v-show="!isSidebarCollapsed" class="ml-2">Collapse Sidebar</span>
        </button>
      </div>
    </aside>

    <!-- Main content -->
    <main 
      :class="[
        'transition-all duration-300 min-h-screen',
        isSidebarCollapsed ? 'lg:pl-16' : 'lg:pl-64',
        'pl-0' // Mobile default
      ]"
    >
      <!-- Top header -->
      <header class="h-16 bg-white dark:bg-black border-b border-black/10 dark:border-white/10 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
        <!-- Left side -->
        <div class="flex items-center">
          <!-- Mobile menu button spacer -->
          <div class="w-10 lg:hidden"></div>
          <h2 class="text-lg font-medium text-black dark:text-white ml-4 lg:ml-0">
            {{ currentPageTitle }}
          </h2>
        </div>

        <!-- Right side -->
        <div class="flex items-center space-x-4">
          <!-- Theme toggle -->
          <ClientOnly>
            <button 
              type="button"
              class="p-2 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white rounded-lg"
              @click="handleThemeToggle"
            >
              <Icon 
                :name="isDark ? 'mdi:white-balance-sunny' : 'mdi:moon-waning-crescent'" 
                class="w-5 h-5"
              />
            </button>
          </ClientOnly>

          <!-- User menu -->
          <div class="relative user-menu">
            <button 
              class="flex items-center space-x-2 text-black dark:text-white hover:text-black/80 dark:hover:text-white/80"
              @click.stop="toggleUserMenu"
            >
              <img 
                :src="userAvatar" 
                :alt="userName"
                class="w-8 h-8 rounded-full"
              >
              <span class="font-medium hidden sm:inline">{{ userName }}</span>
              <Icon name="mdi:chevron-down" class="w-5 h-5" />
            </button>

            <!-- Dropdown menu -->
            <div 
              v-show="isUserMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-lg py-1 ring-1 ring-black/10 dark:ring-white/10"
            >
              <NuxtLink
                to="/profile"
                class="block px-4 py-2 text-sm text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5"
                @click="isUserMenuOpen = false"
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
        </div>
      </header>

      <!-- Page content -->
      <div class="p-4 lg:p-6 bg-white dark:bg-black">
        <slot />
      </div>
    </main>

    <!-- Mobile sidebar overlay -->
    <div 
      v-if="isSidebarOpen" 
      class="fixed inset-0 bg-black/50 dark:bg-black/70 z-30 lg:hidden"
      @click="isSidebarOpen = false"
    ></div>
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'

// Get theme state from global instance
const { isDark, toggleDark, isThemeReady } = useTheme()

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const isUserMenuOpen = ref(false)
const isSidebarCollapsed = ref(false)
const isSidebarOpen = ref(false)

const handleThemeToggle = (e: MouseEvent) => {
  e.preventDefault()
  toggleDark()
}

const userName = computed(() => userStore.userName)
const userAvatar = computed(() => userStore.userAvatar)

const isAdmin = computed(() => userStore.roles.some(role => role.role_id === 1))

const navigationLinks = computed(() => [
  { to: '/dashboard', icon: 'mdi:view-dashboard', label: 'Dashboard' },
  { to: '/threads', icon: 'mdi:forum', label: 'Threads' },
  { to: '/warrior-evolution', icon: 'mdi:weight-lifter', label: 'Warrior Evolution' },
  { to: '/profile', icon: 'mdi:account', label: 'Profile' },
  // Admin only links
  ...(isAdmin.value ? [
    { to: '/users', icon: 'mdi:account-group', label: 'Users' }
  ] : [])
])

// Compute current page title from navigation links
const currentPageTitle = computed(() => {
  const currentLink = navigationLinks.value.find(link => link.to === route.path)
  return currentLink?.label || 'Dashboard'
})

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

const handleSignOut = async () => {
  try {
    await userStore.signOut()
    await router.push('/')
  } catch (error) {
    console.error('Error signing out:', error)
  }
}

const toggleSidebarOpen = (event: MouseEvent) => {
  event.preventDefault()
  isSidebarOpen.value = !isSidebarOpen.value
}

// Close menu when clicking outside
onMounted(() => {
  const handleClick = (event: MouseEvent) => {
    const userMenu = document.querySelector('.user-menu')
    if (userMenu && !userMenu.contains(event.target as Node)) {
      isUserMenuOpen.value = false
    }
  }
  
  document.addEventListener('click', handleClick)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClick)
  })
})
</script>

<style>
.user-menu {
  z-index: 50;
}
</style> 