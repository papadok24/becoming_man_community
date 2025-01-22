<!-- User Management Page -->
<script setup lang="ts">
import { useUsersStore } from '~/stores/users'

// Define page meta to use dashboard layout
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth', 'admin']
})

const usersStore = useUsersStore()

// Initial fetch on mount
onMounted(() => {
  console.log('Users page mounted, fetching data...')
  usersStore.fetchUsers()
})
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
    <div v-if="usersStore.error" class="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-lg">
      <p class="font-medium">Error loading users:</p>
      <p>{{ usersStore.error }}</p>
    </div>

    <!-- Loading State -->
    <div v-if="usersStore.loading" class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-4">
      <p class="text-black/70 dark:text-white/70">Loading users...</p>
    </div>

    <!-- Users Table -->
    <div v-else class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg overflow-hidden">
      <!-- Debug Info (remove in production) -->
      <div class="p-4 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200">
        <p>Debug Info:</p>
        <pre class="text-xs mt-2">{{ { 
          userCount: usersStore.users.length, 
          total: usersStore.total, 
          currentPage: usersStore.currentPage, 
          pageSize: usersStore.pageSize 
        } }}</pre>
      </div>
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
            <tr v-if="usersStore.loading" class="animate-pulse">
              <td colspan="4" class="px-6 py-4">
                <div class="flex items-center space-x-4">
                  <div class="h-10 w-10 bg-black/10 dark:bg-white/10 rounded-full"></div>
                  <div class="space-y-2">
                    <div class="h-4 w-48 bg-black/10 dark:bg-white/10 rounded"></div>
                    <div class="h-3 w-32 bg-black/10 dark:bg-white/10 rounded"></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr 
              v-else
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
                  >
                    <Icon name="mdi:instagram" class="w-5 h-5" />
                  </a>
                  <a 
                    v-if="user.twitter_url"
                    :href="user.twitter_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                  >
                    <Icon name="mdi:twitter" class="w-5 h-5" />
                  </a>
                  <a 
                    v-if="user.youtube_url"
                    :href="user.youtube_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                  >
                    <Icon name="mdi:youtube" class="w-5 h-5" />
                  </a>
                </div>
              </td>
            </tr>
            <!-- Empty State -->
            <tr v-if="!usersStore.loading && !usersStore.hasUsers">
              <td colspan="4" class="px-6 py-4 text-center text-black/70 dark:text-white/70">
                No users found
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="px-6 py-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
        <div class="text-sm text-black/70 dark:text-white/70">
          Showing {{ usersStore.startIndex }} to {{ usersStore.endIndex }} of {{ usersStore.total }} users
        </div>
        <div class="flex space-x-2">
          <button
            v-for="page in usersStore.totalPages"
            :key="page"
            @click="usersStore.setPage(page)"
            :class="[
              'px-3 py-1 text-sm rounded-md',
              page === usersStore.currentPage
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5'
            ]"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template> 