<template>
  <div class="noticias-view container">
    <h1>Noticias en sistemas TI</h1>

    <!-- 1) Noticia Destacada (mockup) -->
    <section class="noticia-destacada d-flex align-items-center mb-5">
      <!-- Texto en la mitad izquierda -->
      <div class="col-12 col-md-6">
        <h2>Innovador sistema de inteligencia artificial</h2>
        <p>
          Un equipo de estudiantes de ingeniería informática creó un
          modelo de IA capaz de optimizar procesos industriales,
          reduciendo costos hasta en un 30%.
        </p>
        <button class="btn btn-info">
          Ver noticia
        </button>
      </div>
      <!-- Imagen en la mitad derecha -->
      <div class="col-12 col-md-6">
        <img
          src="https://placehold.co/500x300?text=IA+Destacada"
          alt="Noticia Destacada"
          class="img-fluid"
        />
      </div>
    </section>
    
    <!-- 2) Listado de otras noticias (desde JSON) -->
    <section>
      <Noticia
        v-for="item in noticias"
        :key="item.id"
        :item="item"
        @openModal="showModal"
      />
    </section>
    
    <!-- 3) Modal para ver "más información" -->
    <div
      v-if="showModalFlag"
      class="modal-backdrop"
      @click.self="closeModal"
    >
      <div class="modal-content p-3">
        <!-- Título -->
        <h3>{{ modalData?.title }}</h3>

        <!-- Imagen -->
        <img
          :src="modalData?.image"
          alt="Imagen de la noticia"
          class="img-fluid mb-3"
        />

        <!-- Contenido extendido -->
        <p>{{ modalData?.extendedDescription }}</p>
        
        <button class="btn btn-secondary" @click="closeModal">
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Noticia from '@/components/Noticia.vue'
import noticiasData from '@/assets/noticias.json'

// Estado local
const noticias = ref([])
const showModalFlag = ref(false)
const modalData = ref(null)

// Cargamos los datos del JSON al montar
onMounted(() => {
  noticias.value = noticiasData
})

// Manejo del modal
function showModal(noticia) {
  modalData.value = noticia
  showModalFlag.value = true
}

function closeModal() {
  showModalFlag.value = false
  modalData.value = null
}
</script>

<style scoped>
.noticias-view {
  /* Estilos globales para la vista */
  color: brown;
}

/* Estilos de la sección destacada */
.noticia-destacada img {
  border-radius: 8px;
  object-fit: cover;
}

/* Ejemplo simple de un backdrop para el modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Asegura que el modal quede arriba */
}

.modal-content {
  background-color: #fff;
  border-radius: 8px;
  max-width: 700px;
  width: 90%;
}
</style>
