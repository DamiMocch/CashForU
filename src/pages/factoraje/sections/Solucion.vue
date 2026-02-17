<template>
  <section class="solucion-section">
    <div class="container section-content">
      <div class="grid-layout">
        <div class="image-column reveal-item">
          <div class="background-overlay"></div>
          <img
            src="@/assets/svg/solucio-factoraje-img.svg"
            alt="Personal médico utilizando plataforma digital"
            class="solucion-img"
          />
          <div class="caption-text">
            Plataforma segura con cifrado bancario y cumplimiento regulatorio total
          </div>
        </div>
        <div class="text-column">
          <h2 class="section-title gradient-text reveal-item">
            La solución está en el factoraje médico inteligente
          </h2>

          <p class="intro-text reveal-item delay-100">
            <span class="brand-name">Cash For U</span> Transforma el proceso tradicional de cobro.
            Adelantamos el monto de su factura el mismo día, mientras gestionamos automáticamente el
            cobro ante la aseguradora.
          </p>

          <div class="features-list reveal-item delay-200">
            <div class="feature-item">
              <p class="feature-desc">
                <span class="feature-title">Velocidad </span>Liquidez inmediata, no en meses. Reciba
                el pago de su factura mediante transferencia SPEI. Sin esperas ni trámites
                presenciales.
              </p>
            </div>
            <div class="feature-item">
              <p class="feature-desc">
                <span class="feature-title">Automatización </span>Tecnología que trabaja por usted.
                Nuestra plataforma procesa cada solicitud con las aseguradoras, con seguimiento en
                tiempo real hasta el pago final.
              </p>
            </div>
            <div class="feature-item">
              <p class="feature-desc">
                <span class="feature-title">Seguridad </span> Proceso regulado y transparente.
                Tendrás el control y seguimiento de tus procesos en nuestra plataforma U hub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.solucion-section {
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
  width: 160%;
  height: 160%;

  background-image: url('@/assets/svg/solucion-vector-factoraje.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.6;
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
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.solucion-img {
  width: 100%;
  max-width: 520px;
  height: auto;
  aspect-ratio: 13/8;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 50, 100, 0.1);
  position: relative;
  z-index: 2;
}

.caption-text {
  margin-top: 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 0.75rem;
}

.text-column {
  display: flex;
  flex-direction: column;
}

.section-title {
  /*font-size: clamp(2rem, 4vw, 2.75rem);*/
  /*font-weight: 800;*/
  /*line-height: 1.1;*/
  margin-bottom: 2rem;
  letter-spacing: -0.5px;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Poppins;
  font-size: var(--Spacing-Fonts-Desktop-Heading-MD, 48px);
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

.gradient-text {
  background: linear-gradient(90deg, #3facff 0%, #0056b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.intro-text {
  font-size: 1.05rem;
  font-family: Poppins;
  color: var(--text-dark);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.brand-name {
  font-weight: 700;
  font-family: Poppins;
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

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #0056b3;
}

.feature-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: Poppins;
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

.feature-desc {
  font-size: 0.95rem;
  font-family: Poppins;
  color: var(--Colors-Brand-colors-Blue-blue-900, #00182b);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

@media (max-width: 900px) {
  .solucion-section {
    padding: 4rem 0;
  }

  .grid-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .text-column {
    order: 1;
    text-align: left;
    padding: 0 1rem;
  }

  .image-column {
    order: 2;
    padding: 0 1rem;
    margin-top: 2rem;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .solucion-img {
    width: 100%;
    height: auto;
    aspect-ratio: auto;
  }
}
</style>
