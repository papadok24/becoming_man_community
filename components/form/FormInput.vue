<template>
  <div class="space-y-4">
    <label 
      :for="id" 
      class="block text-sm font-semibold text-gray-900 dark:text-gray-100"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-0.5">*</span>
    </label>
    
    <div class="relative">
      <Icon 
        v-if="icon"
        :name="icon"
        class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400 pointer-events-none"
      />
      
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="handleInput"
        :required="required"
        :placeholder="placeholder"
        class="w-full rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-6 py-4 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent hover:border-gray-300 dark:hover:border-gray-600 outline-none transition-all duration-200"
        :class="[icon ? 'pl-12' : '']"
      >
    </div>
    
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
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target?.value || '')
}
</script> 