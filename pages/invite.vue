<script setup lang="ts">
interface InviteResponse {
  valid: boolean
  roleId: string
}

interface ServerError {
  statusCode: number
  message: string
  data?: {
    message?: string
  }
}

const inviteCode = ref('')
const isLoading = ref(false)
const error = ref('')
const validInvite = ref<InviteResponse | null>(null)

async function validateInvite() {
  if (!inviteCode.value) {
    error.value = 'Please enter an invite code'
    return
  }

  isLoading.value = true
  error.value = ''

  try {
    const { data, error: fetchError } = await useFetch<InviteResponse>('/api/confirm-invite', {
      method: 'POST',
      body: { inviteCode: inviteCode.value }
    })

    if (fetchError.value) {
      const serverError = fetchError.value as unknown as ServerError
      error.value = serverError.data?.message || serverError.message || 'Failed to validate invite code'
      return
    }

    if (data.value?.valid) {
      validInvite.value = data.value
    } else {
      error.value = 'Invalid invite code'
    }
  } catch (e: any) {
    error.value = e.data?.message || 'An unexpected error occurred'
  } finally {
    isLoading.value = false
  }
}

function handleAuthError(message: string) {
  error.value = message
  validInvite.value = null
}
</script>

<template>
  <div class="flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-32 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Logo/Header -->
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Join Becoming Man
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Enter your invite code to get started
        </p>
      </div>

      <!-- Invite Form -->
      <form v-if="!validInvite" class="mt-8 space-y-6" @submit.prevent="validateInvite">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="invite-code" class="sr-only">Invite Code</label>
            <input
              id="invite-code"
              v-model="inviteCode"
              type="text"
              required
              :disabled="isLoading"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white focus:z-10 sm:text-sm"
              placeholder="Enter your invite code"
            />
          </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="text-red-600 dark:text-red-400 text-sm text-center animate-fade-in">
          {{ error }}
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                v-if="!isLoading"
                class="h-5 w-5 text-gray-300 dark:text-gray-700 group-hover:text-gray-400 dark:group-hover:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg 
                v-else
                class="animate-spin h-5 w-5 text-gray-300 dark:text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            {{ isLoading ? 'Validating...' : 'Validate Invite Code' }}
          </button>
        </div>
      </form>

      <!-- OAuth Button after valid invite -->
      <div v-else class="mt-8">
        <OAuthButton
          provider="google"
          label="Continue with Google"
          icon="mdi:google"
          :roleId="validInvite.roleId"
          :isRegistration="true"
          @authError="handleAuthError"
        />
      </div>

      <!-- Help Text -->
      <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
        Don't have an invite code?
        <a href="/" class="font-medium text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-200">
          Learn more about Becoming Man
        </a>
      </p>
    </div>
  </div>
</template>

<style>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style> 