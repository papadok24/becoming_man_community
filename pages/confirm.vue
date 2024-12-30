<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const route = useRoute()
const router = useRouter()
const loading = ref(true)
const error = ref(null)
const redirectTimer = ref(null)

async function handleError(message) {
  error.value = message
  
  try {
    await supabase.auth.signOut()
  } catch (e) {
    console.error('Error during sign out:', e)
  }

  redirectTimer.value = setTimeout(async () => {
    await router.push('/invite')
  }, 5000)
}

async function handleRegistration() {
  // Get role_id from URL params
  const roleId = route.query.roleId

  if (!roleId) {
    throw new Error('No role ID found. Please start from the invite page.')
  }

  // Get user's profile
  const { data: profile, error: profileError } = await supabase
    .from('profile')
    .select('id, supabase_user')
    .eq('supabase_user', user.value.id)
    .limit(1)
    .maybeSingle()

  if (profileError) {
    throw new Error(`Failed to fetch profile: ${profileError.message || 'Unknown error'}`)
  }

  if (!profile) {
    throw new Error('Profile not found. Please contact support.')
  }

  // Assign role using server route
  const { data: response, error: assignError } = await useFetch('/api/assign-role', {
    method: 'POST',
    body: {
      profileId: profile.id,
      roleId
    }
  })

  if (assignError.value) {
    throw new Error(assignError.value.message || 'Failed to assign role. Please try again.')
  }

  if (!response.value?.success) {
    throw new Error('Role assignment failed. Please try again.')
  }

  await router.push('/dashboard')
}

async function handleSignIn() {
  // Get user's profile
  const { data: profile, error: profileError } = await supabase
    .from('profile')
    .select('id, supabase_user')
    .eq('supabase_user', user.value.id)
    .limit(1)
    .maybeSingle()

  if (profileError) {
    throw new Error(`Failed to fetch profile: ${profileError.message || 'Unknown error'}`)
  }

  if (!profile) {
    throw new Error('No account found. Please register first.')
  }

  // Check if user has any roles using the new endpoint
  const { data: roleCheck, error: roleCheckError } = await useFetch('/api/check-roles', {
    method: 'POST',
    body: {
      profileId: profile.id
    }
  })

  if (roleCheckError.value) {
    throw new Error('Failed to verify account access. Please try again.')
  }

  if (!roleCheck.value?.hasRoles) {
    throw new Error('You need an invite to access this platform. Please request an invite to continue.')
  }

  await router.push('/dashboard')
}

async function handleConfirmation() {
  try {
    if (!user.value) {
      throw new Error('Authentication failed. Please try signing in again.')
    }

    const flow = route.query.flow || 'signin'

    if (flow === 'registration') {
      await handleRegistration()
    } else {
      await handleSignIn()
    }
  } catch (e) {
    await handleError(e.message || 'An unexpected error occurred')
  } finally {
    loading.value = false
  }
}

// Clean up timer if component is unmounted
onUnmounted(() => {
  if (redirectTimer.value) {
    clearTimeout(redirectTimer.value)
  }
})

// Watch for user and handle confirmation
watch(user, async (newUser) => {
  if (newUser) {
    await handleConfirmation()
  }
}, { immediate: true })
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div class="max-w-md w-full space-y-8 p-8">
      <div v-if="loading" class="text-center">
        <svg class="animate-spin h-10 w-10 mx-auto text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="mt-4 text-lg font-medium text-gray-900 dark:text-white">
          {{ route.query.flow === 'registration' ? 'Setting up your account...' : 'Signing you in...' }}
        </p>
      </div>
      
      <div v-if="error" class="text-center">
        <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800 dark:text-red-200">
                {{ route.query.flow === 'registration' ? 'Error Setting Up Account' : 'Error Signing In' }}
              </h3>
              <p class="mt-2 text-sm text-red-700 dark:text-red-300">
                {{ error }}
              </p>
            </div>
          </div>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Redirecting to invite page in 5 seconds...
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>