<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

// Redirect if not authenticated
if (!user.value) {
  navigateTo('/invite')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome to Becoming Man
        </h1>
        <p class="mt-4 text-gray-600 dark:text-gray-400">
          Your account has been successfully set up.
        </p>
      </div>
    </div>
  </div>
</template> 