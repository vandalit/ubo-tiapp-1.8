<template>
  <div class="carousel-wrapper">
    <div class="carousel-card">
      <!-- Sección imagen a la izquierda -->
      <div class="image-area">
        <img
          :src="currentService.image"
          alt="Imagen del servicio"
          class="service-img"
        />
        <!-- Botón "-" flotante en la esquina -->
        <button class="minus-btn" @click.stop="close">
          <i class="fa fa-minus"></i>
        </button>
      </div>

      <!-- Sección de contenido textual -->
      <div class="content-area">
        <h3 class="title">{{ currentService.name }}</h3>
        <p class="description">
          {{ currentService.description }}
        </p>

        <!-- Flechas para moverse en el carrusel -->
        <div class="carousel-nav">
          <button class="btn-arrow me-2" @click="prevSlide">
            <i class="fa fa-chevron-left"></i>
          </button>
          <button class="btn-arrow" @click="nextSlide">
            <i class="fa fa-chevron-right"></i>
          </button>
        </div>

        <!-- Botón de Login (si button_active == true) -->
        <router-link
          v-if="currentService.button_active"
          :to="currentService.button_route"
          class="btn btn-primary ms-auto"
        >
          {{ currentService.button_text }}
        </router-link>
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

// Índice actual del carrusel
const currentIndex = ref(props.selectedIndex)

// Si cambia `selectedIndex` en el padre, se sincroniza
watch(
  () => props.selectedIndex,
  (newVal) => {
    currentIndex.value = newVal
  }
)

function close() {
  emits('closeCarousel')
}

const currentService = computed(() => {
  return props.services[currentIndex.value]
})

// Navegación “cíclica”
function nextSlide() {
  currentIndex.value =
    (currentIndex.value + 1) % props.services.length
}
function prevSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + props.services.length) % props.services.length
}
</script>

<style scoped>
/* Contenedor general para centrar o ajustar espaciado */
.carousel-wrapper {
  padding: 1rem;
  /* Ajusta si deseas más o menos espacio */
}

/* Tarjeta principal que agrupa imagen y contenido */
.carousel-card {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: relative;
  max-width: 900px;  /* Ajusta según tu diseño */
  margin: 0 auto;    /* Centrar horizontalmente */
}

/* Área de la imagen (aprox 1/3 del ancho) */
.image-area {
  position: relative;
  flex: 0 0 300px; /* Ajustar según diseño (puede ser width fija o % del contenedor) */
  background-color: #f9f9f9;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Botón "-" flotante en la esquina inferior derecha de la imagen */
.minus-btn {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: #fff;
  border: none;
  border-radius: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}
.minus-btn i {
  color: #0d2c5b; /* Ajusta color corporativo */
  font-size: 1.1rem;
}

/* Contenido textual */
.content-area {
  flex: 1 1 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column; /* Para acomodar flechas y botón login abajo */
}

/* Título y descripción */
.title {
  font-size: 1.5rem;
  color: #0d2c5b; /* Ajusta al color corporativo */
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1rem;
  color: #4a4a4a;
  margin-bottom: 1rem;
  /* line-height si quieres más espacio entre líneas */
}

/* Flechas de navegación */
.carousel-nav {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.btn-arrow {
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0d2c5b;
  cursor: pointer;
}

.btn-arrow:hover {
  background: #e6e6e6;
}

/* Botón Login (usa Bootstrap .btn .btn-primary, ajusta si quieres un color distinto) */
</style>
