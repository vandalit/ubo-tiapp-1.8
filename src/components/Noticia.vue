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

      <router-link v-if="item.buttonText" :to="`/news/${item.id}`" class="btn btn-primary">
        {{ item.buttonText }}
      </router-link>
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

<style scoped lang="scss">
/* Estilos específicos del componente Noticia ahora están en main.scss */
/* Solo mantenemos estilos únicos si los hay */
</style>