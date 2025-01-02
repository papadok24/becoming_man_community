<template>
  <div class="space-y-4">
    <label 
      :for="id" 
      class="block text-sm font-semibold text-gray-900 dark:text-gray-100"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-0.5">*</span>
    </label>
    
    <textarea
      :id="id"
      :value="modelValue"
      @input="handleInput"
      :required="required"
      :placeholder="placeholder"
      :rows="rows"
      class="w-full rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-6 py-4 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent hover:border-gray-300 dark:hover:border-gray-600 outline-none transition-all duration-200 resize-none"
    ></textarea>
    
    <p v-if="error" class="text-sm text-red-500 mt-2">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 4
  },
  error: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

function handleInput(e: Event) {
  const target = e.target as HTMLTextAreaElement
  emit('update:modelValue', target?.value || '')
}
</script> 