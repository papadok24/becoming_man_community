<template>
  <div class="bg-white dark:bg-black">
    <!-- Subpage Header Section -->
    <section class="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Text Content -->
          <div class="order-2 lg:order-1">
            <h1 class="text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white tracking-tight">
              About BECOMING MAN
            </h1>
            <p class="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              BECOMING MAN is a movement of God, birthed in the heart of Pastor IV Marsh. It is centered around returning men to their proper purpose on the earth; something that is so needed in our culture today.
            </p>
          </div>

          <!-- Image -->
          <div class="order-1 lg:order-2">
            <img 
              src="https://placehold.co/800x600/111827/FFFFFF/png?text=About+Becoming+Man"
              alt="About Becoming Man"
              class="rounded-2xl shadow-2xl w-full transform hover:scale-[1.02] transition-all duration-300"
              @error="handleImageError"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Movement Overview Section -->
    <section class="py-24 bg-white dark:bg-black">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-6 text-black dark:text-white">The Movement</h2>
          <p class="text-xl text-gray-700 dark:text-gray-300 mx-auto">
            Our culture needs honorable men who demonstrate true masculinity in every aspect of their lives.
          </p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Left Column: Image and Quote -->
          <div class="space-y-8">
            <div class="relative">
              <img 
                src="https://placehold.co/800x600/111827/FFFFFF/png?text=True+Masculinity"
                alt="True Masculinity"
                class="rounded-2xl shadow-2xl w-full transform hover:scale-[1.02] transition-all duration-300"
                @error="handleImageError"
              />
              <!-- Decorative Elements -->
              <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-black dark:bg-white rounded-2xl opacity-10 z-0"></div>
              <div class="absolute -top-4 -left-4 w-24 h-24 bg-black dark:bg-white rounded-2xl opacity-10 z-0"></div>
            </div>
            
            <!-- Featured Quote -->
            <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg relative">
              <svg class="absolute top-4 left-4 w-8 h-8 text-gray-300 dark:text-gray-700 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p class="text-lg text-gray-700 dark:text-gray-300 italic pl-12">
                Even in our churches, masculinity is dying. BECOMING MAN seeks to reverse the current trend in our culture as we take men on a journey of self-discovery and self-mastery.
              </p>
            </div>
          </div>

          <!-- Right Column: Qualities Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Quality Cards -->
            <div class="bg-white dark:bg-black p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
              <div class="flex items-center mb-4">
                <svg class="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 class="text-lg font-semibold text-black dark:text-white">Mental Toughness</h3>
              </div>
              <p class="text-gray-700 dark:text-gray-300">
                A man who possesses mental toughness and emotional strength, demonstrating resilience in all circumstances.
              </p>
            </div>

            <div class="bg-white dark:bg-black p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
              <div class="flex items-center mb-4">
                <svg class="w-6 h-6 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 class="text-lg font-semibold text-black dark:text-white">Noble Principles</h3>
              </div>
              <p class="text-gray-700 dark:text-gray-300">
                A man who says what he means and means what he says, recognizing the importance of honesty and integrity.
              </p>
            </div>

            <div class="bg-white dark:bg-black p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
              <div class="flex items-center mb-4">
                <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h3 class="text-lg font-semibold text-black dark:text-white">Family Leadership</h3>
              </div>
              <p class="text-gray-700 dark:text-gray-300">
                A man who is the head of his home, knowing how to control and discipline his children with wisdom and love.
              </p>
            </div>

            <div class="bg-white dark:bg-black p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
              <div class="flex items-center mb-4">
                <svg class="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
                <h3 class="text-lg font-semibold text-black dark:text-white">Sacred Reverence</h3>
              </div>
              <p class="text-gray-700 dark:text-gray-300">
                A man who fears God and shows reverence for that which is sacred, understanding the difference between law and power.
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom Call to Action -->
        <div class="mt-16 text-center">
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 mx-auto">
            On the whole, our society today has little tolerance for such men. BECOMING MAN is committed to reversing this trend through intentional discipleship and brotherhood.
          </p>
          <NuxtLink 
            to="/warrior-evolution"
            class="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Join the Movement
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-6 text-black dark:text-white">Our Purpose</h2>
          <p class="text-xl text-gray-700 dark:text-gray-300 mx-auto">
            We are committed to restoring biblical manhood through intentional discipleship and brotherhood.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <!-- Mission Statement -->
          <div class="bg-white dark:bg-black p-10 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-black dark:text-white">Mission Statement</h3>
              </div>
              
              <div class="pl-12">
                <p class="text-2xl font-semibold text-gray-900 dark:text-gray-100 leading-relaxed tracking-wide">
                  Becoming Man is a movement centered around returning honor to manhood by men learning to be
                </p>
                <div class="mt-6 grid grid-cols-2 gap-4">
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <span class="text-xl font-bold text-gray-700 dark:text-gray-300">PROPHET</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-xl font-bold text-gray-700 dark:text-gray-300">PRIEST</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <span class="text-xl font-bold text-gray-700 dark:text-gray-300">KING</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                    <span class="text-xl font-bold text-gray-700 dark:text-gray-300">WARRIOR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Vision Statement -->
          <div class="bg-white dark:bg-black p-10 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-black dark:text-white">Vision Statement</h3>
              </div>
              
              <div class="pl-12">
                <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Becoming Man is committed to partner with local organizations and churches to change the hearts of men in order to change the world.
                </p>
                <div class="mt-6 space-y-4">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    <p class="text-lg text-gray-700 dark:text-gray-300">If you change a man you change a family.</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    <p class="text-lg text-gray-700 dark:text-gray-300">If you change a family you change a community.</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    <p class="text-lg text-gray-700 dark:text-gray-300">If you change a community you change a state.</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    <p class="text-lg text-gray-700 dark:text-gray-300">If you change a state you change a country.</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    <p class="text-lg text-gray-700 dark:text-gray-300">If you change a country you change the world.</p>
                  </div>
                </div>
                <p class="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100 text-right italic">
                  - one man at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statement of Belief Section -->
    <section class="py-24 bg-white dark:bg-black">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-6 text-black dark:text-white">Statement of Belief</h2>
          <p class="text-xl text-gray-700 dark:text-gray-300 mx-auto">
            Our foundational beliefs are rooted in biblical truth and guide everything we do.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- Left: Image with decorative elements -->
          <div class="relative">
            <div class="aspect-w-4 aspect-h-3">
              <img 
                src="https://placehold.co/800x600/111827/FFFFFF/png?text=Biblical+Foundation"
                alt="Biblical Foundation"
                class="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-all duration-300"
                @error="handleImageError"
              />
            </div>
            <!-- Decorative Elements -->
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-black dark:bg-white rounded-2xl opacity-10 z-0"></div>
            <div class="absolute -top-4 -left-4 w-24 h-24 bg-black dark:bg-white rounded-2xl opacity-10 z-0"></div>
            
            <!-- Quote Overlay -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
              <p class="text-white text-lg italic">
                "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness."
              </p>
              <p class="text-gray-300 mt-2">2 Timothy 3:16</p>
            </div>
          </div>

          <!-- Right: Beliefs List -->
          <div class="space-y-8">
            <div 
              v-for="(belief, index) in beliefs" 
              :key="index"
              class="flex items-start space-x-4 group"
            >
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mt-1 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-300">
                <span class="text-sm font-bold text-gray-700 dark:text-gray-300">{{ index + 1 }}</span>
              </div>
              <div class="flex-1">
                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                  {{ belief }}
                </p>
                <div class="h-px bg-gradient-to-r from-gray-200 dark:from-gray-700 to-transparent mt-6"></div>
              </div>
            </div>

            <!-- Bottom Quote -->
            <div class="mt-12 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
              <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p class="text-lg text-gray-700 dark:text-gray-300 italic">
                Our beliefs shape our values, guide our actions, and define our purpose in restoring biblical manhood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Manhood Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-6 text-black dark:text-white">Our View on Manhood</h2>
          <p class="text-xl text-gray-700 dark:text-gray-300 mx-auto">
            Understanding and embracing God's design for biblical masculinity.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://placehold.co/800x600/111827/FFFFFF/png?text=Biblical+Manhood"
              alt="Biblical Manhood"
              class="rounded-2xl shadow-2xl w-full transform hover:scale-[1.02] transition-all duration-300"
              @error="handleImageError"
            />
          </div>
          <div class="space-y-8">
            <div class="bg-white dark:bg-black p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold mb-4 text-black dark:text-white">Biblical Foundation</h3>
              <p class="text-gray-700 dark:text-gray-300">
                We believe that the Bible teaches that men are foundational. As go the men, so go the marriages, families, churches, communities and the culture.
              </p>
            </div>
            <div class="bg-white dark:bg-black p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold mb-4 text-black dark:text-white">Unique Roles</h3>
              <p class="text-gray-700 dark:text-gray-300">
                God created men and women equal but not the same. He bestowed upon men unique roles of Prophet, Priest, King, and Warrior to teach God's Word to their wives, families, and friends, to serve their families, God's people and church, to provide for their families and churches and to protect their marriages, families and churches.
              </p>
            </div>
            <div class="bg-white dark:bg-black p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold mb-4 text-black dark:text-white">Our Challenge</h3>
              <p class="text-gray-700 dark:text-gray-300">
                Building a tribe of men, calling them out and up to the high, noble masculinity only found in Christ Jesus, and discipling in the gospel are the biggest challenges the church faces today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Commitment Section -->
    <section class="py-24 bg-white dark:bg-black">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-black dark:text-white text-center">Our Commitment</h2>
        
        <!-- Rationale -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold mb-8 text-black dark:text-white">Rationale</h3>
          <div class="space-y-6">
            <div 
              v-for="(point, index) in rationale" 
              :key="index"
              class="flex items-start space-x-4"
            >
              <svg class="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p class="text-gray-700 dark:text-gray-300">{{ point }}</p>
            </div>
          </div>
        </div>

        <!-- Affirmations -->
        <div>
          <h3 class="text-2xl font-bold mb-8 text-black dark:text-white">Affirmations</h3>
          <div class="space-y-6">
            <div 
              v-for="(affirmation, index) in affirmations" 
              :key="index"
              class="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl"
            >
              <div class="flex items-start space-x-4">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-gray-700 dark:text-gray-300">{{ affirmation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const beliefs = [
  'We hold to the basic doctrines of biblical faith.',
  'We believe the Bible to be the inspired, infallible, and authoritative Word of God.',
  'We believe in the deity of Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, and in His personal return in power and glory.',
  'We believe that the salvation of lost and sinful people is accomplished by grace alone through faith in Jesus Christ alone, by the regenerating power of the Holy Spirit.',
  'We believe in the present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a Godly life.',
  'We believe in the resurrection of both the saved and the lost, those who are saved to the resurrection of life and those who are lost to the resurrection of damnation.'
]

