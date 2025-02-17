<template>


  <div class="about-header container">
    <h2>Noticias</h2>
    <p>en sistemas TI</p>
  </div>

  <!-- "Banner gris" a lo ancho. -->


  <div v-if="heroNews" class="hero ">
    <div class="hero-content ">
      <h1 class="hero-title">{{ heroNews.title }}</h1>
      <p class="hero-description">
        Un equipo de estudiantes de ingeniería informática creó un
        <strong>modelo de IA</strong> capaz de optimizar procesos industriales,
        <strong>reduciendo costos</strong> hasta en un 30%.
      </p>
      <a href="#" class="hero-link" @click.prevent="showConstructionModal">
        {{ heroNews.buttonText }}
      </a>
    </div>
    <img :src="heroNews.image" :alt="heroNews.title" class="hero-image" />
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

/* Contenedor general del Hero */
.hero {
  width: 100%;
  background-color: #f3f3f3;
  position: relative;
  /* para posicionar la imagen */
  padding: 2rem;
  /* espacio alrededor del texto */
  overflow: visible;
  /* para que la imagen pueda "salir" */
  // padding-bottom: 5rem;
  /* ajusta según el alto de la imagen */
}

/* Contenido textual del Hero */
.hero-content {
  max-width: 1200px;
  /* ancho máximo para el texto */
  // margin: 0 auto;           /* centra el bloque textual */
  width: 50%;
  text-align: left;
  padding: 20px 20px 0px 60px;
}

.hero-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  font-family: DM Sans;
  font-weight: 700;
  font-size: 60px;
  line-height: 69px;
  letter-spacing: 0.5px;
  color: $primary-color;

}

.hero-description {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;

  font-family: DM Sans;
  font-weight: 400;
  font-size: 31px;
  line-height: 40px;
  letter-spacing: 0.5px;
  color: $primary-color;

}

.hero-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: $secondary-color;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
}
.hero-link:hover {
  background-color: $primary-color;
}

/* Imagen que “sale” del banner */
.hero-image {
  position: absolute;
  /* permite sacarla del flujo y colocarla arriba/derecha */
  top: -5%;
  /* la “empuja” hacia arriba para sobresalir */
  right: 0;
  /* alinea el borde derecho con el extremo de la página */
  border-radius: 20px 0px 0px 20px;
  /* esquinas redondeadas */
  width: 50%;
  object-fit: cover;
  height: 85%;
}

@media (max-width: 768px) {
  .hero {
    padding: 1rem;
    padding-bottom: 3rem;
  }

  .hero-content {
    text-align: center;
    width: 100%;
  }

  .hero-image {
    position: static;
    /* La imagen vuelve al flujo normal */
    display: block;
    width: 100%;
    max-width: 90%;
    margin: 1rem auto 0;
    border-radius: 20px;
  }
}


.news-container {
  display: flex;
  flex-direction: column;
  gap: 90px;
  /* Espaciado entre noticias */
  padding: 100px 10px;
  /* Espaciado vertical */

}
</style>
