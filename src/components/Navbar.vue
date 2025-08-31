<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white ">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">
        <img src="../assets/img/Marca-UBO.png" alt="Logo UBO" style="height: 60px;" />
      </router-link>

      <!-- Botón hamburguesa en móvil -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
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
        <div class="d-flex align-items-center extras">
          <!-- Icono lupa que togglea el input -->
          <!--
          <button class="btn btn-link me-2" @click="toggleSearch" title="Buscar">
            <i class="fa fa-search"></i>
          </button>
          -->
          
          <!-- Barra de búsqueda inline (aparece si showSearch es true) -->
          <div class="search-inline d-flex align-items-center" v-if="showSearch">
            <input ref="searchInput" v-model="searchTerm" type="text" class="form-control form-control-sm me-2"
              placeholder="Buscar..." @keyup.enter="doSearch" />
            <!-- <button class="btn btn-sm btn-outline-primary me-3" @click="doSearch">
              Buscar
            </button> -->
          </div>

          <!-- Botón Mesa de Ayuda TI -->
          <button class="btn btn-primary" @click="showModal = true">
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

<style scoped lang="scss">
nav {
  background-color: $secondary-color;
  margin-top: 15px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
}

/* Puedes personalizar la apariencia de la barra de búsqueda inline */
.search-inline {
  max-width: 250px;
  /* Ajusta el ancho si quieres */
  margin-right: 30px;
}

.btn-primary {
  background-color: $primary-color;
  border-radius: 25px;
  padding: 10px 22px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  letter-spacing: 0%;


}

.btn-primary:hover {
  background-color: $secondary-color;
  border-color: $secondary-color;
  transform: none;

}

.navbar-brand {
  margin: -2rem 4rem -2rem 0rem;
}

/* Navegación */
nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.25rem;

  .nav-link {
    text-decoration: none;
    font-family: roboto;
    color: $primary-color;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      color: $secondary-color;
      font-weight: 900;
    }
  }
}

.fa-search {
  color: $primary-color;
}

nav div.container {
  padding: 5px 5px;
}

@media (max-width: 950px) {
  .extras {
    display: flex;
    flex-direction: column;
  }
  .search-inline {
    padding: 5px;
    margin-right: 0px
  }
  .search-inline input {
    padding: 5px;
    margin-bottom: 10px;
    margin-right: 0px
  }
  .navbar-brand {
  margin: 1rem;
  }
  nav div.container {
  padding: 5px 15px;
  }
}


</style>
