import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware(() => {
  const userStore = useUserStore()
  
  // Check if user has admin role (role_id === 1)
  if (!userStore.roles.some(role => role.role_id === 1)) {
    return navigateTo('/')
  }
}) 