<template>
  <div class="space-y-6">
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
    <form @submit.prevent="handleSubmit" class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-4 lg:p-6">
      <!-- Basic Information Section -->
      <div class="space-y-6 lg:space-y-8">
        <div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 lg:mb-6">Basic Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <!-- Full Name -->
            <FormInput
              id="full_name"
              label="Full Name"
              v-model="formData.full_name"
              :required="true"
              icon="mdi:account"
              :error="errors.full_name"
              placeholder="Enter your full name"
            />

            <!-- Email -->
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

        <!-- Profile Details Section -->
        <div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 lg:mb-6">Profile Details</h2>
          <div class="grid grid-cols-1 gap-6 lg:gap-8">
            <!-- Profile Image URL -->
            <FormInput
              id="profile_img"
              label="Profile Image URL"
              v-model="formData.profile_img"
              icon="mdi:image"
              :error="errors.profile_img"
              placeholder="Enter image URL"
            />

            <!-- Biography -->
            <FormTextarea
              id="bio"
              label="Biography"
              v-model="formData.bio"
              :error="errors.bio"
              placeholder="Tell us about yourself"
              :rows="4"
            />
          </div>
        </div>

        <!-- Social Media Section -->
        <div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 lg:mb-6">Social Media Links</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <!-- Instagram -->
            <FormInput
              id="instagram_url"
              label="Instagram Handle"
              v-model="formData.instagram_url"
              icon="mdi:instagram"
              :error="errors.instagram_url"
              placeholder="@username"
            />

            <!-- X (Twitter) -->
            <FormInput
              id="twitter_url"
              label="X Handle"
              v-model="formData.twitter_url"
              icon="mdi:twitter"
              :error="errors.twitter_url"
              placeholder="@username"
            />

            <!-- YouTube -->
            <FormInput
              id="youtube_url"
              label="YouTube Handle"
              v-model="formData.youtube_url"
              icon="mdi:youtube"
              :error="errors.youtube_url"
              placeholder="@username"
            />
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end pt-6 mt-6 lg:pt-8 lg:mt-8 border-t border-black/10 dark:border-white/10">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center sm:justify-start space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon v-if="isSubmitting" name="mdi:loading" class="w-5 h-5 animate-spin" />
          <span>{{ isSubmitting ? 'Saving...' : 'Save Changes' }}</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { useToastStore } from '~/stores/toast'

// Set the layout to dashboard
definePageMeta({
  layout: 'dashboard'
})

const userStore = useUserStore()
const toastStore = useToastStore()
const isSubmitting = ref(false)

const formData = ref({
  full_name: '',
  email: '',
  profile_img: '',
  bio: '',
  instagram_url: '',
  twitter_url: '',
  youtube_url: ''
})

// Watch for profile changes and update form data
watch(() => userStore.profile, (newProfile) => {
  if (newProfile) {
    formData.value = {
      full_name: newProfile.full_name || '',
      email: newProfile.email || '',
      profile_img: newProfile.profile_img || '',
      bio: newProfile.bio || '',
      instagram_url: newProfile.instagram_url || '',
      twitter_url: newProfile.twitter_url || '',
      youtube_url: newProfile.youtube_url || ''
    }
  }
}, { immediate: true })

// Fetch profile data on mount
onMounted(async () => {
  if (userStore.isAuthenticated && !userStore.profile) {
    await userStore.fetchUserProfile()
  }
})

const errors = ref<Record<string, string>>({})

// Reset errors before validation
const resetErrors = () => {
  Object.keys(errors.value).forEach(key => {
    errors.value[key as keyof typeof errors.value] = ''
  })
}

// Validate form
const validateForm = () => {
  resetErrors()
  let isValid = true

  if (!formData.value.full_name) {
    errors.value.full_name = 'Full name is required'
    isValid = false
  }

  if (!formData.value.email) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address'
    isValid = false
  }

  return isValid
}

// Handle form submission
const handleSubmit = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  errors.value = {}

  try {
    await userStore.updateProfile(formData.value)
    toastStore.showSuccess('Profile updated successfully')
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to update profile'
    toastStore.showError(message)
  } finally {
    isSubmitting.value = false
  }
}

// Redirect if not authenticated
if (!userStore.isAuthenticated) {
  navigateTo('/invite')
}
</script> 