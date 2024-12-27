<template>
  <section class="py-24 bg-white dark:bg-black relative overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
          Our Coaches
        </h2>
        <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Meet our experienced coaches who will guide you through your transformation journey.
        </p>
      </div>

      <!-- Coaches Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="coach in coaches" :key="coach.profile_id" class="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg">
          <!-- Coach Image -->
          <div class="mb-6 relative aspect-[3/4] overflow-hidden rounded-xl shadow-md">
            <img 
              :src="coach.img || 'https://placehold.co/300x400/111827/FFFFFF/png?text=Coach'"
              :alt="coach.name"
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
          </div>

          <!-- Coach Info -->
          <h3 class="text-2xl font-bold mb-3 text-black dark:text-white">{{ coach.name }}</h3>
          <div class="relative overflow-hidden">
            <p class="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 ease-in-out">
              {{ coach.bio }}
            </p>
          </div>

          <!-- Social Links -->
          <div class="flex space-x-4">
            <a 
              v-if="coach.instagram_url && coach.instagram_url.trim()"
              :href="coach.instagram_url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              v-if="coach.twitter_url && coach.twitter_url.trim()"
              :href="coach.twitter_url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              v-if="coach.youtube_url && coach.youtube_url.trim()"
              :href="coach.youtube_url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Decorative Element -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
  </section>
</template>

<script setup lang="ts">
interface Coach {
  profile_id: number;
  name: string;
  bio: string;
  img?: string;
  instagram_url?: string;
  twitter_url?: string;
  youtube_url?: string;
}

interface CoachesResponse {
  data: Coach[];
  error?: string;
}

const { data: apiResponse } = useAsyncData<CoachesResponse>('coaches', () => 
  $fetch('/api/coaches')
)

const coaches = computed(() => apiResponse.value?.data || [])

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzExMTgyNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzIiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db2FjaCBQaG90bzwvdGV4dD48L3N2Zz4=';
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgb(156 163 175 / 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(156 163 175 / 0.1) 1px, transparent 1px);
  background-size: 4rem 4rem;
}

/* Bio text animation */
.group:hover p {
  transform: translateY(0);
  opacity: 1;
}

p {
  transform: translateY(0);
  opacity: 1;
  will-change: transform, opacity;
}

p.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 