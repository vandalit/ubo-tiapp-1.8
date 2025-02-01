<template>
  <div class="col-12 col-md-4 ">
    <!-- Añadir estas clases para asegurar que cada tarjeta ocupa 4 columnas en pantallas medianas -->
    <div class="card">
      <!-- Contenedor de imagen centrado -->
      <div class="img-container">
        <img :src="user.image" class="card-img-top" alt="Imagen de usuario" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">{{ user.role }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    user: Object
  }
};
</script>

<style scoped>
.card {
  width: 18rem;
  margin: 10px;
}

.img-container {
  display: flex;
  justify-content: center;
  /* Centra horizontalmente */
  align-items: center;
  /* Centra verticalmente */
  height: 200px;
  /* Establece una altura para el contenedor de la imagen */
}

.card-img-top {
  width: 150px;
  /* Ajusta el tamaño según tus necesidades */
  height: 150px;
  /* Asegúrate de que la imagen tenga la misma altura y anchura */
  object-fit: cover;
  /* Para asegurar que la imagen cubra todo el espacio sin distorsionarse */
  border-radius: 50%;
  /* Hace que la imagen sea circular */
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
    margin: 10px auto; /* Centra la tarjeta */
  }
  
}
</style>