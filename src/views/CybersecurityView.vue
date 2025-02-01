<template>

  <div class="services container">
    <h2>Cyberseguridad</h2>
    <p> xxxxxxxx</p>
    <!-- Banner de ancho completo -->
    <div class="banner">
      <img src="https://placehold.co/1500x500" alt="Banner" class="img-fluid" />
    </div>

    <!-- Título y descripción -->
    <div class="content">


      <h3>Dirección de Tecnologías de la Información</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem cum saepe quasi error animi
        cupiditate, ab rerum magnam, rem, exercitationem eveniet ipsum laudantium autem fugiat ipsa quas amet quos?
      </p>

      <!-- Descripción expandida -->
      <transition name="fade">
        <p v-if="isExpanded">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quisquam hic, tenetur ullam fugiat a quae nostrum
          quo inventore labore aliquid dolorem eos nihil. Harum, in qui. Quia, enim pariatur?
        </p>
      </transition>

      <!-- Botón para expandir la descripción -->
      <button @click="toggleText" class="btn btn-link">
        <i class="fas fa-plus"></i> Ver más
      </button>

      <br>
      <br>
      <br>
    </div>
  </div>




  <div class="services-view container">
    <h1>Servicios</h1>

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
import cyberData  from '@/assets/cybersecurity.json'

// Control de datos
const services = ref([])
const isCarouselView = ref(false)
const selectedIndex = ref(0)

// Estado adicional para controlar si está expandido
const isExpanded = ref(false)
function toggleText() {
  isExpanded.value = !isExpanded.value
}

// Cargamos los datos al montar
onMounted(() => {
  services.value = cyberData 
})

// Cuando se selecciona un servicio en la grilla, abrimos carrusel
function openCarousel(index) {
  selectedIndex.value = index
  isCarouselView.value = true
}

// Cuando se cierra el carrusel, volvemos a la grilla
function closeCarousel() {
  isCarouselView.value = false
}

</script>

<style scoped>
.services-view {
  /* Estilos que cnecesites */
  color: brown;
}

.section {
  margin: 0px;
}

.banner {
  width: 100%;
  height: 300px;
  /* Ajusta la altura del banner */
  background-color: #ccc;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  margin-top: 20px;
  padding: 40px;
}

.content h2,
.content h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.content p {
  font-size: 1rem;
  line-height: 1.5;
}

.btn-link {
  color: #007bff;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
