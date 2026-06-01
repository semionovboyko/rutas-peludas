<template>
  <section id="contacto" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: Info -->
        <div class="observe-fade">
          <span class="section-tag">Contacto</span>
          <h2 class="section-title mb-5">
            ¿Hablamos sobre<br /><em class="text-primary-500 not-italic">tu peludo?</em>
          </h2>
          <p class="text-gray-500 leading-relaxed mb-10">
            Cuéntame sobre tu perro y qué necesitas. Respondo en menos de 24 horas y hacemos una primera visita gratuita para conocernos.
          </p>

          <!-- Contact cards -->
          <div class="space-y-4 mb-10">
            <a
              v-for="info in contactInfo"
              :key="info.label"
              :href="info.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-5 rounded-2xl bg-cream-50 border border-cream-200 card-hover group"
            >
              <div class="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <span class="text-xl">{{ info.icon }}</span>
              </div>
              <div>
                <div class="text-xs text-gray-400 uppercase tracking-wide font-semibold">{{ info.label }}</div>
                <div class="font-semibold text-dark mt-0.5">{{ info.value }}</div>
              </div>
            </a>
          </div>

          <!-- Social -->
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="currentColor" :viewBox="social.viewBox" v-html="social.svg"></svg>
            </a>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="observe-fade">
          <form
            @submit.prevent="submitForm"
            class="bg-cream-50 rounded-3xl p-8 border border-cream-200 space-y-5"
            novalidate
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label for="name" class="block text-sm font-medium text-dark mb-2">Tu nombre *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="María García"
                  class="input-field"
                  :class="{ 'ring-2 ring-red-400': errors.name }"
                  required
                />
                <span v-if="errors.name" class="text-xs text-red-500 mt-1 block">{{ errors.name }}</span>
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-dark mb-2">Teléfono *</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="600 000 000"
                  class="input-field"
                  :class="{ 'ring-2 ring-red-400': errors.phone }"
                  required
                />
                <span v-if="errors.phone" class="text-xs text-red-500 mt-1 block">{{ errors.phone }}</span>
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-dark mb-2">Email *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="tu@email.com"
                class="input-field"
                :class="{ 'ring-2 ring-red-400': errors.email }"
                required
              />
              <span v-if="errors.email" class="text-xs text-red-500 mt-1 block">{{ errors.email }}</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label for="service" class="block text-sm font-medium text-dark mb-2">Servicio de interés *</label>
                <select
                  id="service"
                  v-model="form.service"
                  class="input-field"
                  :class="{ 'ring-2 ring-red-400': errors.service }"
                  required
                >
                  <option value="" disabled>Selecciona...</option>
                  <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
                </select>
                <span v-if="errors.service" class="text-xs text-red-500 mt-1 block">{{ errors.service }}</span>
              </div>
              <div>
                <label for="dogName" class="block text-sm font-medium text-dark mb-2">Nombre de tu perro</label>
                <input
                  id="dogName"
                  v-model="form.dogName"
                  type="text"
                  placeholder="Ej: Luna"
                  class="input-field"
                />
              </div>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-dark mb-2">Cuéntame más</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                placeholder="Raza, edad, horarios, necesidades especiales..."
                class="input-field resize-none"
              ></textarea>
            </div>

            <!-- Privacy -->
            <div class="flex items-start gap-3">
              <input
                id="privacy"
                v-model="form.privacy"
                type="checkbox"
                class="mt-0.5 w-4 h-4 rounded accent-primary-600"
                required
              />
              <label for="privacy" class="text-xs text-gray-500 leading-relaxed">
                Acepto la <a href="#" class="text-primary-600 hover:underline">política de privacidad</a> y el tratamiento de mis datos para gestionar mi solicitud. *
              </label>
            </div>
            <span v-if="errors.privacy" class="text-xs text-red-500 -mt-3 block">{{ errors.privacy }}</span>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="sending"
              class="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <svg v-if="!sending" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
              <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              {{ sending ? 'Enviando...' : 'Enviar mensaje' }}
            </button>

            <!-- Success / Error messages -->
            <transition name="slide-fade">
              <div
                v-if="formStatus"
                :class="[
                  'rounded-xl p-4 text-sm font-medium text-center',
                  formStatus === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                ]"
              >
                <span v-if="formStatus === 'success'">
                  ¡Mensaje enviado! Te contactaré en menos de 24h. 🐾
                </span>
                <span v-else>
                  Ha habido un problema. Por favor, escríbeme directamente por WhatsApp.
                </span>
              </div>
            </transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useIntersection } from '../composables/useIntersection'

const { observe } = useIntersection()
onMounted(() => observe())

const sending = ref(false)
const formStatus = ref(null)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  dogName: '',
  message: '',
  privacy: false,
})

const errors = reactive({})

const serviceOptions = [
  'Paseos individuales',
  'Guardería a domicilio',
  'Alojamiento nocturno',
  'Visitas a domicilio',
  'Baño y aseo',
  'Socialización y juego',
  'Otro',
]

const validate = () => {
  Object.keys(errors).forEach(k => delete errors[k])
  if (!form.name.trim()) errors.name = 'El nombre es obligatorio'
  if (!form.phone.trim()) errors.phone = 'El teléfono es obligatorio'
  if (!form.email.trim()) errors.email = 'El email es obligatorio'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Email no válido'
  if (!form.service) errors.service = 'Selecciona un servicio'
  if (!form.privacy) errors.privacy = 'Debes aceptar la política de privacidad'
  return Object.keys(errors).length === 0
}

const submitForm = async () => {
  if (!validate()) return
  sending.value = true
  formStatus.value = null

  try {
    // EmailJS integration — configure with your own keys at https://emailjs.com
    // import emailjs from '@emailjs/browser'
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { ...form }, 'PUBLIC_KEY')

    // Simulated success for demo (replace with real EmailJS call above)
    await new Promise(resolve => setTimeout(resolve, 1200))
    formStatus.value = 'success'
    Object.assign(form, { name: '', email: '', phone: '', service: '', dogName: '', message: '', privacy: false })
  } catch {
    formStatus.value = 'error'
  } finally {
    sending.value = false
  }
}

const contactInfo = [
  { label: 'WhatsApp', value: '+34 600 000 000', href: 'https://wa.me/34600000000', icon: '📱' },
  { label: 'Email', value: 'hola@rutaspeludas.es', href: 'mailto:hola@rutaspeludas.es', icon: '✉️' },
  { label: 'Zona de trabajo', value: 'Madrid y alrededores', href: '#', icon: '📍' },
]

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/rutaspeludas',
    viewBox: '0 0 24 24',
    svg: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>'
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/rutaspeludas',
    viewBox: '0 0 24 24',
    svg: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>'
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@rutaspeludas',
    viewBox: '0 0 24 24',
    svg: '<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>'
  },
]
</script>

<style scoped>
.slide-fade-enter-active { transition: all 0.3s ease-out; }
.slide-fade-leave-active { transition: all 0.2s ease-in; }
.slide-fade-enter-from, .slide-fade-leave-to { transform: translateY(-8px); opacity: 0; }
</style>
