<template>
  <div class="services-view container">
    <h1>Servicios</h1>

    <!-- Condicional: si NO estamos en carrusel, muestra la grilla -->
    <CardGrid
      v-if="!isCarouselView"
      :services="services"
      @selectService="openCarousel"
    />

    <!-- Si ESTAMOS en carrusel, muestra el componente Carousel -->
    <Carousel
      v-else
      :services="services"
      :selectedIndex="selectedIndex"
      @closeCarousel="closeCarousel"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardGrid from '@/components/CardGrid.vue'
import Carousel from '@/components/Carousel.vue'

// Importamos el JSON (o bien lo fetch-amos, según prefieras).
import servicesData from '@/assets/services.json'

// Estado local
const services = ref([])
const isCarouselView = ref(false)
const selectedIndex = ref(0)

// Cargar datos al montar
onMounted(() => {
  services.value = servicesData // O un fetch si fuera remoto
})

// Evento al seleccionar un servicio en la grilla
function openCarousel(index) {
  selectedIndex.value = index
  isCarouselView.value = true
}

// Evento al cerrar carrusel
function closeCarousel() {
  isCarouselView.value = false
}
</script>

<style scoped>
.services-view {
  /* Estilos que cnecesites */
  color: brown;
}
</style>
