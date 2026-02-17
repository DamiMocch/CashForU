<script setup>
defineOptions({
  name: 'SolucionesSection'
})
</script>

<template>
  <section class="soluciones-section">
    <div class="container">
      <div class="text-center intro-block">
        <h2 class="section-title reveal-item">
          Financiamiento estructurado<br>
          <span class="highlight-text">para instituciones de salud</span>
        </h2>
        <p class="section-desc reveal-item delay-200">
          En <span class="text-bold">Cash For U Enterprise</span> trabajamos directamente con <span class="text-blue">clínicas, hospitales y laboratorios</span> que requieren capital para operar, invertir o crecer. Nuestro equipo diseña soluciones personalizadas, con análisis financiero especializado y acompañamiento estratégico en cada etapa del proceso.
        </p>
        <a href="#contacto" class="btn btn-primary mt-4 reveal-item delay-300">Habla con un asesor</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.soluciones-section {
  padding: 5rem 0;
  background-color: #fff;
}

.intro-block {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  color: #4da3ff;
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 2rem;
  font-weight: 800;
}

.highlight-text {
  color: #0099ff;
}

.section-desc {
  color: #3B3B3B;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.text-bold {
  font-weight: 700;
  color: #e72b2b;
}

.text-blue {
  color: var(--primary-blue);
  font-weight: 600;
}

.mt-4 {
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }
}
</style>