const rationale = [
  'The widespread uncertainty and confusion in our culture regarding the complementary differences between masculinity and femininity',
  'The tragic effects of this confusion in unraveling the fabric of marriage woven by God out of the beautiful and diverse strands of manhood and womanhood',
  'The increasing promotion given to feminist egalitarianism with accompanying distortions or neglect of the glad harmony portrayed in Scripture between the loving, humble leadership of redeemed husbands and the intelligent, willing support of that leadership by redeemed wives',
  'The growing claims of legitimacy for sexual relationships which have Biblically and historically been considered illicit or perverse, and the increase in pornographic portrayal of human sexuality',
  'The upsurge of physical and emotional abuse in the family'
]

const affirmations = [
  'Both Adam and Eve were created in God\'s image, equal before God as persons and distinct in their manhood and womanhood - (Gen 1:26-27, 2:18).',
  'Distinctions in masculine and feminine roles are ordained by God as part of the created order, and should find an echo in every human heart - (Gen 2:18, 21-24; 1 Cor 11:7-9; 1 Tim 2:12-14).',
  'Adam\'s headship in marriage was established by God before the Fall, and was not a result of sin - (Gen 2:16-18, 21-24, 3:1-13; 1 Cor 11:7-9).',
  'The Fall introduced distortions into the relationships between men and women - (Gen 3:1-7, 12, 16).',
  'The Old Testament, as well as the New Testament, manifests the equally high value and dignity which God attached to the roles of both men and women (Gen 1:26-27, 2:18; Gal 3:28).',
  'Redemption in Christ aims at removing the distortions introduced by the curse.',
  'In all of life Christ is the supreme authority and guide for men and women.'
]

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
