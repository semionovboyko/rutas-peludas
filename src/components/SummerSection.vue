<template>
  <section id="verano" class="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="observe-fade flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        <!-- Text content -->
        <div class="flex-1 text-center lg:text-left">
          <span class="section-tag bg-amber-100 text-amber-700 border-amber-200">Temporada alta</span>

          <h2 class="section-title mt-4 mb-4">
            ☀️ Temporada de verano
          </h2>

          <p class="text-2xl font-display font-semibold text-gray-700 mb-6 leading-snug">
            Vacaciones para todos,<br />incluso para tu perrito 🏖️
          </p>

          <p class="text-gray-500 text-lg leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
            A partir del 21 de junio arranca temporada alta. Es la época del año en que más familias confían en Patis para cuidar a su perro mientras se van de vacaciones. Agenda llena, atención completa y tarifas actualizadas.
          </p>

          <p class="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Si tienes fechas en mente, escríbeme cuanto antes. Las plazas de verano siempre se van rápido 🗓️
          </p>

          <!-- Badges -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 text-amber-700 font-semibold text-sm shadow-sm">
              🏖️ Del 21 jun al 21 sep
            </span>
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 text-amber-700 font-semibold text-sm shadow-sm">
              📅 Plazas limitadas
            </span>
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 text-amber-700 font-semibold text-sm shadow-sm">
              💬 Consulta tu fecha
            </span>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <a
              href="#contacto"
              @click.prevent="scrollTo('contacto')"
              class="btn-primary bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white px-8 py-3 text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Reserva tu plaza de verano
            </a>
            <p class="text-sm text-gray-400 italic self-center">
              ¿Primera vez? Escríbeme y lo vemos con calma 🐶
            </p>
          </div>
        </div>

        <!-- Decorative card -->
        <div class="flex-shrink-0 observe-fade">
          <div class="relative w-72 h-72 sm:w-80 sm:h-80">
            <!-- Background circle -->
            <div class="absolute inset-0 rounded-full bg-amber-100 opacity-60"></div>
            <!-- Inner circle -->
            <div class="absolute inset-8 rounded-full bg-amber-200 opacity-50"></div>
            <!-- Emoji center -->
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-8xl select-none drop-shadow-lg">🐶</span>
            </div>
            <!-- Floating emojis -->
            <span class="absolute top-4 right-8 text-3xl animate-bounce" style="animation-delay:0s">☀️</span>
            <span class="absolute bottom-8 left-4 text-2xl animate-bounce" style="animation-delay:0.4s">🏖️</span>
            <span class="absolute top-10 left-6 text-2xl animate-bounce" style="animation-delay:0.8s">🗓️</span>
            <span class="absolute bottom-6 right-6 text-2xl animate-bounce" style="animation-delay:1.2s">🐾</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useIntersection } from '../composables/useIntersection'

const { observe } = useIntersection()
onMounted(() => observe())

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }
}
</script>
