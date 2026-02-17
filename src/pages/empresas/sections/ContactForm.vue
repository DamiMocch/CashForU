<script setup>
import { reactive, ref } from 'vue'

defineOptions({
  name: 'ContactForm'
})

const form = reactive({
  nombres: '',
  apellidos: '',
  email: '',
  telefono: '',
  clinica: '',
  tipoFinanciamiento: ''
})

const loading = ref(false)
const success = ref(false)

const handleSubmit = async () => {
  if (!form.nombres || !form.email || !form.telefono || !form.clinica || !form.tipoFinanciamiento) {
    alert("Por favor completa todos los campos requeridos")
    return
  }

  loading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  loading.value = false
  success.value = true

  // Reset form
  Object.keys(form).forEach(key => form[key] = '')

  setTimeout(() => {
    success.value = false
  }, 3000)
}
</script>

<template>
  <section id="contacto" class="formulario-section">
    <div class="container contact-container">
      <div class="contact-header text-center">
        <h2 class="section-title reveal-item">Solicita información para tu institución</h2>
        <p class="section-desc reveal-item delay-100">
          Déjanos tus datos y uno de nuestros especialistas en Enterprise se pondrá en contacto contigo para analizar tu <br> operación y presentarte una propuesta a la medida.
        </p>
        <br>
      </div>

      <div class="form-container">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-grid">
            <div class="form-group reveal-item delay-200">
              <input
                type="text"
                v-model="form.nombres"
                placeholder="Nombre(s)"
                class="form-input"
                required
              />
            </div>
            <div class="form-group reveal-item delay-200">
              <input
                type="text"
                v-model="form.apellidos"
                placeholder="Apellido(s)"
                class="form-input"
              />
            </div>
          </div>

          <div class="form-grid">
            <div class="form-group reveal-item delay-300">
              <input
                type="email"
                v-model="form.email"
                placeholder="Correo electrónico"
                class="form-input"
                required
              />
            </div>
            <div class="form-group reveal-item delay-300">
              <input
                type="tel"
                v-model="form.telefono"
                placeholder="Teléfono"
                class="form-input"
                required
              />
            </div>
          </div>

          <div class="form-grid">
            <div class="form-group reveal-item delay-400">
              <input
                type="text"
                v-model="form.clinica"
                placeholder="Nombre de la clínica u hospital"
                class="form-input"
                required
              />
            </div>
            <div class="form-group reveal-item delay-400">
              <input
                type="text"
                v-model="form.tipoFinanciamiento"
                placeholder="Tipo de financiamiento requerido"
                class="form-input"
                required
              />
            </div>
          </div>

          <div class="form-actions text-center reveal-item delay-500">
            <button type="submit" class="btn btn-primary btn-lg" :disabled="loading">
              <span v-if="loading">Enviando...</span>
              <span v-else>Quiero una solución financiera</span>
            </button>
            <div v-if="success" class="success-alert">
              ¡Gracias! Tu solicitud ha sido enviada. Nos pondremos en contacto pronto.
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.formulario-section {
  padding: 5rem 0;
  background-color: #fff;
}

.form-header {
  max-width: 800px;
  margin: 0 auto 4rem;
}

.section-title {
  color: #4da3ff;
  font-size: 3.5rem;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;
  font-weight: 800;
}

.section-desc {
  color: #3B3B3B;
}

.form-container {
  max-width: 900px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.form-group {
  position: relative;
}

.form-input {
  width: 100%;
  padding: 0.5rem 0;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
  color: #333;
}

.form-input::placeholder {
  color: #999;
}

.form-input:focus {
  border-bottom-color: var(--primary-blue);
}

.btn-lg {
  padding: 1rem 3rem;
  min-width: 250px;
  font-size: 1rem;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-alert {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  font-weight: 500;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
