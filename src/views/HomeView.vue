<template>
  <div class="home">
    <h1>Bienvenido a Flujo</h1>
    <p>Explora nuestras secciones</p>
  </div>
  <div id="app" class="container mt-5">
    <h1 class="text-center">¡Hola, Vue con Bootstrap!</h1>
    <div class="text-center">
      <button class="btn btn-primary">Haz Clic Aquí</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
</style>