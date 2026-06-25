<template>
  <section class="py-24 bg-cream-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14 observe-fade">
        <span class="section-tag">FAQ</span>
        <h2 class="section-title mb-4">
          Preguntas <em class="text-primary-500 not-italic">frecuentes</em>
        </h2>
        <p class="text-gray-500 leading-relaxed">¿Tienes dudas? Aquí resuelvo las más habituales.</p>
      </div>

      <div class="space-y-3 observe-fade">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="bg-white rounded-2xl border border-cream-200 overflow-hidden"
        >
          <button
            @click="toggle(i)"
            class="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-dark hover:text-primary-600 transition-colors"
            :aria-expanded="open === i"
          >
            <span>{{ faq.q }}</span>
            <svg
              class="w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300"
              :class="open === i ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-if="open === i" class="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-cream-100 pt-4">
              {{ faq.a }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersection } from '../composables/useIntersection'

const { observe } = useIntersection()
onMounted(() => observe())

const open = ref(null)
const toggle = (i) => { open.value = open.value === i ? null : i }

const faqs = [
  {
    q: '¿Cuánto espacio tiene tu casa para los perros?',
    a: 'Mi piso cuenta con zonas diferenciadas para descanso, juego y alimentación. Además, tenemos acceso directo a zonas ajardinadas para que los perros puedan moverse con libertad y seguridad.',
  },
  {
    q: '¿Qué pasa si mi perro se pone enfermo?',
    a: 'Tengo formación en psicología canina y trabajo con una clínica veterinaria de confianza cercana. Te avisaré de inmediato ante cualquier señal de malestar y actuaré según tu autorización.',
  },
  {
    q: '¿Puedes cuidar perros que no han sido vacunados?',
    a: 'Por seguridad de todos los perros bajo mi cuidado, es obligatorio que estén al día con el calendario vacunal y desparasitados. Solicito el carnet sanitario antes de la primera reserva.',
  },
  {
    q: '¿Cuántos perros tienes a la vez en casa?',
    a: 'Para garantizar atención personalizada, acepto un máximo de 2 perros en guardería simultáneamente. En paseos grupales, no supero los 4 perros para mantener el control y la seguridad.',
  },
  {
    q: '¿Cómo son las actualizaciones durante el cuidado?',
    a: 'Envío fotos y/o vídeos varias veces al día por WhatsApp para que siempre sepas cómo está tu perro: qué ha comido, cómo ha dormido, los ratos de juego... Ningún momento especial se pierde.',
  },
  {
    q: '¿Cómo funciona la reserva y el pago?',
    a: 'La reserva se realiza a través del formulario de contacto o por WhatsApp. Hacemos una visita previa gratuita para que tu perro y yo nos conozcamos. El pago se efectúa al finalizar el servicio, en efectivo o por Bizum.',
  },
]
</script>
