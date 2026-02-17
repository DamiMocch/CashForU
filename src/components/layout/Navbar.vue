<script setup>
defineOptions({
  name: 'AppNavbar',
})
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <RouterLink to="/" class="logo">
        <img src="@/assets/svg/cash-for-u.svg" alt="CashForU Logo" class="logo-img" />
      </RouterLink>

      <!-- Mobile Toggle Button -->
      <button class="hamburger-btn" @click="toggleMenu" :class="{ 'is-active': isOpen }">
        <img src="@/assets/svg/btn.svg" alt="Menu" class="hamburger-icon" />
      </button>

      <!-- Desktop Menu -->
      <ul class="nav-links desktop-menu">
        <li><RouterLink to="/" class="nav-link">Inicio</RouterLink></li>
        <li><router-link to="/factoraje" class="nav-link">Factoraje</router-link></li>
        <li><RouterLink to="/empresas" class="nav-link">Empresas</RouterLink></li>
        <li><router-link to="/contactanos" class="nav-link">Contáctanos</router-link></li>
      </ul>

      <div class="nav-actions desktop-menu">
        <a href="#" class="btn btn-secondary btn-sm">Acceder a U-Hub</a>
        <a href="#" class="btn btn-primary btn-sm">Regístrate ahora</a>
      </div>

      <!-- Mobile Menu Overlay -->
      <div class="mobile-menu" :class="{ 'is-open': isOpen }">
        <RouterLink to="/" class="mobile-logo-link" @click="isOpen = false">
          <img src="@/assets/svg/cash-for-u.svg" alt="CashForU Logo" class="mobile-logo" />
        </RouterLink>
        <div class="mobile-nav-links">
          <RouterLink to="/" class="mobile-link" @click="isOpen = false">Inicio</RouterLink>
          <router-link to="/factoraje" class="mobile-link" @click="isOpen = false"
            >Factoraje</router-link
          >
          <RouterLink to="/empresas" class="mobile-link" @click="isOpen = false"
            >Empresas</RouterLink
          >
          <router-link to="/contactanos" class="mobile-link" @click="isOpen = false"
            >Contáctanos</router-link
          >

          <div class="mobile-actions">
            <a href="#" class="btn btn-secondary btn-sm full-width">Acceder a U-Hub</a>
            <a href="#" class="btn btn-primary btn-sm full-width">Regístrate ahora</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

.logo-img {
  height: 40px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  color: var(--text-dark);
  position: relative;
  text-decoration: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--primary-blue);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary-blue);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  gap: 1rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* Mobile styling defaults */
.hamburger-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;
}

.hamburger-icon {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
}

.hamburger-btn.is-active .hamburger-icon {
  transform: rotate(90deg);
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 1001;
  padding: 80px 20px 20px;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
}

.mobile-menu.is-open {
  transform: translateX(0);
}

.mobile-logo-link {
  align-self: center;
  margin-bottom: 2rem;
}

.mobile-logo {
  height: 50px;
  width: auto;
  display: block;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.2rem;
  text-align: center;
}

.mobile-link {
  color: var(--text-dark);
  font-weight: 600;
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.full-width {
  width: 100%;
  text-align: center;
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }

  .hamburger-btn {
    display: flex;
  }
}
</style>
