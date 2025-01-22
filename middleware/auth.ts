import { useUserStore } from '@/stores/user'
import { useSupabaseUser } from '#imports'
import { navigateTo } from '#imports'

export default defineNuxtRouteMiddleware(async (to) => {
  const userStore = useUserStore()
  const user = useSupabaseUser()

  // Skip middleware for public routes
  const publicRoutes = ['/', '/warrior-evolution', '/about', '/invite']
  if (publicRoutes.includes(to.path)) {
    return
  }

  // If not authenticated, redirect to invite page
  if (!user.value) {
    return navigateTo('/invite')
  }

  // Ensure user store is initialized
  if (user.value && !userStore.user) {
    userStore.setUser(user.value)
  }
}) 