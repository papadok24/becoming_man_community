<template>
  <footer class="bg-white dark:bg-black text-black dark:text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Mission & Vision -->
        <div>
          <h3 class="font-bold text-xl mb-4">Our Mission</h3>
          <p class="mb-4">Becoming Man is a movement centered around returning honor to manhood by men learning to be Prophet, Priest, King, and Warrior</p>
          
          <h3 class="font-bold text-xl mb-4">Our Vision</h3>
          <p>Becoming Man is committed to partner with local organizations and churches to change the hearts of men in order to change the world - one man at a time.</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-bold text-xl mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="hover:text-gray-600 dark:hover:text-gray-300">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-gray-600 dark:hover:text-gray-300">About Us</NuxtLink></li>
            <li><NuxtLink to="/warrior-evolution" class="hover:text-gray-600 dark:hover:text-gray-300">Warrior Evolution</NuxtLink></li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="font-bold text-xl mb-4">Connect With Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-gray-600 dark:hover:text-gray-300" aria-label="Instagram">
              <Icon name="mdi:instagram" />
            </a>
            <a href="#" class="hover:text-gray-600 dark:hover:text-gray-300" aria-label="X (Twitter)">
              <Icon name="mdi:twitter" />
            </a>
            <a href="#" class="hover:text-gray-600 dark:hover:text-gray-300" aria-label="YouTube">
              <Icon name="mdi:youtube" />
            </a>
          </div>
        </div>

      </div>

      <div class="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Becoming Man Movement. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
