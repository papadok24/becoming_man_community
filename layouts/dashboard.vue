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
          :name="navigationState.isSidebarOpen ? 'mdi:close' : 'mdi:menu'" 
          class="w-6 h-6"
        />
      </button>
    </div>

    <!-- Sidebar -->
    <LayoutSidebar
      :navigation-links="navigationLinks"
      :is-collapsed="navigationState.isSidebarCollapsed"
      :is-open="navigationState.isSidebarOpen"
      :current-path="route.path"
      @toggle-collapse="toggleSidebar"
      @close-mobile="closeMobileSidebar"
    />

    <!-- Main content -->
    <main 
      :class="[
        'transition-all duration-300 min-h-screen',
        navigationState.isSidebarCollapsed ? 'lg:pl-16' : 'lg:pl-64',
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
          <LayoutUserMenu />
        </div>
      </header>

      <!-- Page content -->
      <div class="p-4 lg:p-6 bg-white dark:bg-black">
        <slot />
      </div>
    </main>

    <!-- Mobile sidebar overlay -->
    <div 
      v-if="navigationState.isSidebarOpen" 
      class="fixed inset-0 bg-black/50 dark:bg-black/70 z-30 lg:hidden"
      @click="closeMobileSidebar"
    ></div>
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import type { NavigationLink, NavigationState } from '~/types/navigation'
import type { ProfileRole } from '~/types/users'

// Get theme state from global instance
const { isDark, toggleDark, isThemeReady } = useTheme()

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

// Navigation state
const navigationState = reactive<NavigationState>({
  isSidebarCollapsed: false,
  isSidebarOpen: false
})

// Theme toggle handler
const handleThemeToggle = (e: MouseEvent): void => {
  e.preventDefault()
  toggleDark()
}

// Admin check with proper async handling
const navigationLinks = computed(() => {
  const baseLinks: NavigationLink[] = [
    { to: '/dashboard', icon: 'mdi:view-dashboard', label: 'Dashboard' },
    { to: '/threads', icon: 'mdi:forum', label: 'Threads' },
    { to: '/warrior-evolution', icon: 'mdi:weight-lifter', label: 'Warrior Evolution' },
    { to: '/profile', icon: 'mdi:account', label: 'Profile' }
  ]

  // Add admin links based on user roles
  const isAdmin = computed(() => userStore.roles.some(role => role.role_id === 1))
  if (isAdmin.value) {
    baseLinks.push({ to: '/users', icon: 'mdi:account-group', label: 'Users' })
  }

  return baseLinks
})

// Current page title
const currentPageTitle = computed((): string => {
  const currentLink = navigationLinks.value.find((link: NavigationLink) => link.to === route.path)
  return currentLink?.label || 'Dashboard'
})

// Navigation handlers
const toggleSidebar = (): void => {
  navigationState.isSidebarCollapsed = !navigationState.isSidebarCollapsed
}

const toggleSidebarOpen = (event: MouseEvent): void => {
  event.preventDefault()
  navigationState.isSidebarOpen = !navigationState.isSidebarOpen
}

const closeMobileSidebar = (): void => {
  navigationState.isSidebarOpen = false
}
</script>

<style>
.user-menu {
  z-index: 50;
}
</style> 