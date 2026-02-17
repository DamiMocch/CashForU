<template>
  <div class="factoraje-page">
    <Hero />
    <Desafio />
    <Solucion />
    <Proceso />
    <Elegirnos />
    <Optimizar />
  </div>
</template>

<script setup>
import Hero from './sections/Hero.vue'
import Desafio from './sections/Desafio.vue'
import Solucion from './sections/Solucion.vue'
import Proceso from './sections/Proceso.vue'
import Elegirnos from './sections/Elegirnos.vue'
import Optimizar from './sections/Optimizar.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal('.reveal-item')
</script>

<style scoped>
.factoraje-page {
  width: 100%;
  overflow-x: hidden;
}
</style>
