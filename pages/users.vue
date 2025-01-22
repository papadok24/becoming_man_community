<!-- User Management Page -->
<script setup lang="ts">
import { useUsersStore } from '~/stores/users'
import { useUserStore } from '~/stores/user'

// Define page meta to use dashboard layout
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth', 'admin']
})

const usersStore = useUsersStore()
const userStore = useUserStore()

// Initial fetch on mount
onMounted(async () => {
  if (userStore.isAuthenticated) {
    await usersStore.fetchUsers()
  }
})

// Watch for authentication changes
watch(() => userStore.isAuthenticated, async (isAuthenticated) => {
  if (isAuthenticated) {
    await usersStore.fetchUsers()
  }
})

// Computed properties for better reactivity
const showEmptyState = computed(() => !usersStore.loading && !usersStore.hasUsers)
const showTable = computed(() => !usersStore.loading && usersStore.hasUsers)
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

    <!-- Users Table -->
    <div 
      v-else-if="showTable"
      class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg overflow-hidden"
    >
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-black/10 dark:divide-white/10">
          <thead>
            <tr class="bg-black/5 dark:bg-white/5">
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black/70 dark:text-white/70 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black/70 dark:text-white/70 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black/70 dark:text-white/70 uppercase tracking-wider">
                Roles
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black/70 dark:text-white/70 uppercase tracking-wider">
                Social
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-black/10 dark:divide-white/10">
            <tr 
              v-for="user in usersStore.users" 
              :key="user.id"
              class="hover:bg-black/5 dark:hover:bg-white/5"
            >
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center space-x-4">
                  <img 
                    :src="user.profile_img || '/default-avatar.png'" 
                    :alt="user.full_name"
                    class="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                  >
                  <div class="text-sm font-medium text-black dark:text-white">
                    {{ user.full_name }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-black/70 dark:text-white/70">
                  {{ user.email }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-black/70 dark:text-white/70">
                  {{ usersStore.getRoleNames(user.profile_role) }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex space-x-2">
                  <a 
                    v-if="user.instagram_url"
                    :href="user.instagram_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                    aria-label="Instagram"
                  >
                    <Icon name="mdi:instagram" class="w-5 h-5" />
                  </a>
                  <a 
                    v-if="user.twitter_url"
                    :href="user.twitter_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                    aria-label="Twitter"
                  >
                    <Icon name="mdi:twitter" class="w-5 h-5" />
                  </a>
                  <a 
                    v-if="user.youtube_url"
                    :href="user.youtube_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                    aria-label="YouTube"
                  >
                    <Icon name="mdi:youtube" class="w-5 h-5" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div 
        v-if="usersStore.totalPages > 1"
        class="px-6 py-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between"
      >
        <div class="text-sm text-black/70 dark:text-white/70">
          Showing {{ usersStore.startIndex }} to {{ usersStore.endIndex }} of {{ usersStore.total }} users
        </div>
        <nav aria-label="Pagination" class="flex space-x-2">
          <button
            v-for="page in usersStore.totalPages"
            :key="page"
            @click="usersStore.setPage(page)"
            :class="[
              'px-3 py-1 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white',
              page === usersStore.currentPage
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5'
            ]"
            :aria-current="page === usersStore.currentPage ? 'page' : undefined"
          >
            {{ page }}
          </button>
        </nav>
      </div>
    </div>
  </div>
</template> 