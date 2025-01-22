import { useDark, useToggle } from '@vueuse/core'
import { useHead } from '#imports'

// Create a shared state for theme initialization
const isThemeReady = ref(false)

export const useTheme = () => {
  // Initialize with SSR-friendly defaults and system preferences
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    storageKey: 'color-scheme', // Key for localStorage
    storage: process.client ? localStorage : undefined,
    initialValue: () => {
      // Check localStorage first
      if (process.client) {
        const stored = localStorage.getItem('color-scheme')
        if (stored) return stored === 'dark' ? 'dark' : 'light'
      }
      // Fallback to system preference
      if (process.client && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      return 'light'
    },
    onChanged: (dark: boolean) => {
      if (process.client) {
        localStorage.setItem('color-scheme', dark ? 'dark' : 'light')
        // Mark theme as ready after first change
        isThemeReady.value = true
      }
    }
  })

  // Mark theme as ready immediately on server
  if (process.server) {
    isThemeReady.value = true
  }

  // Watch for system preference changes
  if (process.client) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem('color-scheme')) {
        isDark.value = e.matches
      }
    })
  }

  // Add class to html element during SSR to prevent flicker
  if (process.server) {
    useHead({
      htmlAttrs: {
        class: isDark.value ? 'dark' : ''
      }
    })
  }

  const toggleDark = (value?: boolean) => {
    isDark.value = value ?? !isDark.value
  }

  return {
    isDark,
    toggleDark,
    isThemeReady
  }
} 