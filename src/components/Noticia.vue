<template>
  <!-- Contenedor principal con fondo gris -->
  <div class="noticia-container" 
       :class="{'reverse': item.orientation === 'right'}">
    
    <!-- Imagen con esquina específica sin redondear -->
    <div class="noticia-img" 
         :class="{'img-left': item.orientation !== 'right', 'img-right': item.orientation === 'right'}">
      <img :src="item.image" alt="Imagen de la noticia" />
    </div>

    <!-- Contenido -->
    <div class="noticia-content">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>

      <button
        v-if="item.buttonText"
        class="btn btn-primary"
        @click="openModal"
      >
        {{ item.buttonText }}
      </button>
    </div>
  </div>
</template>

  
  <script setup>
  /**
   * En Vue 3.3+, defineProps y defineEmits son macros que NO requieren import.
   */
  const props = defineProps({
    item: {
      type: Object,
      required: true
    }
  })
  
  const emits = defineEmits(["openModal"])
  
  /**
   * Cuando el usuario hace clic en "Ver noticia",
   * emitimos al padre para que abra el modal.
   */
  function openModal() {
    emits("openModal", props.item)
  }
  </script>
  
  <style scoped>
  /* Ejemplo de estilos generales */
  .noticia {
    align-items: center;
  }
  .noticia-img img {
    border-radius: 8px;
  }

  </style>
  