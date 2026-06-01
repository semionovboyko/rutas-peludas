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
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <article
          v-for="(t, i) in testimonials"
          :key="t.name"
          class="observe-fade bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-7 card-hover"
          :style="`transition-delay: ${i * 0.12}s`"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <svg v-for="n in 5" :key="n" class="w-4 h-4 text-cream-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>

          <!-- Quote -->
          <blockquote class="text-white/90 text-sm leading-relaxed mb-6 italic">
            "{{ t.text }}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
              {{ t.name.charAt(0) }}
            </div>
            <div>
              <div class="text-white font-semibold text-sm">{{ t.name }}</div>
              <div class="text-primary-300 text-xs">{{ t.dog }} · {{ t.city }}</div>
            </div>
          </div>
        </article>
      </div>

      <!-- Overall rating bar -->
      <div class="observe-fade bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto text-center">
        <div class="font-display text-6xl font-bold text-white mb-2">4.9</div>
        <div class="flex justify-center gap-1 mb-2">
          <svg v-for="n in 5" :key="n" class="w-5 h-5 text-cream-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </div>
        <p class="text-primary-300 text-sm">Valoración media de <strong class="text-white">+200 reseñas</strong></p>
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
    name: 'Laura García',
    dog: 'Luna (Border Collie)',
    city: 'Madrid',
    text: 'Camila es increíble. Luna siempre llega cansada y feliz de sus paseos. Nos manda fotos constantemente y nunca hemos tenido una sola preocupación. ¡100% recomendable!',
  },
  {
    name: 'Carlos Martínez',
    dog: 'Rocky (Labrador)',
    city: 'Madrid',
    text: 'Dejamos a Rocky en la guardería de Camila durante nuestras vacaciones y volvió aún más sociable. Se nota que lo cuida con una dedicación y amor extraordinarios.',
  },
  {
    name: 'Ana López',
    dog: 'Coco (Caniche)',
    city: 'Alcobendas',
    text: 'Las visitas a domicilio son perfectas para nuestra rutina. Camila conoce a Coco como si fuera su propia perra. Siempre puntuales y con mucho cariño.',
  },
  {
    name: 'Pedro Sánchez',
    dog: 'Max (Pastor Alemán)',
    city: 'Pozuelo',
    text: 'Max es un perro grande y a veces difícil. Camila lo maneja con una seguridad y ternura que nos da total tranquilidad. Lleva con ella más de 2 años.',
  },
  {
    name: 'Sofía Ruiz',
    dog: 'Nala (Golden Retriever)',
    city: 'Las Rozas',
    text: 'El servicio de baño y aseo es simplísimo: Nala sale hecha una reina. Nada de estrés, nada de jaulas. Camila tiene una paciencia infinita y se nota en el resultado.',
  },
  {
    name: 'Diego Fernández',
    dog: 'Toby (Bulldog Francés)',
    city: 'Majadahonda',
    text: 'Toby tiene problemas de socialización y Camila ha trabajado con él con mucha delicadeza. En pocos meses ha mejorado muchísimo. No podríamos estar más agradecidos.',
  },
]
</script>
