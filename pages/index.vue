<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-8 text-black dark:text-white tracking-tight">
          Becoming Man Movement
        </h1>
        <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          A movement centered around returning men to their proper purpose on earth, transforming lives through the attributes of Prophet, Priest, King, and Warrior.
        </p>
        <a 
          href="#about"
          class="inline-block px-10 py-5 text-lg font-semibold rounded-xl bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          More Than A Movement
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-32 bg-white dark:bg-black">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white">About Becoming Man</h2>
            <p class="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              BECOMING MAN is a movement of God, birthed in the heart of Pastor IV Marsh. It is centered around returning men to their proper purpose on the earth; something that is so needed in our culture today. We seek to reverse the current trend in our culture as we take men on a journey of self-discovery and self-mastery.
            </p>
            <NuxtLink 
              to="/about"
              class="group inline-flex items-center text-lg font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
          <div class="order-1 md:order-2">
            <img 
              src="https://placehold.co/600x400" 
              alt="Becoming Man Movement" 
              class="rounded-2xl shadow-2xl w-full border-2 border-black dark:border-white transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Founder & CEO Section -->
    <section class="py-32 bg-white dark:bg-black">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://placehold.co/600x800" 
              alt="Pastor IV Marsh" 
              class="rounded-2xl shadow-2xl w-full border-2 border-black dark:border-white object-cover transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Founder & CEO</h2>
            <h3 class="text-2xl font-semibold mb-6 text-black dark:text-white">Pastor IV Marsh</h3>
            <p class="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              IV Marsh is a pastor, entrepreneur, author, marriage and leadership coach. He leads BCOMING.CHURCH, a mega multi-site church with his wife, Bené. Epic was planted in 2007, now with multiple campuses reaching 5,000 people weekly in the United States and in multiple countries.
            </p>
            <p class="text-lg mb-12 text-gray-700 dark:text-gray-300 leading-relaxed">
              A native of North Alabama, IV served in the United States Air Force with a majority of his career in Panama City, Panama fighting the war on drugs. He became involved in law enforcement before stepping into full-time ministry. IV and Bené have been married since 1994 and have three grown children and two daughters-in-law.
            </p>
            <div class="flex space-x-8">
              <a 
                href="#" 
                class="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                class="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                class="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Manhood Matters Section -->
    <section class="py-32 bg-white dark:bg-black">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Why Manhood Matters</h2>
          <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            The state of manhood in America reveals a critical need for transformation and renewed purpose.
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
            <div class="text-4xl font-bold text-red-600 mb-4">69M</div>
            <h3 class="text-xl font-semibold mb-2 text-black dark:text-white">Disconnected Men</h3>
            <p class="text-gray-700 dark:text-gray-300">American men make no profession of faith in Christ</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
            <div class="text-4xl font-bold text-yellow-600 mb-4">70%</div>
            <h3 class="text-xl font-semibold mb-2 text-black dark:text-white">Youth Exodus</h3>
            <p class="text-gray-700 dark:text-gray-300">Of boys raised in church will abandon it during their teens and twenties</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
            <div class="text-4xl font-bold text-blue-600 mb-4">1:18</div>
            <h3 class="text-xl font-semibold mb-2 text-black dark:text-white">Discipleship Ratio</h3>
            <p class="text-gray-700 dark:text-gray-300">Only one in eighteen men are involved in discipleship</p>
          </div>
        </div>

        <!-- Father Factor Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
            <div class="flex items-center mb-6">
              <svg class="h-8 w-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 class="text-2xl font-bold text-black dark:text-white">The Father Factor</h3>
            </div>
            
            <p class="text-gray-700 dark:text-gray-300 mb-8">
              The spiritual influence of fathers is profound. When a father commits to Christ, it creates a ripple effect that transforms entire families.
            </p>

            <div class="space-y-8">
              <div class="relative">
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">When Child is First</span>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Limited family impact</p>
                  </div>
                  <span class="text-2xl font-bold text-red-600">3.5%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div class="bg-red-600 h-3 rounded-full transition-all duration-1000" style="width: 3.5%"></div>
                </div>
              </div>

              <div class="relative">
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">When Mother is First</span>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Moderate family impact</p>
                  </div>
                  <span class="text-2xl font-bold text-yellow-600">17%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div class="bg-yellow-600 h-3 rounded-full transition-all duration-1000" style="width: 17%"></div>
                </div>
              </div>

              <div class="relative">
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">When Father is First</span>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Transformational family impact</p>
                  </div>
                  <span class="text-2xl font-bold text-green-600">93%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div class="bg-green-600 h-3 rounded-full transition-all duration-1000" style="width: 93%"></div>
                </div>
              </div>
            </div>

            <div class="mt-6 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
              <p class="mb-2">Percentage of families that come to Christ based on who is saved first</p>
              <p class="text-xs">Source: Baptist Press, Focus on the Family</p>
            </div>
          </div>

          <!-- Take Action Card -->
          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
            <div class="flex items-center mb-6">
              <svg class="h-8 w-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 class="text-2xl font-bold text-black dark:text-white">Take Action Today</h3>
            </div>

            <p class="text-gray-700 dark:text-gray-300 mb-8">
              Through our Warrior Evolution program, we're equipping men with the tools and community they need to step into their divine purpose and transform their families and communities.
            </p>

            <div class="space-y-4 mb-8">
              <div class="flex items-center p-3 bg-white dark:bg-black rounded-lg">
                <svg class="h-6 w-6 mr-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">Develop spiritual leadership skills</span>
              </div>
              <div class="flex items-center p-3 bg-white dark:bg-black rounded-lg">
                <svg class="h-6 w-6 mr-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">Join a community of like-minded men</span>
              </div>
              <div class="flex items-center p-3 bg-white dark:bg-black rounded-lg">
                <svg class="h-6 w-6 mr-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">Transform your family's spiritual legacy</span>
              </div>
            </div>

            <div class="text-center">
              <NuxtLink 
                to="/warrior-evolution"
                class="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Join Warrior Evolution
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sources Section -->
    <div class="mb-24 text-center">
      <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">Sources & References</h4>
      <div class="text-xs text-gray-600 dark:text-gray-400 space-y-2">
        <p>Statistics sourced from Baptist Press, Focus on the Family, Barna Research Group</p>
        <p>Additional research data from Promise Keepers and National Center for Fathering</p>
      </div>
    </div>
  </div>
</template>
