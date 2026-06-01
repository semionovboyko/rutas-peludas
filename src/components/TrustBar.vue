<template>
  <div class="bg-primary-600 py-5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        <div
          v-for="item in items"
          :key="item.text"
          class="flex items-center gap-2 text-white/90 text-sm font-medium"
        >
          <span class="text-lg">{{ item.icon }}</span>
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  { icon: '✅', text: 'Seguro de responsabilidad civil' },
  { icon: '🏥', text: 'Primeros auxilios veterinarios' },
  { icon: '📍', text: 'Seguimiento GPS en paseos' },
  { icon: '📸', text: 'Fotos y vídeos diarios' },
  { icon: '🤝', text: 'Primera visita gratuita' },
]
</script>
