<template>
  <div id="app">
    <!-- Navegación -->
    <Navbar />
    <nav>
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">Nosotros</router-link>
    <router-link to="/news" class="nav-link">Noticias</router-link>
    <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
    </nav>
    <router-view />
    <Footer />
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: { Navbar, Footer }
};
</script>


<style lang="scss">
@import "@/assets/scss/main.scss";
/* Estilos del contenedor */
#app {
  text-align: center;
  padding: 1rem;
}
</style>
