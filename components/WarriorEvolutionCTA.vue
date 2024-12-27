<!-- Call to Action Component -->
<template>
  <div class="relative py-24 bg-gray-900 dark:bg-black overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
    
    <!-- Decorative Elements -->
    <div class="absolute -left-10 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-white opacity-5 rotate-45"></div>
    <div class="absolute -right-10 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-white opacity-5 rotate-45"></div>

    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Icon -->
        <div class="mb-12 flex justify-center">
          <div class="w-20 h-20 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
            <Icon name="mdi:sword-cross" class="w-10 h-10 text-white" />
          </div>
        </div>

        <!-- Main Content -->
        <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-white">
          Answer the Call to Excellence
        </h2>
        <p class="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
          Join an elite brotherhood of men committed to becoming stronger in spirit, mind, and body. Your journey to extraordinary begins here.
        </p>

        <!-- Features Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
          <div class="text-center flex flex-col items-center">
            <Icon name="mdi:crown" class="w-12 h-12 mb-3 text-white" />
            <span class="text-sm font-semibold tracking-wider text-white">PROPHET</span>
          </div>
          <div class="text-center flex flex-col items-center">
            <Icon name="mdi:church" class="w-12 h-12 mb-3 text-white" />
            <span class="text-sm font-semibold tracking-wider text-white">PRIEST</span>
          </div>
          <div class="text-center flex flex-col items-center">
            <Icon name="mdi:crown" class="w-12 h-12 mb-3 text-white" />
            <span class="text-sm font-semibold tracking-wider text-white">KING</span>
          </div>
          <div class="text-center flex flex-col items-center">
            <Icon name="mdi:sword-cross" class="w-12 h-12 mb-3 text-white" />
            <span class="text-sm font-semibold tracking-wider text-white">WARRIOR</span>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="flex flex-col items-center justify-center space-y-4">
          <button 
            @click="handleApply"
            class="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-gray-900 bg-white rounded-lg overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:bg-gray-100"
          >
            <span class="relative flex items-center tracking-wider">
              BEGIN YOUR JOURNEY
              <Icon name="mdi:arrow-right" class="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          <p class="text-sm text-gray-400">
            Limited spots available. Apply now to secure your position.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleApply = () => {
  // TODO: Implement application process
  console.log('CTA Apply clicked')
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px);
  background-size: 4rem 4rem;
}
</style> 