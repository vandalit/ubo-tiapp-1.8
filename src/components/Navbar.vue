<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white ">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">
        <img
          src="../assets/img/Marca-UBO.png"
          alt="Logo UBO"
          style="height: 60px;"
        />
      </router-link>

      <!-- Botón hamburguesa en móvil -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links de navegación -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link">Servicios</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cybersecurity" class="nav-link">Ciberseguridad</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link">Noticias</router-link>
          </li>
        </ul>

        <!-- Sección derecha: lupa, barra de búsqueda inline y botón Mesa de Ayuda -->
        <div class="d-flex align-items-center">
          <!-- Icono lupa que togglea el input -->
          <button
            class="btn btn-link me-2"
            @click="toggleSearch"
            title="Buscar"
          >
            <i class="fa fa-search"></i>
          </button>

          <!-- Barra de búsqueda inline (aparece si showSearch es true) -->
          <div
            class="search-inline d-flex align-items-center"
            v-if="showSearch"
          >
            <input
              ref="searchInput"
              v-model="searchTerm"
              type="text"
              class="form-control form-control-sm me-2"
              placeholder="Buscar..."
              @keyup.enter="doSearch"
            />
            <button class="btn btn-sm btn-outline-primary me-3" @click="doSearch">
              Buscar
            </button>
          </div>

          <!-- Botón Mesa de Ayuda TI -->
          <button class="btn btn-primary" @click="showModal = true ">
            MESA DE AYUDA TI
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import UnderConstructionModal from '@/components/UnderConstructionModal.vue'
import { ref, onUpdated } from 'vue'


export default {
  name: 'Navbar',
  components: {
    UnderConstructionModal
  },
  data() {
    return {
      showSearch: false,
      searchTerm: ''
    }
  },
  setup() {
    const searchInput = ref(null)
    return { searchInput }
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch
    },
    doSearch() {
      console.log('Buscando:', this.searchTerm)
      // Lógica de búsqueda: redirigir a una ruta, filtrar lista, etc.
    },
  },
  onUpdated() {
    // Al actualizar, si showSearch es true, forzamos focus en el input
    if (this.showSearch && this.searchInput) {
      this.searchInput.focus()
    }
  }
}
</script>

<style scoped>

nav {
  background-color: #fff;
  margin-top: 5px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
}
/* Puedes personalizar la apariencia de la barra de búsqueda inline */
.search-inline {
  max-width: 250px; /* Ajusta el ancho si quieres */
}
.btn-primary {
  background-color: rgb(0, 136, 241);
}
.navbar-brand {
  margin: -1rem 3rem -1rem 0rem;
}
</style>
