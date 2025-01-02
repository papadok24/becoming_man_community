import { useDark, useToggle } from '@vueuse/core'

export const useTheme = () => {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    storageKey: 'color-scheme',
    storage: process.client ? localStorage : undefined,
  })
  const toggleTheme = useToggle(isDark)

  return {
    isDark,
    toggleTheme
  }
} 