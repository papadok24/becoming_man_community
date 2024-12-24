<template>
  <button
    @click="handleClick"
    :disabled="loading"
    class="w-full flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-xl text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <div v-if="loading" class="mr-3">
      <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
    <div v-else class="mr-3">
      <Icon :name="isSignedIn ? 'mdi:logout' : icon" />
    </div>
    <span class="text-base font-medium">{{ isSignedIn ? 'Sign Out' : label }}</span>
  </button>
</template>

<script setup>
const { auth } = useSupabaseClient()
const user = useSupabaseUser()
const { $isAuthenticated } = useNuxtApp()
const router = useRouter()

const props = defineProps({
  provider: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  redirectPath: {
    type: String,
    default: '/dashboard'
  }
})

const loading = ref(false)
const isSignedIn = computed(() => $isAuthenticated())

const handleClick = async () => {
  try {
    loading.value = true
    
    if (isSignedIn.value) {
      const { error } = await auth.signOut()
      if (error) throw error
      // After signing out, redirect to home page
      await router.push('/')
    } else {
      const { error } = await auth.signInWithOAuth({
        provider: props.provider,
        options: {
          redirectTo: window.location.origin + '/confirm',
          data: {
            redirectPath: props.redirectPath
          }
        }
      })
      if (error) throw error
    }
  } catch (error) {
    console.error('Authentication error:', error.message)
    // You might want to emit an event here to handle the error in the parent component
    emit('authError', error.message)
  } finally {
    loading.value = false
  }
}

// Define emits
const emit = defineEmits(['authError'])
</script>
