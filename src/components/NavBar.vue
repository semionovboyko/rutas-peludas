<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18 py-3">

        <!-- Logo -->
        <a href="#inicio" @click.prevent="scrollTo('inicio')" class="flex items-center gap-3 group">
          <img src="/logo.png" alt="Rutas Peludas Logo" class="h-11 w-11 transition-transform duration-300 group-hover:scale-110" />
          <span :class="['font-display font-bold text-xl transition-colors duration-300', scrolled ? 'text-dark' : 'text-white']">
            Rutas Peludas
          </span>
        </a>

        <!-- Desktop Nav -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              @click.prevent="scrollTo(link.id)"
              :class="[
                'text-sm font-medium transition-colors duration-200 hover:text-primary-500',
                scrolled ? 'text-dark' : 'text-white/90'
              ]"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <a
            href="#contacto"
            @click.prevent="scrollTo('contacto')"
            class="btn-primary text-sm"
          >
            Reservar ahora
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileOpen = !mobileOpen"
          :class="['md:hidden p-2 rounded-lg transition-colors', scrolled ? 'text-dark hover:bg-cream-100' : 'text-white hover:bg-white/20']"
          aria-label="Abrir menú"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileOpen" class="md:hidden bg-white rounded-2xl shadow-xl mx-0 mb-4 overflow-hidden">
          <ul class="flex flex-col py-2">
            <li v-for="link in navLinks" :key="link.id">
              <a
                :href="`#${link.id}`"
                @click.prevent="scrollTo(link.id); mobileOpen = false"
                class="block px-6 py-3 text-dark font-medium hover:bg-cream-100 hover:text-primary-600 transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
            <li class="px-4 py-3">
              <a
                href="#contacto"
                @click.prevent="scrollTo('contacto'); mobileOpen = false"
                class="btn-primary w-full text-sm"
              >
                Reservar ahora
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'galeria', label: 'Galería' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'contacto', label: 'Contacto' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 72
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
