<template>
  <section id="galeria" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center max-w-xl mx-auto mb-14 observe-fade">
        <span class="section-tag">Momentos especiales</span>
        <h2 class="section-title mb-4">
          Nuestra <em class="text-primary-500 not-italic">galería peluda</em>
        </h2>
        <p class="text-gray-500 leading-relaxed">
          Cada foto cuenta una historia de felicidad, juego y amor incondicional.
        </p>
      </div>

      <!-- Masonry-style grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 observe-fade">
        <div
          v-for="(photo, i) in photos"
          :key="i"
          :class="['group relative overflow-hidden rounded-2xl cursor-pointer', photo.tall ? 'row-span-2' : '', photo.wide ? 'col-span-2' : '']"
          @click="openLightbox(i)"
        >
          <img
            :src="photo.url"
            :alt="photo.alt"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            :class="photo.tall ? 'min-h-[400px]' : 'min-h-[180px]'"
          />
          <div class="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Instagram CTA -->
      <div class="text-center mt-12 observe-fade">
        <a
          href="https://instagram.com/rutaspeludas"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Ver más en Instagram
        </a>
      </div>
    </div>

    <!-- Lightbox -->
    <transition name="fade">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-50 bg-dark/90 flex items-center justify-center p-4"
        @click.self="lightboxOpen = false"
      >
        <button
          @click="lightboxOpen = false"
          class="absolute top-4 right-4 text-white hover:text-cream-300 transition-colors"
          aria-label="Cerrar"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <button @click="prev" class="absolute left-4 text-white hover:text-cream-300 transition-colors">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <img :src="photos[lightboxIndex].url" :alt="photos[lightboxIndex].alt" class="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl" />
        <button @click="next" class="absolute right-4 text-white hover:text-cream-300 transition-colors">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersection } from '../composables/useIntersection'

const { observe } = useIntersection()
onMounted(() => observe())

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const openLightbox = (i) => { lightboxIndex.value = i; lightboxOpen.value = true }
const prev = () => { lightboxIndex.value = (lightboxIndex.value - 1 + photos.length) % photos.length }
const next = () => { lightboxIndex.value = (lightboxIndex.value + 1) % photos.length }

const photos = [
  { url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80', alt: 'Perro dorado en el parque', tall: true },
  { url: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80', alt: 'Perro jugando con pelota' },
  { url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80', alt: 'Perros corriendo libres' },
  { url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80', alt: 'Paseo de perros felices', wide: true },
  { url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80', alt: 'Golden retriever adorable', tall: true },
  { url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&q=80', alt: 'Perro en la naturaleza' },
  { url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&q=80', alt: 'Perro sonriendo' },
  { url: 'https://images.unsplash.com/photo-1534361960057-19f4434d1094?w=600&q=80', alt: 'Perro en brazos de su cuidadora' },
]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
