<template>
  <section class="optimizar-section">
    <div class="container content-wrapper">
      <h2 class="section-title reveal-item">Comience a optimizar su flujo de caja hoy</h2>

      <p class="section-desc reveal-item delay-100">
        Miles de médicos en México ya confían en Cash For U para gestionar su liquidez profesional.
        El proceso de registro toma menos de una hora y su primera solicitud puede estar aprobada
        inmediatamente.
      </p>

      <button class="cta-button reveal-item delay-200">
        <span class="btn-text">Iniciar Registro Ahora</span>
      </button>

      <p class="security-note reveal-item delay-300">
        "Plataforma segura con cifrado bancario y cumplimiento regulatorio total"
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.optimizar-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--Spacing-Padding-padding-80, 80px) var(--Spacing-Padding-padding-40, 40px);
  background: var(
    --Gradient-Blue,
    linear-gradient(
      180deg,
      var(--Colors-Brand-colors-Aqua-aqua-300, #66cbff) 0%,
      var(--Colors-Brand-colors-Aqua-aqua-500, #00a9ff) 50%,
      var(--Colors-Brand-colors-Blue-blue-500, #0277d9) 100%
    )
  );
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px; /* Constrain width for readability */
}

.section-title {
  color: var(--Colors-Neutral-White-white-50, #fff);
  text-align: center;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Poppins, sans-serif;
  font-size: var(--Spacing-Fonts-Desktop-Title-LG, 32px);
  font-style: normal;
  font-weight: 800;
  line-height: 130%; /* 41.6px */
}

.section-desc {
  color: var(--Colors-Neutral-White-white-50, #fff);
  text-align: center;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Poppins, sans-serif;
  font-size: var(--Spacing-Fonts-Desktop-Body, 16px);
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  max-width: 900px;
}

.cta-button {
  display: inline-flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #fff; /* Use white background to make gradient text visible */
  border: none;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.btn-text {
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: var(--Spacing-Fonts-Desktop-Body, 16px);
  font-style: normal;
  font-weight: 700; /* Increased weight slightly for better visibility against white */
  line-height: 24px; /* 150% */
  background: var(
    --Gradient-Information,
    linear-gradient(
      180deg,
      var(--Colors-States-Information-info-400, #3395ff) 0%,
      var(--Colors-States-Information-info-500, #007aff) 50%,
      var(--Colors-States-Information-info-600, #0062cc) 100%
    )
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.security-note {
  color: var(--Colors-Neutral-White-white-50, #fff);
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.9;
  margin-top: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .optimizar-section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-desc {
    font-size: 1rem;
  }
}
</style>
