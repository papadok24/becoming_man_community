<!-- Avatar Upload Component -->
<template>
  <div class="space-y-4">
    <label :for="id" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
      {{ label }}
    </label>

    <!-- Avatar Preview -->
    <div v-if="!isUploading && !showUploadInterface" class="relative w-32 h-32 mx-auto">
      <img 
        :src="displayedAvatar" 
        :alt="label"
        class="w-full h-full object-cover rounded-full border-2 border-gray-200 dark:border-gray-700"
      />
      <button
        @click="handleReplace"
        class="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <Icon name="mdi:camera" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>
    </div>

    <!-- Upload Interface -->
    <div v-else class="flex flex-col items-center justify-center">
      <div
        class="w-32 h-32 border-2 border-dashed rounded-full flex items-center justify-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200"
        :class="[
          isDragging ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600',
          isUploading ? 'opacity-50 cursor-not-allowed' : ''
        ]"
        @dragover.prevent="isDragging = true"
        @dragleave.prevent="isDragging = false"
        @drop.prevent="handleDrop"
        @click="!isUploading && $refs.fileInput.click()"
      >
        <div v-if="isUploading" class="text-center">
          <Icon name="mdi:loading" class="w-8 h-8 animate-spin text-blue-500" />
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Uploading...</p>
        </div>
        <div v-else class="text-center">
          <Icon name="mdi:cloud-upload" class="w-8 h-8 text-gray-400 dark:text-gray-500" />
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Drag & drop or click to upload
          </p>
        </div>
      </div>
      <input
        ref="fileInput"
        :id="id"
        type="file"
        accept="image/*"
        class="hidden"
        @change="handleFileSelect"
      />
      <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-400">{{ error }}</p>
      
      <!-- Cancel Button -->
      <button
        v-if="!isUploading"
        @click="cancelUpload"
        class="mt-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useToastStore } from '@/stores/toast'
import { useUserStore } from '@/stores/user'

interface UserProfile {
  id: number
  supabase_user: string
  bio: string | null
  profile_img: string | null
  email: string
  full_name: string
  instagram_url: string | null
  twitter_url: string | null
  youtube_url: string | null
}

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']

const props = defineProps<{
  id: string
  label: string
  modelValue: string | null
  error?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
  (e: 'error', value: string): void
}>()

const isDragging = ref(false)
const isUploading = ref(false)
const showUploadInterface = ref(false)
const fileInput = ref<HTMLInputElement>()
const toastStore = useToastStore()
const userStore = useUserStore()

// Use userAvatar getter as fallback
const displayedAvatar = computed(() => props.modelValue || userStore.userAvatar)

const handleReplace = () => {
  showUploadInterface.value = true
}

const cancelUpload = () => {
  showUploadInterface.value = false
  isDragging.value = false
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const validateFile = (file: File): string | null => {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return 'Please upload a valid image file (JPEG, PNG, or WebP)'
  }
  if (file.size > MAX_FILE_SIZE) {
    return 'File size should be less than 5MB'
  }
  return null
}

const compressImage = async (file: File): Promise<File> => {
  if (!file.type.startsWith('image/')) return file
  
  const img = new Image()
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  return new Promise((resolve, reject) => {
    img.onload = () => {
      // Max dimensions
      const maxWidth = 1200
      const maxHeight = 1200
      let width = img.width
      let height = img.height

      // Calculate new dimensions
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width)
          width = maxWidth
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height)
          height = maxHeight
        }
      }

      canvas.width = width
      canvas.height = height
      ctx?.drawImage(img, 0, 0, width, height)

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Failed to compress image'))
            return
          }
          resolve(new File([blob], file.name, {
            type: 'image/jpeg',
            lastModified: Date.now(),
          }))
        },
        'image/jpeg',
        0.8
      )
    }
    img.onerror = () => reject(new Error('Failed to load image'))
    img.src = URL.createObjectURL(file)
  })
}

const handleUpload = async (file: File) => {
  const error = validateFile(file)
  if (error) {
    emit('error', error)
    toastStore.showError(error)
    return
  }

  try {
    const compressedFile = await compressImage(file)
    const formData = new FormData()
    formData.append('file', compressedFile)

    const response = await $fetch<{ url: string; profile: UserProfile }>('/api/upload-avatar', {
      method: 'POST',
      body: formData
    })

    userStore.setProfile(response.profile)
    emit('update:modelValue', response.url)
    toastStore.showSuccess('Profile image updated successfully')
  } catch (error) {
    console.error('Upload error:', error)
    const message = error instanceof Error ? error.message : 'Failed to upload profile image'
    emit('error', message)
    toastStore.showError(message)
  }
}

const handleFileUpload = async (file: File) => {
  try {
    isUploading.value = true
    await handleUpload(file)
    showUploadInterface.value = false // Hide upload interface after successful upload
  } catch (error) {
    console.error('Upload error:', error)
  } finally {
    isUploading.value = false
  }
}

const handleFileSelect = async (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    await handleFileUpload(file)
    input.value = '' // Reset input
  }
}

const handleDrop = async (event: DragEvent) => {
  isDragging.value = false
  const file = event.dataTransfer?.files[0]
  if (file) {
    await handleFileUpload(file)
  }
}
</script> 