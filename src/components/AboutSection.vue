<template>
  <section id="sobre-mi" class="py-24 bg-cream-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Image column -->
        <div class="relative observe-fade">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1534361960057-19f4434d1094?w=800&q=80"
              alt="Cuidadora de perros profesional"
              class="w-full h-[520px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent"></div>
          </div>

          <!-- Floating card -->
          <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 max-w-[220px]">
            <div class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
              <span class="text-2xl">❤️</span>
            </div>
            <div>
              <div class="font-bold text-dark text-sm">Amor garantizado</div>
              <div class="text-xs text-gray-400 mt-0.5">Cada perro es especial</div>
            </div>
          </div>

          <!-- Certification badge -->
          <div class="absolute -top-5 -left-5 bg-primary-600 text-white rounded-2xl shadow-xl p-4 text-center">
            <div class="font-bold text-2xl leading-none">3+</div>
            <div class="text-xs mt-1 text-primary-200">años de<br/>experiencia</div>
          </div>
        </div>

        <!-- Text column -->
        <div class="observe-fade">
          <span class="section-tag">Sobre mí</span>
          <h2 class="section-title mb-6">
            Hola, soy <em class="text-primary-500 not-italic">Camila Cuervo</em>,<br />
            tu cuidadora de confianza
          </h2>

          <p class="text-gray-600 leading-relaxed mb-5">
            Desde pequeña, los perros han sido mi pasión. Llevo más de 3 años dedicada profesionalmente al cuidado canino, y lo que más me motiva es ver la felicidad de cada peludito bajo mi cuidado.
          </p>
          <p class="text-gray-600 leading-relaxed mb-8">
            Me he formado en primeros auxilios veterinarios, comportamiento canino y técnicas de manejo positivo. Cada perro que cuido recibe atención personalizada, porque entiendo que cada uno es único y especial.
          </p>

          <!-- Values -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div v-for="value in values" :key="value.title" class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                <span class="text-lg">{{ value.icon }}</span>
              </div>
              <div>
                <div class="font-semibold text-dark text-sm">{{ value.title }}</div>
                <div class="text-xs text-gray-400 mt-0.5">{{ value.desc }}</div>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div class="flex flex-wrap gap-3 mb-8">
            <span
              v-for="cert in certifications"
              :key="cert"
              class="text-xs font-medium bg-primary-50 text-primary-700 border border-primary-200 px-3 py-1.5 rounded-full"
            >
              ✓ {{ cert }}
            </span>
          </div>

          <a href="#contacto" @click.prevent="scrollTo('contacto')" class="btn-primary">
            Conocerme mejor
          </a>
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

const values = [
  { icon: '💚', title: 'Trato con amor', desc: 'Como en casa' },
  { icon: '🔒', title: 'Total seguridad', desc: 'Entorno controlado' },
  { icon: '📱', title: 'Comunicación', desc: 'Actualizaciones diarias' },
  { icon: '⏰', title: 'Puntualidad', desc: 'Siempre a tiempo' },
]

const certifications = [
  'Primeros auxilios veterinarios',
  'Comportamiento canino',
  'Manejo en positivo',
  'Seguro de responsabilidad civil',
]
</script>
