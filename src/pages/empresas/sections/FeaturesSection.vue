<template>
  <section class="feature-section" id="features">
    <div class="background-container">
      <img src="@/assets/svg/features.svg" alt="Background" class="background-svg" />
    </div>

    <div class="main-container">
      <div class="content-card">
        <div class="card-container-flex">
          <div class="card-header">
            <span class="subtitle reveal-item">Cash For U Enterprise</span>
            <h2 class="title reveal-item delay-100">
              Soluciones a la medida <br class="desktop-break" />
              <span class="highlight">para tu institución</span>
            </h2>
          </div>

          <div class="card-body-grid">
            <div class="text-column">
              <p class="description reveal-item delay-200">
                Entendemos que cada hospital y clínica tiene una estructura financiera distinta. Por
                eso ofrecemos esquemas de crédito y financiamiento diseñados según tu volumen de
                facturación, ciclos de cobro y necesidades de expansión.
              </p>

              <ul class="features-list reveal-item delay-300">
                <li>Capital de trabajo</li>
                <li>Financiamiento para crecimiento y expansión</li>
                <li>Factoraje (revisar copy)</li>
                <li>Reestructura de pasivos</li>
                <li>Soluciones adaptadas a tu flujo operativo</li>
              </ul>
            </div>
            <div class="image-column">
              <div class="image-wrapper reveal-item delay-200">
                <img
                  src="@/assets/svg/image-conten.svg"
                  alt="Médico analizando finanzas"
                  class="feature-image"
                />
              </div>
            </div>
            <div class="cta-container">
              <button class="btn btn-primary reveal-item delay-300">Solicitar una propuesta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.feature-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 8rem 0;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-base, sans-serif);
}

.background-container {
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
  object-position: center;
}

.main-container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}

.content-card {
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(0, 50, 100, 0.15);
  padding: 4rem;
}

.card-container-flex {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.card-header {
  margin-bottom: 2rem;
  width: 100%;
}

.card-body-grid {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  grid-template-areas:
    'text image'
    'cta cta';
  gap: 0 4rem;
  align-items: center;
}

.text-column {
  grid-area: text;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cta-container {
  grid-area: cta;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  width: 100%;
  align-items: center;
}

.subtitle {
  display: block;
  color: #0088ff;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.title {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0;
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

.title .highlight {
  font-weight: 800;
  display: block;
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

.description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 90%;
  color: var(--Colors-Neutral-Grey-grey-500, #3b3b3b);
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;

  font-size: 0.95rem;

  color: var(--Colors-Neutral-Grey-grey-500, #3b3b3b);
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* Reduced from 160% */
}

.features-list li {
  margin-bottom: 0.5rem; /* Reduced from 0.8rem */
  position: relative;
  padding-left: 1.5rem;
}

.features-list li::before {
  content: '•';
  color: var(--Colors-Neutral-Grey-grey-500, #3b3b3b);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.image-column {
  grid-area: image;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 20px;
}

.image-wrapper {
  display: block;
}

@media (max-width: 900px) {
  .content-card {
    padding: 3rem;
  }

  .card-body-grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      'text'
      'image'
      'cta';
    gap: 2rem;
    text-align: center;
  }

  .cta-container {
    justify-content: center;
    padding-top: 0; /* Reset desktop padding */
  }

  .text-column {
    align-items: center;
    width: 100%;
  }

  .card-header {
    text-align: center;
  }

  .desktop-break {
    display: none;
  }

  .title {
    font-size: 2.5rem;
  }

  .description {
    max-width: 100%;
  }

  .features-list {
    text-align: left;
    display: inline-block;
  }

  .image-column {
    margin-bottom: 2rem;
  }
}

@media (max-width: 576px) {
  .feature-section {
    padding: 4rem 0;
  }

  .content-card {
    padding: 2rem;
    border-radius: 20px;
  }

  .title {
    font-size: 2rem;
  }

  .btn {
    width: 100%;
  }
}
</style>
