<template>
  <div class="home-container">

    <!-- ====================== HERO / PROYECTOS TI ====================== -->
    <section class="hero-section container mb-5">
      <!-- Encabezado -->
      <div class="hero-header">
        <h1 class="hero-title">Nuestros proyectos TI</h1>
        <p class="hero-subtitle">destacados este año 2024</p>
      </div>

      <!-- Imagen principal con botón "Ver proyecto" en la esquina -->
      <div class="hero-image-container position-relative">
        <img
          src="https://placehold.co/1200x500?text=Proyecto+TI"
          alt="Imagen de proyecto TI"
          class="img-fluid hero-image"
        />
        <!-- Botón en la esquina superior derecha -->
        <button class="btn btn-light btn-ver-proyecto">
          VER PROYECTO
        </button>

        <!-- “Pestañas” en el pie de la imagen -->
        <div class="hero-tabs d-flex">
          <div class="tab-item bg-primary text-white">
            SOMOS UBO TI
          </div>
          <div class="tab-item text-primary bg-light">
            Direccion De Tecnología De La Información
          </div>
        </div>
      </div>
    </section>

    <!-- ====================== INDICADOR DE GESTIÓN SEMANAL ====================== -->
    <section class="container">
      <div class="row mb-3">
        <div class="col">
          <h2 class="section-title">Indicador de gestión semanal</h2>
          <p class="section-subtitle">destacados este semestre</p>
        </div>
      </div>

      <!-- Tarjetas de indicadores -->
      <div class="row g-3">
        <!-- Tarjeta 1 -->
        <div class="col-12 col-sm-6 col-md-4">
          <div class="indicator-card shadow-sm p-3 rounded text-center">
            <h3 class="indicator-number">382</h3>
            <p class="indicator-label">TICKET INGRESADOS</p>
          </div>
        </div>
        <!-- Tarjeta 2 -->
        <div class="col-12 col-sm-6 col-md-4">
          <div class="indicator-card shadow-sm p-3 rounded text-center">
            <h3 class="indicator-number">158</h3>
            <p class="indicator-label">TICKET EN ATENCIÓN</p>
          </div>
        </div>
        <!-- Tarjeta 3 -->
        <div class="col-12 col-sm-6 col-md-4">
          <div class="indicator-card shadow-sm p-3 rounded text-center">
            <h3 class="indicator-number">241</h3>
            <p class="indicator-label">TICKET RESUELTOS</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
/* 
   ====== CONTENEDOR GENERAL ====== 
   Ajusta márgenes / fondos globales aquí
*/
.home-container {
  background-color: #fff;
  /* Ajusta tu fondo general si lo necesitas */
}

/* 
   ====== HERO SECTION ====== 
*/
.hero-section {
  padding-top: 1rem;
}

/* Títulos de la sección Hero */
.hero-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #0d2c5b; /* Ajusta al color corporativo */
  text-align: left;
}

.hero-subtitle {
  font-size: 1rem;
  color: #737373;
  margin-bottom: 1rem;
  text-align: left;
}

/* Contenedor de la imagen y elementos superpuestos */
.hero-image-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden; /* Para redondear esquinas de la imagen */
}

/* Imagen de hero con esquinas redondeadas */
.hero-image {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
}

/* Botón "VER PROYECTO" flotando en la esquina superior derecha */
.btn-ver-proyecto {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.9rem;
  border-radius: 8px;
  /* Usa tu color preferido, .btn-light es un ejemplo */
}

/* 
   ====== PESTAÑAS AL PIE DE LA IMAGEN ====== 
   Simulan una barra con 2 “tab items”
*/
.hero-tabs {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

/* Cada “pestaña” */
.tab-item {
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  /* Podrías usar outline: none; y border: none; si quieres un estilo más “pill” */
}

/* 
   El primer tab lo pintamos en azul (bg-primary text-white),
   el segundo tab en un color claro (bg-light text-primary),
   etc. Ajusta según tu diseño.
*/

/*
   ====== SECCIÓN INDICADOR DE GESTIÓN SEMANAL ======
*/
.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0d2c5b;
}

.section-subtitle {
  font-size: 0.9rem;
  color: #737373;
  margin-bottom: 1rem;
}

/* Tarjeta de indicador (Ticket ingresados, etc.) */
.indicator-card {
  background-color: #f8f9fa; /* O #fff con sombra, ajusta a tu gusto */
  border-radius: 12px;
}
.indicator-number {
  font-size: 2rem;
  color: #0d2c5b;
  margin-bottom: 0.3rem;
}
.indicator-label {
  font-size: 0.8rem;
  color: #5a5a5a;
  margin: 0;
}
</style>
