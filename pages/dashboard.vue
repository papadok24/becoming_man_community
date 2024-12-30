<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

// Redirect if not authenticated
if (!user.value) {
  navigateTo('/invite')
}

// Set the layout to dashboard
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <div class="space-y-6">
    <!-- Welcome Section -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
        Welcome to Becoming Man
      </h1>
      <p class="mt-4 text-gray-600 dark:text-gray-400">
        Your account has been successfully set up.
      </p>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-blue-500/10 text-blue-500">
            <Icon name="mdi:account-group" class="w-6 h-6" />
          </div>
          <div class="ml-4">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Members</h3>
            <p class="text-lg font-semibold text-gray-900 dark:text-white">500+</p>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-green-500/10 text-green-500">
            <Icon name="mdi:forum-outline" class="w-6 h-6" />
          </div>
          <div class="ml-4">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Active Threads</h3>
            <p class="text-lg font-semibold text-gray-900 dark:text-white">24</p>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-purple-500/10 text-purple-500">
            <Icon name="mdi:weight-lifter" class="w-6 h-6" />
          </div>
          <div class="ml-4">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Warriors in Training</h3>
            <p class="text-lg font-semibold text-gray-900 dark:text-white">75</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Activity</h2>
      <div class="space-y-4">
        <div class="flex items-start">
          <div class="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
            <Icon name="mdi:message-text" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-900 dark:text-white">New thread in General Discussion</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">John D. posted "Weekly Reflection: Strength in Unity"</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">2 hours ago</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
            <Icon name="mdi:calendar" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-900 dark:text-white">Upcoming Warrior Evolution</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">New training session scheduled for next month</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 