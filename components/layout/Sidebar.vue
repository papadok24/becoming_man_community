<template>
  <aside 
    :class="[
      'fixed inset-y-0 left-0 z-40 bg-white dark:bg-black border-r border-black/10 dark:border-white/10 transition-all duration-300 flex flex-col',
      isCollapsed ? 'lg:w-16' : 'lg:w-64',
      'w-64 lg:translate-x-0',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <!-- Logo section -->
    <div class="h-16 flex items-center justify-center border-b border-black/10 dark:border-white/10 overflow-hidden">
      <h1 
        :class="[
          'font-bold text-black dark:text-white transition-all duration-300 whitespace-nowrap',
          isCollapsed ? 'text-lg' : 'text-xl'
        ]"
      >
        {{ isCollapsed ? 'BM' : 'Becoming Man' }}
      </h1>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
      <NuxtLink 
        v-for="link in navigationLinks"
        :key="link.to"
        :to="link.to" 
        class="flex items-center px-2 py-2 rounded-lg transition-all duration-300"
        :class="[
          { 'justify-center': isCollapsed, 'px-4': !isCollapsed },
          currentPath === link.to 
            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
            : 'text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5'
        ]"
        @click="$emit('close-mobile')"
      >
        <Icon 
          :name="link.icon" 
          class="w-5 h-5 flex-shrink-0" 
          :class="[
            { 'mr-3': !isCollapsed },
            currentPath === link.to ? 'text-blue-600 dark:text-blue-400' : ''
          ]" 
        />
        <Transition
          enter-active-class="transition-opacity duration-200"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <span v-show="!isCollapsed">{{ link.label }}</span>
        </Transition>
      </NuxtLink>
    </nav>

    <!-- Sidebar Footer -->
    <div class="p-4 border-t border-black/10 dark:border-white/10">
      <button 
        @click="$emit('toggle-collapse')"
        class="hidden lg:flex w-full items-center justify-center p-2 text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors duration-200"
      >
        <Icon 
          :name="isCollapsed ? 'mdi:chevron-right' : 'mdi:chevron-left'" 
          class="w-5 h-5"
        />
        <Transition
          enter-active-class="transition-opacity duration-200"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <span v-show="!isCollapsed" class="ml-2">Collapse Sidebar</span>
        </Transition>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LayoutSidebar'
})

import type { NavigationLink } from '~/types/navigation'

interface Props {
  navigationLinks: NavigationLink[]
  isCollapsed: boolean
  isOpen: boolean
  currentPath: string
}

const props = defineProps<Props>()

defineEmits<{
  'toggle-collapse': []
  'close-mobile': []
}>()
</script>

<style scoped>
.router-link-active {
  @apply text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30;
}

/* Optimize transitions */
.transition-all {
  will-change: transform, width;
}
</style> 