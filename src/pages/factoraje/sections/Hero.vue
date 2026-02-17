<template>
  <section class="hero-factoraje">
    <div class="hero-content container">
      <h1 class="hero-title reveal-item">
        Convierta sus facturas <br />
        médicas en liquidez <br />
        inmediata
      </h1>
      <p class="hero-subtitle reveal-item delay-100">
        Plataforma de factoraje digital que adelanta el pago de aseguradoras en menos de 24 horas.
        Proceso 100% automatizado, seguro y transparente.
      </p>

      <ul class="benefit-list reveal-item delay-200">
        <li class="benefit-item">
          <span class="check-icon">✓</span>
          Reciba su pago en 2-4 horas, no en 60 días.
        </li>
        <li class="benefit-item">
          <span class="check-icon">✓</span>
          Proceso completamente digital y automatizado.
        </li>
        <li class="benefit-item">
          <span class="check-icon">✓</span>
          Comisión fija del 6%, sin costos ocultos.
        </li>
        <li class="benefit-item">
          <span class="check-icon">✓</span>
          Respaldo legal y cumplimiento regulatorio total.
        </li>
      </ul>

      <div class="cta-group reveal-item delay-300">
        <button class="btn btn-primary">Comenzar Ahora</button>
        <button class="btn btn-secondary">Contáctanos</button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero-factoraje {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/svg/factoraje-hero.svg');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: var(--text-light, #ffffff);
}

.hero-content {
  position: relative;
  z-index: 10;
  margin: 0 auto;
  text-align: center;
  padding-top: 4rem;
}

.hero-title {
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: var(--Colors-Neutral-White-white-50, #fff);
  text-align: center;
  font-feature-settings:
    'liga' off,
    'clig' off;
  text-shadow: 0 4px 8px var(--Colors-Brand-colors-Blue-blue-800, #013057);
  font-family: Poppins;
  font-size: clamp(2.5rem, 5vw + 1rem, 5rem);
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
}

.hero-subtitle {
  color: var(--Colors-Neutral-White-white-50, #fff);
  text-align: center;
  font-feature-settings:
    'liga' off,
    'clig' off;
  text-shadow: 0 0 4px var(--Colors-Brand-colors-Blue-blue-800, #013057);
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: var(--Colors-Brand-colors-Blue-blue-900, #00182b);
  font-family: Poppins;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.benefit-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  text-align: left;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}

.benefit-item {
  display: flex;
  align-items: center;
  color: var(--Colors-Neutral-White-white-50, #fff);
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Poppins;
  font-size: var(--Spacing-Fonts-Desktop-Subtitle, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 32px */
}

.check-icon {
  margin-right: 0.75rem;
  font-weight: bold;
}

.cta-group {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 12px 32px;
}

.btn-secondary {
  border-color: white;
  color: white;
}

.btn-secondary:hover {
  background-color: white;
  color: var(--primary-blue);
}

@media (max-width: 768px) {
  .hero-factoraje {
    min-height: auto;
    padding: 3rem 1rem 2rem 1rem;
    background-position: center;
  }

  .cta-group {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    gap: 1rem;
  }

  .btn {
    width: 100%;
  }

  .benefit-list {
    padding: 0 1rem;
    margin-top: 1rem;
    max-width: 100%;
    width: 100%;
    align-items: center;
  }
  .benefit-item {
    font-size: 1rem;
  }
}
</style>
