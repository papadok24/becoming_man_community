<template>
  <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="flex min-h-full items-end justify-center p-4 sm:items-center">
      <!-- Backdrop -->
      <div 
        class="fixed inset-0 bg-black/50 dark:bg-black/70 transition-opacity" 
        @click="!isUploading && emit('close')"
        aria-hidden="true"
      />
      
      <!-- Modal -->
      <div class="relative w-full max-w-2xl bg-white dark:bg-black rounded-lg shadow-xl">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-black/10 dark:border-white/10">
          <div class="flex items-center justify-between">
            <h2 id="modal-title" class="text-xl font-semibold text-black dark:text-white">
              Edit User Profile
            </h2>
            <button
              @click="!isUploading && emit('close')"
              class="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white disabled:opacity-50"
              :disabled="isUploading"
              aria-label="Close modal"
            >
              <Icon name="heroicons:x-mark" class="w-6 h-6" />
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="px-6 py-4 space-y-6">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Profile Image -->
            <div class="flex items-center space-x-6">
              <div class="relative">
                <img
                  :src="formData.profile_img || '/default-avatar.png'"
                  :alt="`${formData.full_name}'s profile picture`"
                  class="w-20 h-20 rounded-full object-cover"
                />
                <button
                  type="button"
                  class="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-blue-500"
                  @click="triggerImageUpload"
                  :disabled="isUploading"
                  :aria-busy="isUploading"
                >
                  <Icon 
                    :name="isUploading ? 'heroicons:arrow-path' : 'heroicons:camera'" 
                    class="w-4 h-4"
                    :class="{ 'animate-spin': isUploading }"
                  />
                </button>
                <input
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="handleImageUpload"
                />
              </div>
              <div class="flex-1">
                <label class="block text-sm font-medium text-black/70 dark:text-white/70">
                  Profile Image
                </label>
                <p class="text-sm text-black/50 dark:text-white/50">
                  JPG, PNG or GIF, max 2MB
                </p>
              </div>
            </div>

            <!-- Basic Info -->
            <div class="grid grid-cols-1 gap-6">
              <div>
                <label for="full_name" class="block text-sm font-medium text-black/70 dark:text-white/70">
                  Full Name
                </label>
                <input
                  id="full_name"
                  v-model="formData.full_name"
                  type="text"
                  required
                  :disabled="isUploading"
                  class="mt-1 w-full px-4 py-2 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-black/70 dark:text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  :disabled="isUploading"
                  class="mt-1 w-full px-4 py-2 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
              </div>

              <div>
                <label for="bio" class="block text-sm font-medium text-black/70 dark:text-white/70">
                  Biography
                </label>
                <textarea
                  id="bio"
                  v-model="formData.bio"
                  rows="3"
                  :disabled="isUploading"
                  class="mt-1 w-full px-4 py-2 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
              </div>
            </div>

            <!-- Social Links -->
            <div class="grid grid-cols-1 gap-6">
              <div>
                <label for="instagram" class="block text-sm font-medium text-black/70 dark:text-white/70">
                  Instagram URL
                </label>
                <div class="mt-1 flex rounded-lg shadow-sm">
                  <span class="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70">
                    <Icon name="mdi:instagram" class="w-5 h-5" />
                  </span>
                  <input
                    id="instagram"
                    v-model="formData.instagram_url"
                    type="url"
                    :disabled="isUploading"
                    class="flex-1 px-4 py-2 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label for="twitter" class="block text-sm font-medium text-black/70 dark:text-white/70">
                  Twitter URL
                </label>
                <div class="mt-1 flex rounded-lg shadow-sm">
                  <span class="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70">
                    <Icon name="mdi:twitter" class="w-5 h-5" />
                  </span>
                  <input
                    id="twitter"
                    v-model="formData.twitter_url"
                    type="url"
                    :disabled="isUploading"
                    class="flex-1 px-4 py-2 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label for="youtube" class="block text-sm font-medium text-black/70 dark:text-white/70">
                  YouTube URL
                </label>
                <div class="mt-1 flex rounded-lg shadow-sm">
                  <span class="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70">
                    <Icon name="mdi:youtube" class="w-5 h-5" />
                  </span>
                  <input
                    id="youtube"
                    v-model="formData.youtube_url"
                    type="url"
                    :disabled="isUploading"
                    class="flex-1 px-4 py-2 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            <!-- Role Management -->
            <div>
              <label class="block text-sm font-medium text-black/70 dark:text-white/70">
                User Roles
              </label>
              <div class="mt-2 space-y-2">
                <div
                  v-for="role in availableRoles"
                  :key="role.id"
                  class="flex items-center"
                >
                  <input
                    :id="'role-' + role.id"
                    type="checkbox"
                    :value="role.id"
                    v-model="selectedRoles"
                    :disabled="isUploading"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-black/10 dark:border-white/10 rounded disabled:opacity-50"
                  />
                  <label
                    :for="'role-' + role.id"
                    class="ml-3 text-sm text-black/70 dark:text-white/70"
                  >
                    {{ role.role_name }}
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- Footer -->
        <div class="px-6 py-4 border-t border-black/10 dark:border-white/10 flex justify-between">
          <button
            @click="confirmDelete"
            :disabled="isUploading"
            class="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50"
          >
            Delete User
          </button>
          <div class="space-x-2">
            <button
              @click="emit('close')"
              :disabled="isUploading"
              class="px-4 py-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              @click="handleSubmit"
              :disabled="isUploading || !hasUnsavedChanges"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600"
            >
              {{ isUploading ? 'Saving...' : hasUnsavedChanges ? 'Save Changes' : 'No Changes' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'UserProfileModal'
})

