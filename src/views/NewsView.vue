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

  <div class="news-container container">
    <Noticia v-for="news in otherNews" :key="news.id" :item="news" @openModal="showConstructionModal" />
  </div>


  <!-- Modal de En Construcción -->
  <UnderConstructionModal :show="showModal" @close="showModal = false" />
</template>

<script>
import newsData from '@/assets/noticias.json'
import UnderConstructionModal from '@/components/UnderConstructionModal.vue'
import Noticia from '@/components/Noticia.vue'

export default {
  name: 'NewsView',
  components: {
    UnderConstructionModal,
    Noticia,
  },
  data() {
    return {
      newsItems: newsData,
      showModal: false
    }
  },
  computed: {
    heroNews() {
      return this.newsItems.length > 0 ? this.newsItems[0] : null
    },
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

<style scoped lang="scss">
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
  background-color: #f8f8f8;
  /* Gris claro del banner */
  padding: 60px 0;
  /* Espaciado vertical */
}

/* Título principal */
.hero-title {
  font-size: 2rem;
  /* Ajusta según tu mockup */
  font-weight: 700;
  color: #2e3d55;
  /* Un tono oscuro para buen contraste */
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
  border-radius: 0.25rem;
  /* Ajusta para suavizar esquinas */
  cursor: pointer;
}

/* Imagen del hero: borde redondeado y ajuste */
.hero-image {
  max-height: 300px;
  /* Ajusta la altura máximo según mockup */
  width: 100%;
  /* Que se adapte al ancho de la columna */
  object-fit: cover;
  border-radius: 0.5rem;
}

.news-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* Espaciado entre noticias */
  padding: 40px 0;
  /* Espaciado vertical */
}
</style>
