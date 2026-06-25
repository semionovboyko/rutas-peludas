<template>
  <section id="testimonios" class="py-24 bg-primary-900 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-800/50"></div>
      <div class="absolute -bottom-16 -left-16 w-96 h-96 rounded-full bg-primary-800/30"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center max-w-xl mx-auto mb-16 observe-fade">
        <span class="inline-block text-sm font-semibold tracking-widest text-primary-300 uppercase mb-3">Lo que dicen</span>
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          Familias que <em class="text-cream-300 not-italic">confían en mí</em>
        </h2>
        <p class="text-primary-300 leading-relaxed">La felicidad de vuestros peludos es mi mayor recompensa.</p>
      </div>

      <!-- Testimonials -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <article
          v-for="(t, i) in testimonials"
          :key="t.name"
          class="observe-fade bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-7 card-hover flex flex-col"
          :style="`transition-delay: ${i * 0.08}s`"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <svg v-for="n in t.stars" :key="'f'+n" class="w-4 h-4 text-cream-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <svg v-for="n in (5 - t.stars)" :key="'e'+n" class="w-4 h-4 text-white/20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>

          <!-- Quote -->
          <blockquote class="text-white/90 text-sm leading-relaxed mb-6 italic flex-1">
            "{{ t.text }}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {{ t.name.charAt(0).toUpperCase() }}
            </div>
            <div class="min-w-0">
              <div class="text-white font-semibold text-sm truncate">{{ t.name }}</div>
              <div class="text-primary-300 text-xs">{{ t.dog ? t.dog + ' · ' : '' }}{{ t.service }} · {{ t.date }}</div>
            </div>
          </div>
        </article>
      </div>

      <!-- Overall rating + Rover link -->
      <div class="observe-fade bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto text-center">
        <div class="font-display text-6xl font-bold text-white mb-2">4.9</div>
        <div class="flex justify-center gap-1 mb-2">
          <svg v-for="n in 5" :key="n" class="w-5 h-5 text-cream-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </div>
        <p class="text-primary-300 text-sm mb-6">
          Valoración media de <strong class="text-white">reseñas verificadas en Rover</strong>
        </p>
        <a
          href="https://www.rover.com/sit/camilc95316"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
          </svg>
          Ver todas las reseñas en Rover
          <svg class="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useIntersection } from '../composables/useIntersection'

const { observe } = useIntersection()
onMounted(() => observe())

const testimonials = [
  {
    name: 'Bàrbara G.',
    dog: 'Sara y Charlie',
    service: 'Alojamiento',
    date: '12 May',
    stars: 5,
    text: 'Camila es una persona amable, atenta y cariñosa. Ha cuidado de nuestra perra Sara y de nuestro gato Charlie de forma excepcional; incluso Sara, que es muy miedosa, conectó con ella desde el primer momento. Tiene un don especial con los animales. Te mantiene informado y te envía fotos y vídeos. Recomendable 100%. ❤️',
  },
  {
    name: 'Alexandra S.',
    dog: 'Mía',
    service: 'Alojamiento',
    date: '27 May',
    stars: 5,
    text: 'Estoy más que contenta y satisfecha con Camila. Mi perrita era su primera vez que no estaba conmigo, hizo que Mía no extrañara y que se sintiera muy contenida y mimada. La recomiendo 100%, muy profesional y con un cariño por las mascotas 🤗',
  },
  {
    name: 'Monica P.',
    dog: 'Paco',
    service: 'Alojamiento',
    date: '23 May',
    stars: 5,
    text: 'Camila ha sido fantástica cuidando a nuestro Paco. Definitivamente la volveremos a contratar! Trato de lujo y cuida muy bien a nuestro peludete.',
  },
  {
    name: 'Mila F.',
    dog: 'Nilo',
    service: 'Alojamiento',
    date: '3 May',
    stars: 5,
    text: 'Nilo estuvo feliz con Camila, le gustó desde el primer momento. Ella fue muy atenta y cariñosa con él y nos mantuvo informados en todo momento. Repetiremos sin duda.',
  },
  {
    name: 'Club Nou Sincro',
    dog: 'Ringo',
    service: 'Alojamiento',
    date: '15 Jun',
    stars: 5,
    text: 'Todo muy bien con Camila. Se ve que Ringo ha estado consentido y atendido. Muchas gracias por todo.',
  },
  {
    name: 'Katarzyna K.',
    dog: 'Wilson',
    service: 'Guardería',
    date: '13 May',
    stars: 5,
    text: 'Estamos muy contentos con Camila. Hemos estado constantemente informados y Wilson se lo ha pasado genial! Repetiremos!',
  },
  {
    name: 'susi c.',
    dog: 'Mi gatita',
    service: 'Alojamiento',
    date: '7 Jun',
    stars: 5,
    text: 'Excelente cuidadora! Mi gatita se sintió súper cómoda los días que estuvo con Camila. Se sintió como en casa, muy consentida. Nos mantuvo al tanto siempre mandándonos fotos. Súper recomendada.',
  },
  {
    name: 'Алена А.',
    dog: '',
    service: 'Alojamiento',
    date: '14 Jun',
    stars: 4,
    text: 'Una chica encantadora, respondió a la solicitud de cuidado de mi perrita súper rápida y con poca antelación. Seguro que volvemos a solicitar los cuidados de Camila.',
  },
]
</script>
