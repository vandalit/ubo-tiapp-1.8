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

       
        <!-- Parte inferior: flechas + botón en la misma fila -->
        <div class="content-footer">
          <!-- Flechas de navegación -->
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
            class="btn btn-primary ms-3 boton-oculto"
          >
            {{ currentService.button_text }}
          </router-link>
        </div>

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
  overflow: hidden;
  /* box-shadow: 0 2px 8px rgba(0,0,0,0.1); */
  position: relative;
  max-width: 900px;  /* Ajusta según tu diseño */
  margin: 0 auto;    /* Centrar horizontalmente */
  margin-bottom: 100px;
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
  border-radius: 16px;

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
  color: #1ea3e1; /* Ajusta color corporativo */
  font-size: 1.1rem;
}

/* Contenido textual */
.content-area {
  flex: 1 1 auto;
  padding: 2rem 1.5rem 0rem 2rem;
  display: flex;
  flex-direction: column; /* Para acomodar flechas y botón login abajo */
  justify-content: space-between;
  min-height: 300px;

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
  margin-bottom: 0;
  /* line-height si quieres más espacio entre líneas */
  padding-bottom: 1rem;
}

/* Footer con flechas y botón “Login” en la misma fila */
.content-footer {
  display: flex;
  align-items: flex-end; 
  justify-content: space-between; /* O space-between si quieres separarlos */
}



/* Flechas de navegación */
.carousel-nav {
  display: flex;
  align-items: center;
}

.btn-arrow {
  background: #c1c1c1;
  border-radius: 25%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
}

.btn-arrow:hover {
  background: #1ea3e1;
}

/* Botón Login (usa Bootstrap .btn .btn-primary, ajusta si quieres un color distinto) */
.boton-oculto {
  background: #1ea3e1;
  align-self: flex-end;
}

@media (max-width: 768px) {
  /* Contenedor principal: de fila a columna */
  .carousel-card {
    flex-direction: column;   /* Apila la imagen encima del texto */
    max-width: 100%;         /* Ocupa todo el ancho del contenedor */
    margin-bottom: 2rem;     /* Un extra de espacio al final si quieres */
  }

  /* Área de la imagen ahora ocupa 100% de ancho */
  .image-area {
    flex: 0 0 auto; 
    width: 100%;
    margin-bottom: 1rem; /* espaciado entre imagen y texto */
  }

  /* Ajusta el alto de la imagen si lo prefieres */
  .service-img {
    /* En móvil tal vez quieras las esquinas redondeadas solo arriba, etc.
       Puedes mantener el actual border-radius o modificarlo, por ejemplo: */
    border-radius: 16px 16px 0 0;
  }

  /* El área de contenido se posiciona debajo, con menos padding si deseas */
  .content-area {
    padding: 1rem;
    min-height: auto; /* Quita la altura mínima si no la necesitas */
  }

  /* Footer de flechas + botón: puedes alinear en columna si gustas */
  .content-footer {
    flex-direction: column;
    align-items: flex-start;  /* O 'center', según desees */
    gap: 1rem;               /* Separación entre flechas y botón */
  }

  /* Flechas en un contenedor horizontal,
     pero podrías hacerlas verticales si lo prefieres */
  .carousel-nav {
    margin-bottom: 0.5rem;
  }
}

</style>
