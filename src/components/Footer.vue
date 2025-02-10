<template>
  <footer class="page-footer bg-light pt-4 pb-3 position-relative">
    <div class="container">
      <div class="row">
        <!-- Columna: Equipo -->
        <div class="col-6 col-md-2 mb-3">
          <h6 class="fw-bold">Equipo</h6>
          <ul class="list-unstyled">
            <li>Jefatura</li>
            <li>Desarrolladores</li>
          </ul>
        </div>
        <!-- Columna: Servicios -->
        <div class="col-6 col-md-2 mb-3">
          <h6 class="fw-bold">Servicios</h6>
          <ul class="list-unstyled">
            <li>Registro</li>
            <li>Consultoria</li>
            <li>Seguridad</li>
          </ul>
        </div>
        <!-- Columna: Proyectos -->
        <div class="col-6 col-md-2 mb-3">
          <h6 class="fw-bold">Proyectos</h6>
          <ul class="list-unstyled">
            <li>01 Proyecto TI</li>
            <li>02 Proyecto Seguridad</li>
            <li>03 Proyecto Laboratorio</li>
            <li>04 Proyecto Auditorio</li>
          </ul>
        </div>
        <!-- Columna: Intranet -->
        <div class="col-6 col-md-2 mb-3">
          <h6 class="fw-bold">Intranet</h6>
          <ul class="list-unstyled">
            <li>Log In</li>
          </ul>
        </div>
        <!-- Columna: Ticket de ayuda -->
        <div class="col-6 col-md-2 mb-3">
          <h6 class="fw-bold">Ticket de ayuda</h6>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center mt-3 small text-secondary">
        © Universidad Bernardo O’Higgins
      </div>
    </div>

    <!-- Botón “scroll to top” en la esquina -->
    <button class="scroll-to-top" @click="scrollToTop">
      <i class="fa fa-arrow-up"></i>
    </button>
  </footer>
</template>

<script>
export default {
  name: 'CustomFooter',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.page-footer {
  /* Color de fondo ligero; ya tenemos “bg-light” de Bootstrap */
  box-shadow: 0 -1px 4px rgba(0,0,0,0.1);
  /* Si quieres una pequeña sombra en el borde superior */
}

/* Botón flotante para subir al inicio */
.scroll-to-top {
  position: absolute;    /* o fixed si quieres que sea completamente flotante en la pantalla */
  right: 1rem;
  bottom: 1rem;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: #2f93f2; /* Ajusta al color que desees */
  color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.scroll-to-top:hover {
  background-color: #217dd0;
}

.scroll-to-top i {
  font-size: 1rem;
}
</style>
