<script setup>
defineOptions({
  name: 'AppFooter',
})
</script>

<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-brand">
        <div class="logo">
          <RouterLink to="/">
            <img src="@/assets/svg/cash-for-u.svg" alt="CashForU Logo" class="footer-logo-img" />
          </RouterLink>
        </div>
        <p class="footer-desc">
          Cash For U es una plataforma 100% tecnológica diseñada para médicos que trabajan con
          aseguradoras y quieren cobrar rápido, sin trámites complicados ni dolores de cabeza
          administrativos.
        </p>
      </div>

      <div class="footer-links">
        <div class="footer-col">
          <h3>Sitemap</h3>
          <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/factoraje">Factoraje</router-link></li>
            <li><router-link to="/empresas">Empresas</router-link></li>
            <li><router-link to="/contactanos">Contáctanos</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Soporte</h3>
          <ul>
            <li><a href="#">Intranet</a></li>
            <li><a href="#">U Web</a></li>
            <li><a href="#">U Learn</a></li>
            <li><a href="#">U Central</a></li>
            <li><a href="#">U Hub</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Redes sociales</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <p class="copyright-text">Cash For U ©, 2025. Todos los derechos reservados.</p>
      <div class="legal-links">
        <a href="#">Términos y condiciones</a>
        <span class="separator">|</span>
        <a href="#">Aviso de privacidad</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1e3a8a; /* blue-900 */
  color: #fff;
  padding: 4rem 0 2rem;
}

.footer-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-logo-img {
  height: 40px;
  width: auto;
  display: block; /* Ensure it behaves as a block for alignment */
}

.footer-desc {
  font-size: 0.9rem;
  color: #fff;
  opacity: 1;
  max-width: 300px;
  margin-top: 1rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-col h3 {
  color: var(--primary-blue); /* Light blue for headers */
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.footer-col ul li {
  margin-bottom: 0.75rem;
}

.footer-col a {
  opacity: 0.8;
  font-size: 0.9rem;
}

.footer-col a:hover {
  opacity: 1;
  color: var(--primary-blue);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  flex-wrap: wrap;
}

.copyright-text {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
}

.legal-links {
  display: flex;
  gap: 1rem;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr 1fr; /* 2 columns for mobile */
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .legal-links {
    justify-content: center;
  }
}
</style>
