export default defineNuxtRouteMiddleware((to) => {
  // List of public routes that don't require authentication
  const publicRoutes = ['/', '/warrior-evolution']
  
  // If the route is public, allow access
  // Using exact path matching and normalizing the path
  const normalizedPath = to.path.replace(/\/$/, '') // Remove trailing slash if present
  if (publicRoutes.includes(normalizedPath)) {
    return
  }
  
  // Check if user is authenticated
  const user = useSupabaseUser()
  
  // If user is not authenticated and trying to access a protected route,
  // redirect to login page
  if (!user.value) {
    return navigateTo('/')
  }
}) 