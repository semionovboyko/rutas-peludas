<template>
  <section id="inicio" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80"
        alt="Perros felices en la naturaleza"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-dark/75 via-dark/50 to-transparent"></div>
    </div>

    <!-- Floating paws decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <span class="absolute top-1/4 right-1/4 text-white/5 text-9xl select-none">🐾</span>
      <span class="absolute bottom-1/3 right-1/3 text-white/5 text-7xl select-none">🐾</span>
    </div>

    <!-- Content -->
    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="max-w-2xl">
        <div class="flex items-center gap-2 mb-6 animate-fade-in">
          <span class="w-8 h-0.5 bg-cream-300"></span>
          <span class="text-cream-300 text-sm font-semibold tracking-widest uppercase">Cuidado con amor</span>
        </div>

        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
          Tu peludito merece<br />
          <em class="text-cream-300 not-italic">los mejores cuidados</em>
        </h1>

        <p class="text-lg md:text-xl text-white/80 mb-10 leading-relaxed animate-fade-up" style="animation-delay: 0.15s">
          Paseos, guardería y cuidados personalizados para tu perro. Con cariño, profesionalidad y mucha energía.
        </p>

        <div class="flex flex-wrap gap-4 animate-fade-up" style="animation-delay: 0.3s">
          <a href="#contacto" @click.prevent="scrollTo('contacto')" class="btn-primary">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Reservar cita
          </a>
          <a href="#servicios" @click.prevent="scrollTo('servicios')" class="btn-outline border-white text-white hover:bg-white hover:text-dark">
            Ver servicios
          </a>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap gap-8 mt-16 animate-fade-up" style="animation-delay: 0.45s">
          <div v-for="stat in stats" :key="stat.label" class="text-white">
            <div class="font-display text-4xl font-bold text-cream-300">{{ stat.value }}</div>
            <div class="text-sm text-white/70 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
      <div class="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5">
        <div class="w-1 h-2.5 rounded-full bg-white/70"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '200+', label: 'Mascotas cuidadas' },
  { value: '5★', label: 'Valoración media' },
  { value: '3 años', label: 'De experiencia' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 72
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>
