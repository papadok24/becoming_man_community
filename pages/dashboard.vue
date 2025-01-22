<script setup>
import { useUserStore } from '~/stores/user'

// Set the layout and middleware
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})

const userStore = useUserStore()
const isLoading = ref(true)

// Fetch profile data on mount if needed
onMounted(async () => {
  try {
    if (!userStore.profile) {
      await userStore.fetchUserProfile()
    }
  } catch (error) {
    console.error('Error fetching profile:', error)
  } finally {
    isLoading.value = false
  }
})

// Add loading state to template
const showContent = computed(() => !isLoading.value)
</script>

<template>
  <div class="space-y-6">
    <!-- Welcome Section -->
    <div class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-6">
      <h1 class="text-2xl font-bold text-black dark:text-white">
        Welcome to Becoming Man
      </h1>
      <p class="mt-4 text-black/70 dark:text-white/70">
        Your account has been successfully set up.
      </p>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-black/5 dark:bg-white/5">
            <Icon name="mdi:account-group" class="w-6 h-6 text-black dark:text-white" />
          </div>
          <div class="ml-4">
            <h3 class="text-sm font-medium text-black/50 dark:text-white/50">Total Members</h3>
            <p class="text-lg font-semibold text-black dark:text-white">500+</p>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-black/5 dark:bg-white/5">
            <Icon name="mdi:forum-outline" class="w-6 h-6 text-black dark:text-white" />
          </div>
          <div class="ml-4">
            <h3 class="text-sm font-medium text-black/50 dark:text-white/50">Active Threads</h3>
            <p class="text-lg font-semibold text-black dark:text-white">24</p>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-black/5 dark:bg-white/5">
            <Icon name="mdi:weight-lifter" class="w-6 h-6 text-black dark:text-white" />
          </div>
          <div class="ml-4">
            <h3 class="text-sm font-medium text-black/50 dark:text-white/50">Warriors in Training</h3>
            <p class="text-lg font-semibold text-black dark:text-white">75</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-6">
      <h2 class="text-lg font-medium text-black dark:text-white mb-4">Recent Activity</h2>
      <div class="space-y-4">
        <div class="flex items-start">
          <div class="p-2 rounded-full bg-black/5 dark:bg-white/5">
            <Icon name="mdi:message-text" class="w-5 h-5 text-black dark:text-white" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-black dark:text-white">New thread in General Discussion</p>
            <p class="text-sm text-black/70 dark:text-white/70">John D. posted "Weekly Reflection: Strength in Unity"</p>
            <p class="text-xs text-black/50 dark:text-white/50 mt-1">2 hours ago</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="p-2 rounded-full bg-black/5 dark:bg-white/5">
            <Icon name="mdi:calendar" class="w-5 h-5 text-black dark:text-white" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-black dark:text-white">Upcoming Warrior Evolution</p>
            <p class="text-sm text-black/70 dark:text-white/70">New training session scheduled for next month</p>
            <p class="text-xs text-black/50 dark:text-white/50 mt-1">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 