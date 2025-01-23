<template>
  <div class="space-y-6">
    <!-- Search and Filters -->
    <div class="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
      <div class="relative flex-1 max-w-xs">
        <input
          type="search"
          :value="searchQuery"
          @input="handleSearch"
          placeholder="Search users..."
          class="w-full pl-10 pr-4 py-2 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Icon
          name="heroicons:magnifying-glass"
          class="absolute left-3 top-2.5 h-5 w-5 text-black/50 dark:text-white/50"
        />
      </div>
      <div class="flex items-center gap-4">
        <select
          v-model="selectedRole"
          class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option :value="null">All Roles</option>
          <option v-for="role in props.roles" :key="role.id" :value="role.id">
            {{ role.role_name }}
          </option>
        </select>
        <select
          v-model="pageSize"
          class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option :value="10">10 per page</option>
          <option :value="25">25 per page</option>
          <option :value="50">50 per page</option>
        </select>
      </div>
    </div>

    <!-- Users Grid -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="user in displayedUsers"
        :key="user.id"
        class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer"
        @click="handleUserClick(user)"
      >
        <!-- User Card Content -->
        <div class="flex items-center space-x-4">
          <img
            :src="user.profile_img || '/default-avatar.png'"
            :alt="user.full_name"
            class="w-12 h-12 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <h3 class="font-medium text-black dark:text-white">{{ user.full_name }}</h3>
            <p class="text-sm text-black/70 dark:text-white/70">{{ user.email }}</p>
          </div>
        </div>

        <!-- Roles -->
        <div class="mt-4">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="role in user.profile_role"
              :key="role.role_id"
              class="px-2 py-1 text-xs rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
            >
              {{ role.role.role_name }}
            </span>
          </div>
        </div>

        <!-- Social Links -->
        <div class="mt-4 flex items-center space-x-2">
          <a
            v-if="user.instagram_url"
            :href="user.instagram_url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
            @click.stop
          >
            <Icon name="mdi:instagram" class="w-5 h-5" />
          </a>
          <a
            v-if="user.twitter_url"
            :href="user.twitter_url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
            @click.stop
          >
            <Icon name="mdi:twitter" class="w-5 h-5" />
          </a>
          <a
            v-if="user.youtube_url"
            :href="user.youtube_url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
            @click.stop
          >
            <Icon name="mdi:youtube" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex items-center justify-between">
      <div class="text-sm text-black/70 dark:text-white/70">
        Showing {{ startIndex }} to {{ endIndex }} of {{ total }} users
      </div>
      <nav aria-label="Pagination" class="flex space-x-2">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="handlePageChange(page)"
          :class="[
            'px-3 py-1 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white',
            page === currentPage
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5'
          ]"
          :aria-current="page === currentPage ? 'page' : undefined"
        >
          {{ page }}
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'UserList'
})

import type { ProfileWithRoles, Role } from '~/types/users'
import { useUsersStore } from '~/stores/users'

// Props with TypeScript interface
interface Props {
  users: ProfileWithRoles[]
  roles: Role[]
  total: number
  currentPage: number
  pageSize: number
  totalPages: number
  startIndex: number
  endIndex: number
}

// Define props and emits with defaults
const props = withDefaults(defineProps<Props>(), {
  users: () => [],
  roles: () => [],
  total: 0,
  currentPage: 1,
  pageSize: 10,
  totalPages: 1,
  startIndex: 1,
  endIndex: 0
})

// Emits with proper typing
type Emits = {
  (e: 'select-user', user: ProfileWithRoles): void
  (e: 'page-change', page: number): void
  (e: 'search', query: string): void
  (e: 'filter-role', roleId: number | null): void
  (e: 'update-page-size', size: number): void
}

const emit = defineEmits<Emits>()

// Store
const usersStore = useUsersStore()

// Reactive state with proper typing
const searchQuery = ref<string>('')
const selectedRole = ref<number | null>(null)
const pageSize = ref<number>(props.pageSize)

// Watch for role changes
watch(selectedRole, (newRole) => {
  emit('filter-role', newRole)
})

// Computed properties
const displayedUsers = computed(() => props.users)

// Methods
const handleSearch = (event: Event) => {
  const query = (event.target as HTMLInputElement).value
  searchQuery.value = query
  emit('search', query)
}

const handlePageSizeChange = (event: Event) => {
  const value = Number((event.target as HTMLSelectElement).value)
  pageSize.value = value
  emit('update-page-size', value)
}

const handleUserClick = (user: ProfileWithRoles): void => {
  emit('select-user', user)
}

const handlePageChange = (page: number): void => {
  emit('page-change', page)
}

const handleSocialClick = (event: Event): void => {
  event.stopPropagation()
}
</script> 