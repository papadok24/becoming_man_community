import { useUserStore } from '~/stores/user'

export default defineNuxtPlugin(async () => {
  const user = useSupabaseUser()
  const userStore = useUserStore()

  // Watch for user changes and update store
  watch(user, async (newUser) => {
    if (newUser) {
      userStore.setUser(newUser)
      await userStore.fetchUserProfile()
    } else {
      userStore.clearStore()
    }
  }, { immediate: true })
  
  return {
    provide: {
      isAuthenticated: () => userStore.isAuthenticated
    }
  }
}) 