/// <reference types="vue" />

// Types
import type { ProfileWithRoles, Role, ProfileRole } from '~/types/users'

// Interfaces
interface FormData extends Omit<ProfileWithRoles, 'profile_role'> {
  profile_img: string | null
}

interface Props {
  show: boolean
  user: ProfileWithRoles
  availableRoles: Role[]
}

// Props and Emits with TypeScript
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'save', data: ProfileWithRoles): void
  (e: 'delete'): void
}>()

// Composables
const client = useSupabaseClient()
const toastStore = useToastStore()

// Reactive state
const formData = ref<FormData>({ ...props.user })
const selectedRoles = ref<number[]>(props.user.profile_role.map((pr: ProfileRole) => pr.role_id))
const fileInput = ref<HTMLInputElement | null>(null)
const isUploading = ref<boolean>(false)

// Computed
const hasUnsavedChanges = computed(() => {
  const originalRoles = new Set(props.user.profile_role.map((pr: ProfileRole) => pr.role_id))
  const currentRoles = new Set(selectedRoles.value)
  const rolesChanged = originalRoles.size !== currentRoles.size || 
    [...originalRoles].some(role => !currentRoles.has(role))

  return rolesChanged || Object.keys(formData.value).some(key => {
    return formData.value[key as keyof FormData] !== props.user[key as keyof ProfileWithRoles]
  })
})

// Methods
const triggerImageUpload = () => {
  fileInput.value?.click()
}

const handleImageUpload = async (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!target.files?.length) return

  const file = target.files[0]
  if (file.size > 2 * 1024 * 1024) {
    toastStore.showError('Image size should be less than 2MB')
    return
  }

  try {
    isUploading.value = true
    
    // Upload to Supabase Storage
    const fileExt = file.name.split('.').pop()
    const fileName = `${props.user.id}-${Date.now()}.${fileExt}`
    const { data, error } = await client.storage
      .from('profile-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      })

    if (error) throw error

    // Get public URL
    const { data: { publicUrl } } = client.storage
      .from('profile-images')
      .getPublicUrl(data.path)

    formData.value.profile_img = publicUrl
    toastStore.showSuccess('Profile image uploaded successfully')
  } catch (error) {
    console.error('Error uploading image:', error)
    toastStore.showError('Failed to upload image. Please try again.')
  } finally {
    isUploading.value = false
  }
}

const handleSubmit = () => {
  if (!hasUnsavedChanges.value) {
    emit('close')
    return
  }

  emit('save', {
    ...formData.value,
    profile_role: selectedRoles.value.map((roleId: number) => {
      const role = props.availableRoles.find((r: Role) => r.id === roleId)
      if (!role) throw new Error(`Role with ID ${roleId} not found`)
      
      return {
        role_id: roleId,
        profile_id: props.user.id,
        assigned_at: new Date().toISOString(),
        role
      }
    })
  })
}

const confirmDelete = () => {
  const userName = formData.value.full_name || 'this user'
  if (window.confirm(`Are you sure you want to delete ${userName}? This action cannot be undone.`)) {
    emit('delete')
  }
}

// Watchers
watch(() => props.user, (newUser: ProfileWithRoles) => {
  formData.value = { ...newUser }
  selectedRoles.value = newUser.profile_role.map((pr: ProfileRole) => pr.role_id)
}, { deep: true })

// Lifecycle hooks
onBeforeUnmount(() => {
  // Clean up any object URLs to prevent memory leaks
  if (formData.value.profile_img?.startsWith('blob:')) {
    URL.revokeObjectURL(formData.value.profile_img)
  }
})
</script> 