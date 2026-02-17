<script setup>
defineOptions({
  name: 'EnterpriseHero',
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="hero-text-block">
        <div class="brand-tag">
          <img
            src="@/assets/svg/logoCasforu-e.svg"
            alt="Cash For U Enterprise"
            class="brand-logo"
          />
        </div>
        <h1 class="hero-title">
          Soluciones de liquidez <br />
          para clínicas, hospitales <br />
          y laboratorios
        </h1>
        <p class="hero-subtitle">
          Impulsa el crecimiento de tu institución con esquemas de financiamiento diseñados a la
          medida. Analizamos tu operación, entendemos tu flujo y estructuramos una solución
          estratégica que fortalece tu liquidez sin frenar tu expansión.
        </p>
        <a href="#contacto" class="btn btn-white">Solicita asesoría Enterprise</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 800px;
  background-image: url('@/assets/svg/section-1.svg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: #fff;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 86, 179, 0.85) 0%,
    rgba(0, 31, 63, 0.6) 100%
  ); /* Blue overlay */
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-text-block {
  max-width: 100%;
}

.brand-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.5px;
}

.brand-logo {
  height: auto;
  max-width: 250px;
}

.hero-title {
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--Colors-Neutral-White-white-50, #fff);
  font-feature-settings:
    'liga' off,
    'clig' off;
  text-shadow: 0 4px 8px var(--Colors-Brand-colors-Blue-blue-800, #013057);
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  line-height: 140%;
}

.hero-subtitle {
  font-size: 2rem;
  margin-bottom: 2.5rem;
  max-width: 100%;
  line-height: 1.6;

  color: var(--Colors-Neutral-White-white-50, #fff);
  font-feature-settings:
    'liga' off,
    'clig' off;
  text-shadow: 0 0 4px var(--Colors-Brand-colors-Blue-blue-800, #013057);
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: var(--Colors-Brand-colors-Blue-blue-900, #00182b);
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

.btn-white {
  background-color: #fff;
  color: var(--primary-blue);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-white:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .hero-section {
    height: auto;
    padding: 6rem 0;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .brand-tag {
    font-size: 1.25rem;
  }
}
</style>
