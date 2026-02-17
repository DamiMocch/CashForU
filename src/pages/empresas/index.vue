<script setup>
import Hero from './sections/Hero.vue'
import Soluciones from './sections/Soluciones.vue'
import RentaSection from './sections/RentaSection.vue'
import FeaturesSection from './sections/FeaturesSection.vue'
import ContactForm from './sections/ContactForm.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

defineOptions({
  name: 'EmpresasPage',
})

useScrollReveal('.reveal-item')
</script>

<template>
  <div class="page-empresas">
    <Hero />
    <Soluciones />
    <FeaturesSection />
    <RentaSection />
    <ContactForm />
  </div>
</template>
