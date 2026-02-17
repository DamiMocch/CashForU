<template>
  <section class="desafio-section">
    <div class="container section-content">
      <div class="grid-layout">
        <div class="text-column">
          <h2 class="section-title reveal-item">El desafío de la liquidez en la práctica médica</h2>

          <p class="section-body reveal-item delay-100">
            Como profesional médico, usted conoce el ciclo: atender pacientes con cobertura de
            seguro, facturar correctamente, y esperar entre 15 y 90 días para recibir el pago de las
            aseguradoras.
            <br /><br />
            Este tiempo de espera impacta directamente su flujo de caja, limitando su capacidad de
            reinversión en equipo, insumos o el crecimiento de su práctica.
          </p>

          <div class="highlight-box reveal-item delay-200">
            <p class="highlight-text">
              "El 73% de los médicos en México enfrenta desafíos de flujo de caja por pagos
              retrasados de aseguradoras"
            </p>
          </div>
        </div>
        <div class="image-column reveal-item delay-200">
          <div class="background-overlay"></div>
          <img
            src="@/assets/svg/desafio-factoraje-img.svg"
            alt="Médicos analizando radiografías"
            class="desafio-img"
          />
          <div class="security-badge text-center justify-center">
            Proceso 100% digital, sin costos ocultos, regulado y seguro
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.desafio-section {
  position: relative;
  padding: 3rem 0;
  overflow: hidden;
  background-color: #fff;
}

.background-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180%;
  height: 180%;
  background-image: url('@/assets/svg/desafio-vactor-factoraje.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: -1;
  pointer-events: none;
}

.section-content {
  position: relative;
  z-index: 10;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.image-column {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.desafio-img {
  width: 520px;
  height: 320px;
  flex-shrink: 0;
  aspect-ratio: 13/8;
  object-fit: cover;
  max-width: 100%;
  height: auto;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 50, 100, 0.1);
  transition: transform 0.3s ease;
}

.desafio-img:hover {
  transform: translateY(-5px);
}

.text-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-title {
  letter-spacing: -0.5px;
  align-self: stretch;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Poppins;
  font-size: clamp(2rem, 4vw, 3rem);
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  background: var(
    --Gradient-Blue,
    linear-gradient(
      180deg,
      var(--Colors-Brand-colors-Aqua-aqua-300, #66cbff) 0%,
      var(--Colors-Brand-colors-Aqua-aqua-500, #00a9ff) 50%,
      var(--Colors-Brand-colors-Blue-blue-500, #0277d9) 100%
    )
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-body {
  align-self: stretch;
  color: var(--Colors-Brand-colors-Blue-blue-900, #00182b);
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Poppins;
  font-size: var(--Spacing-Fonts-Desktop-Body-LG, 18px);
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin: 2rem 0;
}

.highlight-box {
  background: transparent;
  border-left: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: center;
}

.highlight-text {
  text-align: center;
  font-family: Poppins;
  font-size: var(--Spacing-Fonts-Desktop-Body, 16px);
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
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

.security-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  margin-left: 9rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  color: var(--Colors-Brand-colors-Blue-blue-900, #00182b);

  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Poppins;
  font-size: var(--Spacing-Fonts-Desktop-Caption, 12px);
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.shield-icon {
  font-size: 1.2rem;
}

.btn-link {
  display: inline-block;
  margin-top: 1.5rem;
  color: var(--primary-blue);
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-link:hover {
  transform: translateX(5px);
}

@media (max-width: 900px) {
  .desafio-section {
    padding: 4rem 0;
  }

  .grid-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .image-column {
    order: initial;
    padding: 0 1rem;
    margin-top: 2rem;
  }

  .text-column {
    text-align: left;
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2.25rem;
  }
  .security-badge {
    margin-left: 2.5rem;
  }
}
</style>
