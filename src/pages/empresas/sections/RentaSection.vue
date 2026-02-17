<template>
  <section class="renta-section">
    <div class="renta-background">
      <img src="@/assets/svg/sectionEmpresas.svg" alt="Background" class="background-svg" />
    </div>

    <div class="renta-content reveal-item">
      <h2 class="renta-title">
        Renta el equipo <br class="desktop-break" />
        médico que necesitas
      </h2>

      <p class="renta-description">
        Grupos hospitalarios, clínicas, laboratorios y empresas de <br />salud en todo el país ya
        confían en nuestras soluciones de <br />
        financiamiento.
      </p>

      <button class="btn btn-primary renta-button">Conoce Lease For U</button>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.renta-section {
  margin-top: 5rem;
  position: relative;
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 20px;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

.renta-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.background-svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 75% center; /* Shift slightly left from right edge */
}

.renta-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  padding: 40px;
  /* padding-left: 0; */
  border-radius: 50px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%; /* Ensure full width availability */
}

.renta-title {
  font-family: 'Poppins', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  text-align: left;
  line-height: 1.1;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px; /* Limit line length for readability */
}

.renta-description {
  color: var(--Colors-Neutral-White-white-50, #fff);
  font-feature-settings:
    'liga' off,
    'clig' off;
  text-shadow: 0 0 4px var(--Colors-Brand-colors-Blue-blue-800, #013057);
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: var(--Colors-Brand-colors-Blue-blue-900, #00182b);
  font-family: Poppins;
  font-size: var(--Spacing-Fonts-Desktop-Title-SM, 24px);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  text-align: left;
  max-width: 800px;
}

.renta-button {
  width: fit-content; /* Prevent deformation */
  padding: 12px 32px; /* Add padding for better shape */
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  background-color: #ffffff !important;
  color: #0088ff !important;
  border: none;
  border-radius: 50px;
}

@media (max-width: 768px) {
  .renta-title {
    font-size: 2.5rem;
  }
}
</style>
