<template>
  <section id="servicios" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16 observe-fade">
        <span class="section-tag">Qué ofrezco</span>
        <h2 class="section-title mb-4">
          Servicios pensados<br /><em class="text-primary-500 not-italic">para tu peludo</em>
        </h2>
        <p class="text-gray-500 text-lg leading-relaxed">
          Cada servicio está diseñado con el bienestar de tu mascota como prioridad. Cuido a tu perro como si fuera el mío.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(service, i) in services"
          :key="service.title"
          class="observe-fade group relative bg-cream-50 rounded-3xl p-8 card-hover border border-cream-200"
          :style="`transition-delay: ${i * 0.1}s`"
        >
          <!-- Icon background -->
          <div class="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <span class="text-2xl">{{ service.icon }}</span>
          </div>

          <!-- Badge -->
          <span v-if="service.badge" class="absolute top-6 right-6 text-xs font-semibold bg-cream-300 text-primary-700 px-3 py-1 rounded-full">
            {{ service.badge }}
          </span>

          <h3 class="font-display text-xl font-bold text-dark mb-3">{{ service.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-5">{{ service.description }}</p>

          <!-- Includes list -->
          <ul class="space-y-2 mb-6">
            <li v-for="item in service.includes" :key="item" class="flex items-center gap-2 text-sm text-gray-600">
              <svg class="w-4 h-4 text-primary-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              {{ item }}
            </li>
          </ul>

          <!-- Price: multi-tier -->
          <div v-if="service.prices" class="flex flex-wrap gap-x-5 gap-y-1 mb-5">
            <div v-for="p in service.prices" :key="p.unit" class="flex items-baseline gap-1">
              <span class="text-xl font-bold text-primary-600">{{ p.amount }}</span>
              <span class="text-sm text-gray-400">{{ p.unit }}</span>
            </div>
          </div>
          <!-- Price: single -->
          <div v-else class="flex items-baseline gap-1 mb-5">
            <span class="text-2xl font-bold text-primary-600">{{ service.price }}</span>
            <span class="text-sm text-gray-400">{{ service.unit }}</span>
          </div>

          <a href="#contacto" @click.prevent="scrollTo('contacto')" class="btn-outline text-sm w-full">
            Solicitar este servicio
          </a>
        </article>
      </div>

      <!-- Note -->
      <p class="text-center text-sm text-gray-400 mt-10 observe-fade">
        * Los precios pueden variar según tamaño del perro y necesidades específicas. Consulta sin compromiso.
      </p>
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

const services = [
  {
    icon: '🦮',
    title: 'Paseos individuales',
    description: 'Salidas adaptadas al ritmo y energía de tu perro. Rutas variadas para estimular mente y cuerpo.',
    includes: ['Paseo de 30 min o 1h', 'Ruta personalizada', 'Fotos durante el paseo', 'Informe al finalizar'],
    prices: [
      { amount: 'Desde 8€', unit: '30 min' },
      { amount: 'Desde 10€', unit: '1h' },
    ],
    badge: 'Más popular',
  },
  {
    icon: '🏡',
    title: 'Guardería de día',
    description: 'Tu perro pasa el día en mi casa con todo el amor y atención. Un ambiente familiar y seguro.',
    includes: ['Ambiente familiar', 'Jardín seguro', 'Alimentación incluida', 'Actualizaciones diarias'],
    price: 'Desde 20€',
    unit: '/ día',
  },
  {
    icon: '🌙',
    title: 'Alojamiento nocturno',
    description: 'Para cuando necesitas ausentarte. Tu perro duerme conmigo en casa, sin jaulas y con todo el cariño.',
    includes: ['Cama propia', 'Sin jaulas nunca', 'Atención 24h', 'Check-in flexible'],
    price: 'Desde 20€',
    unit: '/ noche',
  },
  {
    icon: '🏠',
    title: 'Visitas a domicilio',
    description: 'Voy a tu casa a darle de comer, pasear y hacer compañía a tu perro sin que tenga que salir de su entorno.',
    includes: ['En tu casa', 'Hasta 1 hora', 'Alimentación e hidratación', 'Fotos y actualizaciones'],
    price: 'Consultar',
    unit: '· según ubicación',
  },
  {
    icon: '🎓',
    title: 'Socialización y juego',
    description: 'Sesiones en grupo pequeño para que tu perro socialice, aprenda y se divierta con otros peludos.',
    includes: ['Grupos reducidos (máx. 4)', 'Actividades estimulantes', 'Supervisión constante', 'Para todas las edades'],
    price: 'Desde 20€',
    unit: '/ sesión',
  },
]
</script>
