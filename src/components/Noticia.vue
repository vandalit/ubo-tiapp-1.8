<template>
  <!-- Contenedor principal con fondo gris -->
  <div class="noticia-container" :class="{ 'reverse': item.orientation === 'right' }">

    <!-- Imagen con esquina específica sin redondear -->
    <div class="noticia-img"
      :class="{ 'img-left': item.orientation !== 'right', 'img-right': item.orientation === 'right' }">
      <img :src="item.image" alt="Imagen de la noticia" />
    </div>

    <!-- Contenido -->
    <div class="noticia-content">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>

      <button v-if="item.buttonText" class="btn btn-primary" @click="emits('openModal', item)">
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
.noticia-container {
  display: flex;
  /* align-items: center; */
  background-color: #f8f8f8;
  /* Fondo gris */
  padding: 10px 10px 10px 0;
  border-radius: 15px;
  /* Bordes redondeados */
  /* overflow: hidden; */
  margin-bottom: 40px;
  /* text-align: right; */
  text-align: left; /*si no iteran*/

}

/* Invertir dirección cuando es 'right' */
.noticia-container.reverse {
  flex-direction: row-reverse;
  padding: 10px 0px 10px 10px;
  /* text-align: left; */
}

/* Imagen */
.noticia-img {
  flex-shrink: 0;
  width: 40%;
  position: relative;
  margin-top: -2%;
  /* Hace el efecto de "sobresalir" del banner */
}

.noticia-img img {
  width: 100%;
  height: 95%;
  object-fit: cover;
  border-radius: 15px;
  /* Esquinas redondeadas por defecto */
}

/* Esquinas personalizadas: eliminamos redondeo en un solo lado */
.img-left img {
  /* border-top-left-radius: 0; */
  border-bottom-left-radius: 0;
}

.img-right img {
  /* border-top-right-radius: 0; */
  border-bottom-right-radius: 0;
}

/* Contenido */
.noticia-content {
  width: 60%;
  padding: 40px;
  margin: auto;
}
</style>