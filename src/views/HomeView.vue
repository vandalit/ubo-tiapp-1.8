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
        <img src="../assets/img/img01.png" alt="Imagen de proyecto TI" class="img-fluid hero-image" />
        <!-- Botón en la esquina superior derecha -->
        <button class="btn btn-light btn-ver-proyecto">
          VER PROYECTO
        </button>

        <!-- Pestañas en el pie de la imagen -->
        <div class="hero-tabs">
          <!-- Primera pestaña (color primario) -->
          <div class="tab-item tab-item-left">
            SOMOS UBO TI
          </div>

          <!-- Segunda pestaña (color secundario o claro) -->
          <div class="tab-item tab-item-right">
            Direccion De Tecnología De La Información
          </div>
        </div>



      </div>
    </section>
    <!-- ====================== INDICADOR DE GESTIÓN SEMANAL ====================== -->
    <section class="container titulo-gestion-semanal">
      <div class="row mb-3">
        <div class="col">
          <h2 class="section-title">Indicador de gestión semanal</h2>
          <p class="section-subtitle">destacados este semestre</p>
        </div>
      </div>

      <!-- Contenedor de tarjetas -->
      <div class="row justify-content-center tarjetas-indicadores">
        <!-- Tarjeta 1 -->
        <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
          <div class="indicator-card">
            <h3 class="indicator-number">382</h3>
            <p class="indicator-label">TICKET INGRESADOS</p>
          </div>
        </div>
        <!-- Tarjeta 2 -->
        <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
          <div class="indicator-card">
            <h3 class="indicator-number">158</h3>
            <p class="indicator-label">TICKET EN ATENCIÓN</p>
          </div>
        </div>
        <!-- Tarjeta 3 -->
        <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
          <div class="indicator-card">
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

<style scoped lang="scss">
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
  color: #0d2c5b;
  /* Ajusta al color corporativo */
  text-align: left;
}

.hero-subtitle {
  font-size: 1rem;
  color: #737373;
  margin-bottom: 1rem;
  text-align: left;
}

.hero-image-container {
  position: relative;
  /* Mantiene una relación de aspecto 16:9 para la sección hero */
  aspect-ratio: 2.34 / 1;
  border-radius: 12px;
  overflow: hidden;
  /* O un max-width: 100%; si quieres asegurar que no exceda el ancho del contenedor padre */
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* recorta la imagen para llenar el contenedor */
  display: block;
  border-radius: 12px;
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

.hero-section.container {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* 
   ====== PESTAÑAS AL PIE DE LA IMAGEN ====== 
   */

.hero-tabs {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: #f4f4f4;
}

/* Estilo genérico para ambas pestañas */
.tab-item {
  padding: 1.8rem 1rem;
  text-align: center;
  font-family: Roboto;
  font-weight: 400;
  font-size: 32px;
  line-height: 37.5px;
  align-self: flex-end;

  /* 
    Puedes eliminar border-top si no lo deseas,
    y usar outline: none; si quieres un estilo “pill”
  */
}

/* Primera pestaña: color primario (fondo azul, texto blanco, ancho 30%) */
.tab-item-left {
  background-color: #0d2c5b;
  /* Tu color primario */
  color: #fff;
  width: 30%;
  border-top-right-radius: 12px;
}

/* Segunda pestaña: color secundario (fondo claro, texto azul, ancho 70%) */
.tab-item-right {
  background-color: #f4f4f4;
  /* Un gris claro, por ejemplo */
  color: #0d2c5b;
  /* Azul primario para el texto */
  width: 70%;
  /* Ajusta el % según quieras */
}

/* indicadores*/

.titulo-gestion-semanal {
  text-align: left;
}

.tarjetas-indicadores {
  display: flex;
  justify-content: center;
  /* Centra todas las tarjetas */
  align-items: center;
  flex-wrap: nowrap;
  /* Evita que una tarjeta baje de línea en desktop */
  gap: 2rem;
  /* Ajusta el espacio entre las tarjetas */
  max-width: 1000px;
  /* Asegura que las tarjetas se distribuyan correctamente */
  margin: 0 auto;
  /* Centra el contenedor */
  margin-bottom: 100px;
}

/* Ajusta el tamaño y evita que las tarjetas sean demasiado pequeñas */
.indicator-card {
  background-color: $background-color;
  color: $primary-color;
  border-radius: 15px;
  max-width: 320px;
  /* Asegura que sean más grandes */
  width: 100%;
  min-height: 140px;
  text-align: center;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.102);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1.5rem;
}

/* Corrección para pantallas medianas */
@media (max-width: 1024px) {
  .tarjetas-indicadores {
    flex-wrap: wrap;
    /* Permite que las tarjetas se acomoden correctamente */
    justify-content: center;
    align-items: center;
  }
}

/* Responsividad para mobile */
@media (max-width: 768px) {
  .tarjetas-indicadores {
    flex-direction: column;
    align-items: center;
  }
}



.indicator-number {
  font-family: Roboto;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  letter-spacing: 0%;

}

.indicator-label {
  font-family: Roboto;
  font-weight: 400;
  font-size: 24px;
  line-height: 28.13px;
  letter-spacing: 0%;

}

@media (max-width: 768px) {
  .hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-title {
    font-size: 1.5rem;
    text-align: center;
  }

  .hero-subtitle {
    font-size: 0.9rem;
    text-align: center;
  }

  .hero-image-container {
    width: 100%;
    height: 70vh;
    aspect-ratio: unset;
    position: relative;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 🔥 Asegurar que las pestañas estén por encima de la imagen */
  .hero-tabs {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 20; /* Máxima prioridad */
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.9); /* Asegurar contraste */
    padding: 1rem;
    text-align: center;
  }

  .tab-item {
    font-size: 20px;
    padding: 1rem;
  }

  .tab-item-left,
  .tab-item-right {
    width: 100%;
    border-radius: 0;
  }
}

</style>
