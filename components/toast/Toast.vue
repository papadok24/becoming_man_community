<template>
  <TransitionGroup
    tag="div"
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-2 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-2 opacity-0"
    class="fixed bottom-4 right-4 z-50 flex flex-col gap-2"
  >
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="[
        'rounded-lg px-4 py-3 shadow-lg flex items-center gap-3 min-w-[300px] max-w-md',
        toast.type === 'success' ? 'bg-emerald-500 dark:bg-emerald-600 text-white' : '',
        toast.type === 'error' ? 'bg-red-500 dark:bg-red-600 text-white' : '',
      ]"
    >
      <div class="flex-shrink-0">
        <Icon
          v-if="toast.type === 'success'"
          name="mdi:check-circle"
          class="w-6 h-6"
        />
        <Icon
          v-else-if="toast.type === 'error'"
          name="mdi:alert-circle"
          class="w-6 h-6"
        />
      </div>
      <div class="flex-1">{{ toast.message }}</div>
      <button
        @click="removeToast(toast.id)"
        class="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
      >
        <Icon name="mdi:close" class="w-5 h-5" />
      </button>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const toastStore = useToastStore()
const { toasts } = storeToRefs(toastStore)
const { removeToast } = toastStore

defineOptions({
  name: 'Toast'
})
</script> 