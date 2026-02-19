<template>
  <section class="elegirnos-section">
    <div class="container">
      <h2 class="section-title reveal-item">Por qué los médicos eligen Cash For U</h2>

      <div class="features-grid">
        <article class="feature-card reveal-item delay-100">
          <h3 class="card-title">Liquidez Inmediata</h3>
          <p class="card-desc">
            No comprometas el crecimiento de tu práctica esperando pagos. Obtén liquidez inmediata
            de tus facturas y mantén capital de trabajo constante.
          </p>
        </article>

        <article class="feature-card reveal-item delay-200">
          <h3 class="card-title">Cero Trámites Presenciales</h3>
          <p class="card-desc">
            Todo el proceso es digital: desde el registro hasta la dispersión del pago. Compatible
            con su agenda médica ocupada.
          </p>
        </article>

        <article class="feature-card reveal-item delay-300">
          <h3 class="card-title">Gestión Automatizada</h3>
          <p class="card-desc">
            Olvídate del seguimiento con aseguradoras. Nuestra tecnología lo hace por ti con
            actualizaciones en tiempo real.
          </p>
        </article>

        <!-- Card 4 -->
        <article class="feature-card reveal-item delay-400">
          <h3 class="card-title">Transparencia Total</h3>
          <p class="card-desc">
            Ten visibilidad completa del status de cada solicitud y recibe notificaciones en tiempo
            real desde tu plataforma U Hub.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.elegirnos-section {
  padding: 1.5rem 0;
  background-color: #fff;
}

.section-title {
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--primary-blue, #00a9ff);
  margin-bottom: 3rem;
  background: var(--Gradient-Blue, linear-gradient(180deg, #66cbff 0%, #00a9ff 50%, #0277d9 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.feature-card {
  height: 100%;
  display: flex;
  padding: var(--Spacing-Padding-padding-24, 24px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--Spacing-Padding-padding-12, 12px);
  flex: 1 0 0;
  align-self: stretch;
  border-radius: var(--Spacing-Radius-radius-16, 16px);
  background: var(
    --Gradient-Blue,
    linear-gradient(
      180deg,
      var(--Colors-Brand-colors-Aqua-aqua-300, #004999) 0%,
      var(--Colors-Brand-colors-Aqua-aqua-500, #003166) 50%,
      var(--Colors-Brand-colors-Blue-blue-500, #001833) 100%
    )
  );

  color: #fff;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 169, 255, 0.2);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-family: Poppins, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.card-desc {
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 2rem;
  opacity: 0.95;
  color: #fff;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .elegirnos-section {
    padding: 4rem 0;
  }
}
</style>
