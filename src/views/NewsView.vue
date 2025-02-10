<template>
  <div class="container my-5">
    <!-- Sección HERO (primera noticia) -->
    <div v-if="heroNews" class="mb-5">
      <div class="row align-items-center">
        <!-- Texto principal de la hero -->
        <div class="col-md-6 mb-4 mb-md-0">
          <h1 class="display-5 fw-bold">{{ heroNews.title }}</h1>
          <p class="lead text-muted">{{ heroNews.description }}</p>
          <button class="btn btn-primary" @click="showConstructionModal()">
            {{ heroNews.buttonText }}
          </button>
        </div>

        <!-- Imagen de la hero -->
        <div class="col-md-6 text-center">
          <img
            :src="heroNews.image"
            :alt="heroNews.title"
            class="img-fluid rounded shadow"
            style="max-height: 300px; object-fit: cover;"
          />
        </div>
      </div>
    </div>

    <!-- Resto de noticias (formato anterior) -->
    <div
      v-for="(news, index) in otherNews"
      :key="news.id"
      class="row align-items-center mb-5"
      :class="{
        'flex-row-reverse': news.orientation === 'right'
      }"
    >
      <!-- Columna imagen -->
      <div class="col-md-6 text-center mb-3 mb-md-0">
        <img
          :src="news.image"
          :alt="news.title"
          class="img-fluid rounded shadow-sm"
          style="max-height: 250px; object-fit: cover;"
        />
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
    <UnderConstructionModal 
      :show="showModal"
      @close="showModal = false"
    />
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
.flex-row-reverse {
  flex-direction: row-reverse !important;
}
</style>
