<template>
  <div v-if="showContent" class="max-w-4xl mx-auto space-y-6">
    <!-- Profile Header -->
    <div class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-6">
      <h1 class="text-2xl font-bold text-black dark:text-white">
        Profile Settings
      </h1>
      <p class="mt-2 text-black/70 dark:text-white/70">
        Update your profile information and settings
      </p>
    </div>

    <!-- Profile Form -->
    <form @submit.prevent="handleSubmit" class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg">
      <div class="p-6 space-y-8">
        <!-- Basic Information Section -->
        <div class="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-start">
          <!-- Avatar -->
          <div class="w-full md:w-auto">
            <FormAvatar
              id="profile_img"
              label="Profile Image"
              v-model="formData.profile_img"
              :error="errors.profile_img"
            />
          </div>

          <!-- Basic Info Fields -->
          <div class="space-y-6">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Basic Information</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormInput
                id="full_name"
                label="Full Name"
                v-model="formData.full_name"
                :required="true"
                icon="mdi:account"
                :error="errors.full_name"
                placeholder="Enter your full name"
              />
              <FormInput
                id="email"
                label="Email"
                v-model="formData.email"
                type="email"
                :required="true"
                icon="mdi:email"
                :error="errors.email"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>

        <!-- Biography Section -->
        <div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">About You</h2>
          <FormTextarea
            id="bio"
            label="Biography"
            v-model="formData.bio"
            :error="errors.bio"
            placeholder="Tell us about yourself"
            :rows="4"
          />
        </div>

        <!-- Social Media Section -->
        <div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">Social Media</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormInput
              id="instagram_url"
              label="Instagram"
              v-model="formData.instagram_url"
              icon="mdi:instagram"
              :error="errors.instagram_url"
              placeholder="@username"
            />
            <FormInput
              id="twitter_url"
              label="X (Twitter)"
              v-model="formData.twitter_url"
              icon="mdi:twitter"
              :error="errors.twitter_url"
              placeholder="@username"
            />
            <FormInput
              id="youtube_url"
              label="YouTube"
              v-model="formData.youtube_url"
              icon="mdi:youtube"
              :error="errors.youtube_url"
              placeholder="@username"
            />
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="p-6 bg-gray-50 dark:bg-gray-900/50 border-t border-black/10 dark:border-white/10 flex justify-end">
        <button
          type="submit"
          :disabled="isSubmitting || !isFormValid"
          class="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon v-if="isSubmitting" name="mdi:loading" class="w-5 h-5 animate-spin" />
          <span>{{ isSubmitting ? 'Saving...' : 'Save Changes' }}</span>
        </button>
      </div>
    </form>
  </div>
  <div v-else-if="isLoading" class="flex items-center justify-center min-h-screen">
    <Icon name="mdi:loading" class="w-8 h-8 animate-spin text-blue-500" />
  </div>
  <div v-else class="flex items-center justify-center min-h-screen">
    <p class="text-gray-500 dark:text-gray-400">Please sign in to access your profile.</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { useToastStore } from '~/stores/toast'
import { useNuxtApp } from '#app'
import type { Profile } from '~/types/users'

// Define page metadata using type-safe definePageMeta
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})

// Types with proper TypeScript interfaces
type ProfileFormFields = 'full_name' | 'email' | 'profile_img' | 'bio' | 'instagram_url' | 'twitter_url' | 'youtube_url'

interface ProfileFormData {
  full_name: string
  email: string
  profile_img: string
  bio: string
  instagram_url: string
  twitter_url: string
  youtube_url: string
}

type FormErrors = Partial<Record<ProfileFormFields, string>>

// Composables - using auto-imports
const nuxtApp = useNuxtApp()
const userStore = useUserStore()
const toastStore = useToastStore()
const route = useRoute()

// Reactive state with proper typing
const isSubmitting = ref<boolean>(false)
const isLoading = ref<boolean>(true)
const isOffline = ref<boolean>(false)
const errors = ref<FormErrors>({})

// Form state with validation schema
const formData = ref<ProfileFormData>({
  full_name: '',
  email: '',
  profile_img: '',
  bio: '',
  instagram_url: '',
  twitter_url: '',
  youtube_url: ''
})

// Computed properties with proper return types
const showContent = computed((): boolean => !isLoading.value && userStore.isAuthenticated)

const isFormValid = computed((): boolean => {
  const { full_name, email } = formData.value
  return Boolean(full_name.trim() && email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
})

// Type-safe methods
const resetErrors = (): void => {
  errors.value = {}
}

const validateForm = (): boolean => {
  resetErrors()
  
  const { full_name, email } = formData.value
  
  if (!full_name.trim()) {
    errors.value.full_name = 'Full name is required'
  }
  
  if (!email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.value.email = 'Please enter a valid email address'
  }
  
  return Object.keys(errors.value).length === 0
}

// Network status handlers with proper typing
const handleOnline = (): void => {
  isOffline.value = false
  toastStore.showSuccess('You are back online!')
  if (userStore.isAuthenticated) {
    void userStore.fetchUserProfile()
  }
}

const handleOffline = (): void => {
  isOffline.value = true
  toastStore.showError('You are offline. Changes will be saved when you reconnect.')
}

// Form submission with proper async handling
const handleSubmit = async (): Promise<void> => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  resetErrors()

  try {
    if (typeof window !== 'undefined' && !navigator.onLine) {
      throw new Error('You are offline. Please try again when you have an internet connection.')
    }

    await userStore.updateProfile(formData.value)
    toastStore.showSuccess('Profile updated successfully')
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to update profile'
    toastStore.showError(message)
  } finally {
    isSubmitting.value = false
  }
}

// Modern Composition API usage with watchEffect
watchEffect(() => {
  const profile = userStore.profile
  if (profile && 'full_name' in profile) {
    const {
      full_name,
      email,
      profile_img,
      bio,
      instagram_url,
      twitter_url,
      youtube_url
    } = profile as Profile

    formData.value = {
      full_name,
      email,
      profile_img: profile_img ?? '',
      bio: bio ?? '',
      instagram_url: instagram_url ?? '',
      twitter_url: twitter_url ?? '',
      youtube_url: youtube_url ?? ''
    }
  }
})

// Lifecycle hooks with proper async handling
onMounted(async () => {
  if (typeof window !== 'undefined') {
    isOffline.value = !navigator.onLine
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
  }

  try {
    if (!userStore.profile) {
      await userStore.fetchUserProfile()
    }
  } catch (error) {
    if (typeof window !== 'undefined' && !navigator.onLine) {
      toastStore.showError('You are currently offline. Some features may be limited.')
    } else {
      toastStore.showError('Failed to load profile. Please try again later.')
    }
  } finally {
    isLoading.value = false
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('online', handleOnline)
    window.removeEventListener('offline', handleOffline)
  }
})
</script> 