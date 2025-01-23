<!-- User Management Page -->
<script setup lang="ts">
import { useUsersStore } from '~/stores/users'
import { useUserStore } from '~/stores/user'
import type { ProfileWithRoles } from '~/types/users'

// Define page meta to use dashboard layout
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth', 'admin']
})

const usersStore = useUsersStore()
const userStore = useUserStore()

// Local state
const selectedUser = ref<ProfileWithRoles | null>(null)
const isLoading = ref(false)

// Computed properties for better reactivity
const showEmptyState = computed(() => !usersStore.loading && !usersStore.hasUsers)
const showTable = computed(() => !usersStore.loading && usersStore.hasUsers)

// Initial fetch on mount
onMounted(async () => {
  if (userStore.isAuthenticated) {
    try {
      await usersStore.initialize()
    } catch (error) {
      console.error('Error initializing users:', error)
    }
  }
})

// Watch for authentication changes
watch(() => userStore.isAuthenticated, async (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    try {
      await usersStore.initialize()
    } catch (error) {
      console.error('Error initializing users:', error)
    }
  }
})

// Methods
const openUserProfile = (user: ProfileWithRoles) => {
  selectedUser.value = user
}

const closeUserProfile = () => {
  selectedUser.value = null
}

const handleSearch = (query: string) => {
  usersStore.setSearch(query)
}

const handleRoleFilter = (roleId: number | null) => {
  usersStore.setRoleFilter(roleId)
}

const handleUserUpdate = async (updatedUser: ProfileWithRoles) => {
  await usersStore.updateUser(updatedUser)
  closeUserProfile()
}

const handleUserDelete = async () => {
  if (selectedUser.value) {
    await usersStore.deleteUser(selectedUser.value.id)
    closeUserProfile()
  }
}
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-black dark:text-white">
        User Management
      </h1>
    </div>

    <!-- Error Message -->
    <div 
      v-if="usersStore.error" 
      class="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-lg"
      role="alert"
    >
      <p class="font-medium">Error loading users:</p>
      <p>{{ usersStore.error }}</p>
    </div>

    <!-- Loading State -->
    <div 
      v-if="usersStore.loading" 
      class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg overflow-hidden"
      role="status"
    >
      <div class="p-4">
        <div class="animate-pulse space-y-4">
          <div class="h-4 bg-black/10 dark:bg-white/10 rounded w-1/4"></div>
          <div class="space-y-3">
            <div class="h-4 bg-black/10 dark:bg-white/10 rounded"></div>
            <div class="h-4 bg-black/10 dark:bg-white/10 rounded w-5/6"></div>
            <div class="h-4 bg-black/10 dark:bg-white/10 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div 
      v-else-if="showEmptyState"
      class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-8 text-center"
    >
      <div class="mx-auto h-12 w-12 text-black/30 dark:text-white/30">
        <Icon name="heroicons:users" class="h-12 w-12" />
      </div>
      <h3 class="mt-2 text-sm font-medium text-black dark:text-white">No Users</h3>
      <p class="mt-1 text-sm text-black/70 dark:text-white/70">
        No users have been added to the platform yet.
      </p>
    </div>

    <!-- Users List -->
    <UserList
      v-else-if="showTable"
      :users="usersStore.users"
      :roles="usersStore.roles"
      :total="usersStore.total"
      :current-page="usersStore.currentPage"
      :page-size="usersStore.pageSize"
      :total-pages="usersStore.calculatedTotalPages"
      :start-index="usersStore.calculatedStartIndex"
      :end-index="usersStore.calculatedEndIndex"
      @select-user="openUserProfile"
      @page-change="usersStore.setPage"
      @search="handleSearch"
      @filter-role="handleRoleFilter"
      @update-page-size="usersStore.setPageSize"
    />

    <!-- User Profile Modal -->
    <UserProfileModal
      v-if="selectedUser"
      :show="!!selectedUser"
      :user="selectedUser"
      :available-roles="usersStore.roles"
      @close="closeUserProfile"
      @save="handleUserUpdate"
      @delete="handleUserDelete"
    />
  </div>
</template> 