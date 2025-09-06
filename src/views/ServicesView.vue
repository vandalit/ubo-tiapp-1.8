<template>
  <!-- Sección principal / Hero -->
  <div class="section">
    <div class="about-header container">
      <h2>Nuestros Servicios</h2>
      <p>en sistemas TI</p>
    </div>

    <!-- Banner de ancho completo -->
    <div class="banner">
      <img src="../assets/img/img03.webp" alt="Banner" class="img-fluid" />
    </div>

    <!-- Contenido: descripción y texto expandible (comentado según tu código) -->
    <!--
    <div class="content container">
      <h3>Dirección de Tecnologías de la Información</h3>
      <p>
        La Dirección de Tecnologías de la Información de la Universidad Bernardo O’Higgins, se especializa en la
        gestión y supervisión de los recursos tecnológicos, ofreciendo soporte esencial y promoviendo el desarrollo
        de sistemas que sustentan tanto las operaciones académicas como financieras.
      </p>

      <transition name="fade">
        <p v-if="isExpanded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt placeat unde in quod tempora molestiae
          minima numquam, iste explicabo quia saepe. Laboriosam, officiis? Quisquam nulla ipsa soluta. Tempore, quo
          nobis!
        </p>
      </transition>

      <div class="toggle-container">
        <button class="toggle-button" @click="toggleText">
          <i :class="isExpanded ? 'fas fa-minus' : 'fas fa-plus'"></i>
        </button>
        <hr />
      </div>
    </div>
    -->
  </div>

  <br><br><br>

  <div class="services-view container mb-5">
    <!-- Condicional: si NO estamos en carrusel, muestra la grilla -->
    <CardGrid v-if="!isCarouselView" :services="services" @selectService="openCarousel" />

    <!-- Si ESTAMOS en carrusel, muestra el componente Carousel -->
    <Carousel v-else :services="services" :selectedIndex="selectedIndex" @closeCarousel="closeCarousel" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardGrid from '@/components/CardGrid.vue'
import Carousel from '@/components/Carousel.vue'

// Importamos el JSON (o fetch si es remoto)
import servicesData from '@/assets/services.json'


// Control de datos
const services = ref([])
const isCarouselView = ref(false)
const selectedIndex = ref(0)

// Toggle para texto expandible
const isExpanded = ref(false)
function toggleText() {
  isExpanded.value = !isExpanded.value
}

// Cargamos los datos al montar
onMounted(() => {
  services.value = servicesData
})

// Cuando se selecciona un servicio en la grilla, abrimos el carrusel
function openCarousel(index) {
  selectedIndex.value = index
  isCarouselView.value = true
}

// Cuando se cierra el carrusel, volvemos a la grilla
function closeCarousel() {
  isCarouselView.value = false
}


</script>

<style scoped lang="scss">
/* Sección principal */
.section {
  margin: 0;
}

/* Encabezado - usar estilos globales */

/* Banner */
.banner {
  width: 100%;
  height: 448px;
  background-color: #ccc;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Contenido */
.content {
  margin-top: 20px;
  padding: 10px 40px;
  text-align: left;
}

.content h2,
.content h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.content p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

/* Botón de texto plegable */
.toggle-container {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.toggle-button {
  display: inline-flex;
  align-items: center;
  background-color: $secondary-color;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  color: $light-color;
}

hr {
  border: none;
  border-top: 3px solid $secondary-color;
  flex: 1;
  margin-left: 20px;
  margin-right: 42vw;
}

/* Transición de fade para el texto */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .about-header {
    text-align: center;
  }
}
</style>
