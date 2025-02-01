<template>
  <div class="carousel-container">
    <div class="card d-flex flex-row" style="min-height: 200px;">
      <!-- Imagen ocupando un tercio -->
      <img
        :src="currentService.image"
        alt="Imagen del servicio"
        class="w-25"
      />

      <!-- Contenido textual en los 2/3 restantes -->
      <div class="card-body">
        <h3>{{ currentService.name }}</h3>
        <p>{{ currentService.description }}</p>

        <!-- Si button_active es true, mostramos el botón con su ruta -->
        <router-link
          v-if="currentService.button_active"
          :to="currentService.button_route"
          class="btn btn-success"
        >
          {{ currentService.button_text }}
        </router-link>

        <!-- Flechas para moverse en el carousel -->
        <div class="mt-3">
          <button class="btn btn-outline-primary me-2" @click="prevSlide">
            <i class="fa fa-chevron-left"></i>
          </button>
          <button class="btn btn-outline-primary" @click="nextSlide">
            <i class="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <!-- Botón toggle "-" para regresar a la grilla -->
      <div class="card-footer ms-auto">
        <button class="btn btn-danger" @click="close">
          <i class="fa fa-minus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
  selectedIndex: {
    type: Number,
    required: true,
  },
})

const emits = defineEmits(['closeCarousel'])

// currentIndex es el índice de la tarjeta que se muestra actualmente en el carrusel.
const currentIndex = ref(props.selectedIndex)

// Si cambia selectedIndex desde el padre, también lo sincronizamos:
watch(
  () => props.selectedIndex,
  (newVal) => {
    currentIndex.value = newVal
  }
)

function close() {
  emits('closeCarousel')
}

// Computed para el servicio actual
const currentService = computed(() => {
  return props.services[currentIndex.value]
})

// Funciones de siguiente y anterior (con “ciclado”)
function nextSlide() {
  currentIndex.value =
    (currentIndex.value + 1) % props.services.length
}

function prevSlide() {
  // Si estamos en el primero y vamos para atrás, saltamos al último
  currentIndex.value =
    (currentIndex.value - 1 + props.services.length) %
    props.services.length
}
</script>

<style scoped>
.carousel-container {
  /* Ajusta contenedor; puedes poner tu layout responsivo */
  color: blue;
}
.card-footer {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>
