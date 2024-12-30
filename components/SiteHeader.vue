<template>
  <header class="bg-white dark:bg-black border-b border-black dark:border-white">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-black dark:text-white">
            Becoming Man
          </NuxtLink>
        </div>

        <!-- Main Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/"
            class="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about"
            class="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/warrior-evolution"
            class="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition"
          >
            Warrior Evolution
          </NuxtLink>
          
        </div>

        <!-- Auth Buttons -->
        <div class="flex items-center space-x-4">
          
          <OAuthButton 
            provider="google" 
            label="Sign In" 
            icon="mdi:google"
            :isRegistration="false"
          />
        </div>
      </div>
    </nav>
  </header>
</template>
