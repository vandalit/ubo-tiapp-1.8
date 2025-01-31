<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Logo UBO</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Servicios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cybersecurity">Ciberseguridad</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/news">Noticias</router-link>
          </li>

        </ul>
      </div>
      <div class="d-flex align-items-center">
        <span class="border-end me-3"></span>
        <a href="#" class="text-dark me-3">
          <i class="bi bi-search"></i>
        </a>
        <a href="#" class="btn btn-primary">Mesa ayuda</a>
      </div>
    </div>
  </nav>
  <hr>
  
  <hr>

</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped></style>