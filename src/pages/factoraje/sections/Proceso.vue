<template>
  <section class="proceso-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title gradient-text reveal-item">
          Un proceso diseñado <br />
          para la eficiencia médica
        </h2>
        <p class="section-subtitle reveal-item delay-100">
          De la factura a la liquidez en tan solo 4 simples pasos
        </p>
      </div>

      <div class="steps-grid">
        <article class="step-card reveal-item delay-100">
          <div class="icon-wrapper">
            <img src="@/assets/svg/paso1.svg" alt="Icono Paso 1" class="step-icon" />
          </div>
          <h3 class="step-title">Paso 1: Regístrate</h3>
          <p class="step-desc">
            Complete su perfil profesional y fiscal de forma digital en el sistema con la siguiente
            documentación.
          </p>
          <div class="step-requirements">
            <p class="req-title">Requisitos:</p>
            <ul class="req-list">
              <li>Identificación oficial</li>
              <li>Cédula profesional</li>
              <li>RFC</li>
            </ul>
          </div>
        </article>

        <article class="step-card reveal-item delay-200">
          <div class="icon-wrapper">
            <img src="@/assets/svg/paso2.svg" alt="Icono Paso 2" class="step-icon" />
          </div>
          <h3 class="step-title">Paso 2: Solicita tu adelanto</h3>
          <p class="step-desc">
            Nuestro sistema valida la información cargada para asegurarse que no haya ningún error.
          </p>
          <p class="step-desc">
            Todo el proceso lo podrás gestionar en nuestra plataforma de
            <span class="highlight-brand">U hub</span>.
          </p>
        </article>

        <article class="step-card reveal-item delay-300">
          <div class="icon-wrapper">
            <img src="@/assets/svg/paso3.svg" alt="Icono Paso 3" class="step-icon" />
          </div>
          <h3 class="step-title">Paso 3: Revisión</h3>
          <p class="step-desc">
            Nuestro sistema valida que la información esté completa y en orden para poder programar
            tu dispersión
          </p>
        </article>

        <article class="step-card reveal-item delay-400">
          <div class="icon-wrapper">
            <img src="@/assets/svg/paso4.svg" alt="Icono Paso 4" class="step-icon" />
          </div>
          <h3 class="step-title">Paso 4: Recibe tu dinero</h3>
          <p class="step-desc">
            Depositaremos tu dinero a la cuenta que nos proporciones y días después te haremos
            llegar una factura por el cobro de la comisión.
          </p>
        </article>
      </div>

      <div class="cta-container reveal-item delay-300">
        <button class="btn btn-primary">Comienza tu registro aquí</button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.proceso-section {
  padding: 3rem 0;
  background-color: #fff;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 1rem;
}

.gradient-text {
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
  display: inline-block;
}

.section-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 2rem;
  justify-content: center;
  justify-items: center;
  margin-bottom: 4rem;
}

.cta-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 4rem;
}

.step-card {
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 532px;
  padding: var(--Spacing-Padding-padding-24, 24px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Spacing-Padding-padding-16, 16px);
  border-radius: var(--Spacing-Radius-radius-16, 16px);
  border: 1px solid var(--Gradient-Blue, #66cbff);
  background: var(--Colors-Neutral-White-white-50, #fff);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.step-title {
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: 'Poppins', sans-serif;
  font-size: var(--Spacing-Fonts-Desktop-Title-LG, 32px);
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin: 0;

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

.step-desc {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin: 0;
}

.step-requirements {
  width: 100%;
}

.req-title {
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #444;
}

.req-list {
  list-style-type: disc;
  padding-left: 1.25rem;
  color: #444;
  font-size: 1rem;
}

.step-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.highlight-brand {
  color: #00a9ff;
  font-weight: 700;
}

@media (max-width: 900px) {
  .section-title {
    font-size: 2.5rem;
  }

  .steps-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }

  .step-card {
    max-width: 100%;
    width: 100%;
  }

  .proceso-section {
    padding: 4rem 1rem;
  }
}
</style>
