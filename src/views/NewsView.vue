<template>


  <div class="about-header container">
    <h2>Noticias</h2>
    <p>en sistemas TI</p>
  </div>

  <!-- "Banner gris" a lo ancho. -->
  <div v-if="heroNews" class="hero-banner mb-5">
    <div class="container">
      <div class="row align-items-center">

        <!-- Columna de texto -->
        <div class="col-md-6 mb-4 mb-md-0">
          <h1 class="hero-title">
            {{ heroNews.title }}
          </h1>
          <p class="hero-subtitle">
            <!-- Ejemplo con <strong> para resaltar palabras -->
            Un equipo de estudiantes de ingeniería informática creó un
            <strong>modelo de IA</strong> capaz de optimizar procesos industriales,
            <strong>reduciendo costos</strong> hasta en un 30%.
          </p>

          <!-- Botón -->
          <button class="btn btn-hero" @click="showConstructionModal()">
            {{ heroNews.buttonText }}
          </button>
        </div>

        <!-- Columna de imagen -->
        <div class="col-md-6 text-center">
          <img :src="heroNews.image" :alt="heroNews.title" class="hero-image" />
        </div>

      </div>
    </div>
  </div>





  <!-- Resto de noticias (formato anterior) -->

  <div class="container my-5 ">
    <div v-for="(news, index) in otherNews" :key="news.id" class="row align-items-center mb-5" :class="{
      'flex-row-reverse': news.orientation === 'right'
    }">
      <!-- Columna imagen -->
      <div class="col-md-6 text-center mb-3 mb-md-0">
        <img :src="news.image" :alt="news.title" class="img-fluid rounded shadow-sm"
          style="max-height: 250px; object-fit: cover;" />
      </div>

      <!-- Columna texto -->
      <div class="col-md-6">
        <h2 class="h4 fw-bold mb-2">{{ news.title }}</h2>
        <p class="mb-3">
          {{ news.description }}
        </p>
        <button class="btn btn-primary" @click="showConstructionModal()">
          {{ news.buttonText }}
        </button>
      </div>
    </div>

    <!-- Modal de En Construcción -->
    <UnderConstructionModal :show="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import newsData from '@/assets/noticias.json'
import UnderConstructionModal from '@/components/UnderConstructionModal.vue'

export default {
  name: 'NewsView',
  components: {
    UnderConstructionModal
  },
  data() {
    return {
      newsItems: newsData,
      showModal: false // Controla la visibilidad del modal
    }
  },
  computed: {
    // Toma el primer elemento como hero
    heroNews() {
      return this.newsItems.length > 0 ? this.newsItems[0] : null
    },
    // Las demás noticias
    otherNews() {
      return this.newsItems.slice(1)
    }
  },
  methods: {
    showConstructionModal() {
      this.showModal = true
    }
  }
}
</script>

<style scoped>
/* Encabezado */
.about-header {
  text-align: left;
  padding: 10px 0;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.hero-banner {
  width: 100%;
  background-color: #f8f8f8; /* Gris claro del banner */
  padding: 60px 0;           /* Espaciado vertical */
}

/* Título principal */
.hero-title {
  font-size: 2rem;       /* Ajusta según tu mockup */
  font-weight: 700;
  color: #2e3d55;        /* Un tono oscuro para buen contraste */
  margin-bottom: 1rem;
}

/* Subtítulo / descripción */
.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #53607e; 
  margin-bottom: 1.5rem;
}
.hero-subtitle strong {
  font-weight: 700;
}

/* Botón con color y estilo personalizado */
.btn-hero {
  background-color: #3b82f6; 
  border-color: #3b82f6;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.25rem; /* Ajusta para suavizar esquinas */
  cursor: pointer;
}

/* Imagen del hero: borde redondeado y ajuste */
.hero-image {
  max-height: 300px;   /* Ajusta la altura máximo según mockup */
  width: 100%;         /* Que se adapte al ancho de la columna */
  object-fit: cover;
  border-radius: 0.5rem;
}

</style>
