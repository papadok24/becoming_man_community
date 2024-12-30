<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Sidebar -->
    <aside 
      :class="[
        'fixed inset-y-0 left-0 z-50 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col',
        isSidebarCollapsed ? 'w-16' : 'w-64'
      ]"
    >
      <!-- Logo section -->
      <div class="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
        <h1 
          :class="[
            'font-bold text-gray-900 dark:text-white transition-all duration-300',
            isSidebarCollapsed ? 'text-lg' : 'text-xl'
          ]"
        >
          {{ isSidebarCollapsed ? 'BM' : 'Becoming Man' }}
        </h1>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-2">
        <NuxtLink 
          to="/dashboard" 
          class="flex items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
          :class="{ 'justify-center': isSidebarCollapsed, 'px-4': !isSidebarCollapsed }"
        >
          <Icon name="mdi:view-dashboard" class="w-5 h-5 flex-shrink-0" :class="{ 'mr-3': !isSidebarCollapsed }" />
          <span v-show="!isSidebarCollapsed">Dashboard</span>
        </NuxtLink>

        <NuxtLink 
          to="/threads" 
          class="flex items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
          :class="{ 'justify-center': isSidebarCollapsed, 'px-4': !isSidebarCollapsed }"
        >
          <Icon name="mdi:forum" class="w-5 h-5 flex-shrink-0" :class="{ 'mr-3': !isSidebarCollapsed }" />
          <span v-show="!isSidebarCollapsed">Threads</span>
        </NuxtLink>

        <NuxtLink 
          to="/warrior-evolution" 
          class="flex items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
          :class="{ 'justify-center': isSidebarCollapsed, 'px-4': !isSidebarCollapsed }"
        >
          <Icon name="mdi:weight-lifter" class="w-5 h-5 flex-shrink-0" :class="{ 'mr-3': !isSidebarCollapsed }" />
          <span v-show="!isSidebarCollapsed">Warrior Evolution</span>
        </NuxtLink>

        <NuxtLink 
          to="/profile" 
          class="flex items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
          :class="{ 'justify-center': isSidebarCollapsed, 'px-4': !isSidebarCollapsed }"
        >
          <Icon name="mdi:account" class="w-5 h-5 flex-shrink-0" :class="{ 'mr-3': !isSidebarCollapsed }" />
          <span v-show="!isSidebarCollapsed">Profile</span>
        </NuxtLink>
      </nav>

      <!-- Sidebar Footer -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <button 
          @click="toggleSidebar"
          class="w-full flex items-center justify-center p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
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
        'transition-all duration-300',
        isSidebarCollapsed ? 'pl-16' : 'pl-64'
      ]"
    >
      <!-- Top header -->
      <header class="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
        <!-- Left side -->
        <div class="flex items-center">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Dashboard</h2>
        </div>

        <!-- Right side -->
        <div class="flex items-center space-x-4">
          <!-- Theme toggle -->
          <button 
            class="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            @click="toggleTheme"
          >
            <Icon name="mdi:theme-light-dark" class="w-5 h-5" />
          </button>

          <!-- User menu -->
          <div class="relative user-menu">
            <button 
              class="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              @click.stop="toggleUserMenu"
            >
              <img 
                :src="userAvatar" 
                :alt="userName"
                class="w-8 h-8 rounded-full"
              >
              <span class="font-medium">{{ userName }}</span>
              <Icon name="mdi:chevron-down" class="w-5 h-5" />
            </button>

            <!-- Dropdown menu -->
            <div 
              v-show="isUserMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5"
            >
              <NuxtLink
                to="/profile"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                @click="isUserMenuOpen = false"
              >
                Your Profile
              </NuxtLink>
              <button
                @click="handleSignOut"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Page content -->
      <div class="p-6">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()
const isUserMenuOpen = ref(false)
const isSidebarCollapsed = ref(false)

const userName = computed(() => {
  return user.value?.user_metadata?.full_name || user.value?.user_metadata?.name || 'User'
})

const userAvatar = computed(() => {
  return user.value?.user_metadata?.avatar_url || user.value?.user_metadata?.picture || 'https://via.placeholder.com/32'
})

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
}

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

const handleSignOut = async () => {
  try {
    await supabase.auth.signOut()
    await router.push('/')
  } catch (error) {
    console.error('Error signing out:', error)
  }
}

// Close menu when clicking outside
onMounted(() => {
  const handleClick = (event) => {
    const userMenu = document.querySelector('.user-menu')
    if (userMenu && !userMenu.contains(event.target)) {
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