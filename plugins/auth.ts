export default defineNuxtPlugin(() => {
  const user = useSupabaseUser()
  
  return {
    provide: {
      isAuthenticated: () => !!user.value
    }
  }
}) 