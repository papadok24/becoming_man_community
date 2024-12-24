<template>
  <div class="bg-white dark:bg-black">
    <!-- Subpage Header Section -->
    <section class="relative py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="order-2 lg:order-1">
            <h1 class="text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white tracking-tight">
              BECOMING MAN<br/>
              <span class="text-3xl lg:text-4xl">Warrior Evolution</span>
            </h1>
            <p class="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              Become part of a tribe of Kingdom men who are dedicated to living Kingdom lives in a Kingdom brotherhood in the pursuit of living life to the fullest; a tribe of men who do life together, business together, collectively moving God's Kingdom forward at a rate that most men will never experience in their lifetime.
            </p>
            <button 
              class="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              @click="handleApplyNow"
            >
              Apply Now
              <svg 
                class="ml-2 -mr-1 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          <!-- Image Grid -->
          <div class="order-1 lg:order-2">
            <div class="grid grid-cols-2 gap-4">
              <!-- Main Image -->
              <div class="col-span-2">
                <img 
                  src="https://placehold.co/800x400/111827/FFFFFF/png?text=Warrior+Evolution"
                  alt="Warrior Evolution Training"
                  class="w-full h-64 object-cover rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                  @error="handleImageError"
                />
              </div>
              <!-- Supporting Images -->
              <div>
                <img 
                  src="https://placehold.co/400x300/111827/FFFFFF/png?text=Physical+Training"
                  alt="Physical Training"
                  class="w-full h-40 object-cover rounded-xl shadow-md transform hover:scale-[1.02] transition-all duration-300"
                  @error="handleImageError"
                />
              </div>
              <div>
                <img 
                  src="https://placehold.co/400x300/111827/FFFFFF/png?text=Mental+Training"
                  alt="Mental Training"
                  class="w-full h-40 object-cover rounded-xl shadow-md transform hover:scale-[1.02] transition-all duration-300"
                  @error="handleImageError"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative Background Element -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </section>

    <!-- The Experience Section -->
    <section class="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
            The Experience
          </h2>
          <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A transformative 75-hour journey that will challenge every aspect of your being.
          </p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left Side: Image -->
          <div class="relative">
            <img 
              src="https://placehold.co/800x600/111827/FFFFFF/png?text=Warrior+Training"
              alt="Warrior Training Experience"
              class="rounded-2xl shadow-2xl w-full transform hover:scale-[1.02] transition-all duration-300"
              @error="handleImageError"
            />
            <!-- Decorative Elements -->
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-black dark:bg-white rounded-2xl opacity-10 z-0"></div>
            <div class="absolute -top-6 -left-6 w-24 h-24 bg-black dark:bg-white rounded-2xl opacity-10 z-0"></div>
          </div>

          <!-- Right Side: Content -->
          <div class="space-y-8">
            <!-- Main Content Card -->
            <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold mb-6 text-black dark:text-white">
                What If...
              </h3>
              <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Over the course of 75 hours, you could tap into a limitless source of power you never knew existed? Imagine moving through life with total confidence in your ability to actually have the life, marriage, and finances you desire. That's what Becoming Man Warrior Evolution can do for you.
              </p>
              <div class="flex items-center text-red-600 dark:text-red-500 mb-6">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span class="font-semibold">Not for everyone</span>
              </div>
              <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                It's a test that connects you to the very core of IAM4. Warrior Evolution is brutal. You may not qualify, or make it through the training. But, if you're ready for this challenge, you'll find it to be an experience that changes your life, forever.
              </p>
            </div>

            <!-- Created To Be Section -->
            <div class="bg-gradient-to-br from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold mb-8 text-white text-center tracking-wider">
                YOU WERE CREATED TO BE
              </h3>
              <div class="grid grid-cols-4 gap-4">
                <div class="text-center">
                  <svg class="w-8 h-8 mb-2 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <span class="text-sm font-bold text-white tracking-wide">PROPHET</span>
                </div>
                <div class="text-center">
                  <svg class="w-8 h-8 mb-2 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-sm font-bold text-white tracking-wide">PRIEST</span>
                </div>
                <div class="text-center">
                  <svg class="w-8 h-8 mb-2 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span class="text-sm font-bold text-white tracking-wide">KING</span>
                </div>
                <div class="text-center">
                  <svg class="w-8 h-8 mb-2 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                  <span class="text-sm font-bold text-white tracking-wide">WARRIOR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Background Decorative Element -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </section>

    <!-- The Outcome Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
            The Outcome
          </h2>
          <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your spirit, soul, and body through an intensive 75-hour journey.
          </p>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <!-- Mental Fortitude Card -->
          <div class="bg-white dark:bg-black p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <div class="flex items-center mb-6">
              <svg class="w-8 h-8 text-black dark:text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 class="text-xl font-bold text-black dark:text-white">Mental Fortitude</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our desire is not merely to physically tax you, but to help you develop mental fortitude and vision that is already inside of you. Once you see who you are, who's you are, and what's available to you, it becomes impossible to ever settle for less in your life.
            </p>
          </div>

          <!-- Warrior Spirit Card -->
          <div class="bg-white dark:bg-black p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <div class="flex items-center mb-6">
              <svg class="w-8 h-8 text-black dark:text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h3 class="text-xl font-bold text-black dark:text-white">Warrior Spirit</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              In these 75 hours, your warrior spirit will evolve as you discover self discipline & focus while you sharpen your mind, will, & emotions. Your ability to be totally aware of your whole life will be enhanced as you learn to pursue until you reach a place of living life to the fullest.
            </p>
          </div>

          <!-- Total Transformation Card -->
          <div class="bg-white dark:bg-black p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <div class="flex items-center mb-6">
              <svg class="w-8 h-8 text-black dark:text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
              </svg>
              <h3 class="text-xl font-bold text-black dark:text-white">Total Transformation</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Every aspect of your spirit, soul, and body will be trained and tested, touching the six pillars of life. By pushing you beyond your self-imposed limits, your belief of who you are will be revolutionized.
            </p>
          </div>
        </div>

        <!-- Six Pillars (More Subtle Version) -->
        <div class="max-w-4xl mx-auto">
          <h3 class="text-lg font-semibold text-center mb-8 text-gray-600 dark:text-gray-400">
            The Six Pillars of Life
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div class="text-center group">
              <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all duration-300">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Physical</span>
            </div>
            <!-- Repeat for other pillars with their respective icons -->
            <div class="text-center group">
              <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all duration-300">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Mental</span>
            </div>
            <!-- Emotional -->
            <div class="text-center group">
              <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all duration-300">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Emotional</span>
            </div>
            <!-- Relational -->
            <div class="text-center group">
              <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all duration-300">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Relational</span>
            </div>
            <!-- Financial -->
            <div class="text-center group">
              <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all duration-300">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Financial</span>
            </div>
            <!-- Spiritual -->
            <div class="text-center group">
              <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all duration-300">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Spiritual</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Background Decorative Element -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </section>
  </div>
</template>

<script setup>
const handleApplyNow = () => {
  // TODO: Implement application process
  console.log('Apply Now clicked')
}

const handleImageError = (event) => {
  // Fallback image if the placeholder service fails
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzExMTgyNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzIiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4='
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgb(156 163 175 / 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(156 163 175 / 0.1) 1px, transparent 1px);
  background-size: 4rem 4rem;
}
</style> 