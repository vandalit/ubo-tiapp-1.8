<template>
  <div class="news">
    <h1>Bienvenido a News</h1>
    <p>Explora nuestras secciones</p>
  </div>


</template>

<script>
import Carousel from '@/components/Carousel.vue';

export default {
  name: "News",
  components: { Carousel }
};
</script>

<style scoped>
.news {
  text-align: center;
  padding: 2rem;
}
</style>