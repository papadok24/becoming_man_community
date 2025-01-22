// Export for auto-imports
//export * from './toast'

import { defineStore } from 'pinia'

// Types
export interface Toast {
  id: number
  message: string
  type: 'success' | 'error'
  duration?: number
}

interface ToastState {
  toasts: Toast[]
}

// Store
export const useToastStore = defineStore('toast', {
  state: (): ToastState => ({
    toasts: []
  }),

  actions: {
    addToast(toast: Omit<Toast, 'id'>) {
      const id = Date.now()
      const duration = toast.duration || 5000 // Default 5 seconds

      this.toasts.push({ ...toast, id })

      // Auto remove after duration
      setTimeout(() => {
        this.removeToast(id)
      }, duration)
    },

    removeToast(id: number) {
      const index = this.toasts.findIndex(t => t.id === id)
      if (index > -1) {
        this.toasts.splice(index, 1)
      }
    },

    showSuccess(message: string, duration?: number) {
      this.addToast({
        message,
        type: 'success',
        duration
      })
    },

    showError(message: string, duration?: number) {
      this.addToast({
        message,
        type: 'error',
        duration
      })
    }
  }
}) 