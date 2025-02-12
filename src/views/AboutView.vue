<template>
  <div>
    <!-- Sección principal / Hero -->
    <div class="section">
      <div class="about-header container">
        <h2>Nosotros</h2>
        <p>nuestro equipo TI</p>
      </div>

      <!-- Banner de ancho completo -->
      <div class="banner">
        <img src="https://placehold.co/1500x500" alt="Banner" class="img-fluid" />
      </div>

      <!-- Contenido: descripción y texto expandible -->
      <div class="content container">
        <h3>Dirección de Tecnologías de la Información</h3>
        <p>
          La Dirección de Tecnologías de la Información de la Universidad Bernardo O’Higgins, se especializa en la
          gestión y supervisión de los recursos tecnológicos, ofreciendo soporte esencial y promoviendo el desarrollo
          de sistemas que sustentan tanto las operaciones académicas como financieras.
        </p>

        <!-- Texto adicional con transición -->
        <transition name="fade">
          <p v-if="isExpanded">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt placeat unde in quod tempora molestiae
            minima numquam, iste explicabo quia saepe. Laboriosam, officiis? Quisquam nulla ipsa soluta. Tempore, quo
            nobis!
          </p>
        </transition>

        <!-- Separador + Botón toggle (+/-) -->
        <hr />
        <div class="toggle-container">
          <button class="toggle-button" @click="toggleText">
            <i :class="isExpanded ? 'fas fa-minus' : 'fas fa-plus'"></i>
            {{ isExpanded ? 'Ver menos' : 'Ver más' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Sección equipo -->
    <div class="equipo">
      <h2>Equipo</h2>
      <div class="grillaEquipo">
        <CardTeam
          v-for="user in displayedUsers"
          :key="user.id"
          :user="user"
          @open-modal="openModal"
        />
      </div>
      <button class="btn btn-primary show-more-button" @click="toggleView">
        {{ showAll ? 'Ver menos' : 'Ver equipo' }}
      </button>
    </div>

    <!-- Modal FichaExpandida -->
    <FichaExpandida
      :user="selectedUser"
      :visible="isModalVisible"
      @close="isModalVisible = false"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import CardTeam from '@/components/CardTeam.vue';
import FichaExpandida from '@/components/FichaExpandida.vue';
import teamData from '@/assets/equipo.json';

export default {
  name: 'AboutView',
  components: {
    CardTeam,
    FichaExpandida
  },
  setup() {
    // Texto expandible
    const isExpanded = ref(false);
    const toggleText = () => {
      isExpanded.value = !isExpanded.value;
    };

    // Mostramos 3 usuarios por defecto, luego expandimos
    const showAll = ref(false);
    const displayedUsers = ref(teamData.slice(0, 3));

    const toggleView = () => {
      showAll.value = !showAll.value;
      displayedUsers.value = showAll.value ? teamData : teamData.slice(0, 3);
    };

    // Modal: ficha expandida
    const isModalVisible = ref(false);
    const selectedUser = ref({});

    const openModal = (user) => {
      selectedUser.value = user;
      isModalVisible.value = true;
    };

    return {
      isExpanded,
      toggleText,
      showAll,
      displayedUsers,
      toggleView,
      isModalVisible,
      selectedUser,
      openModal
    };
  }
};
</script>

<style scoped>
/* Sección principal */
.section {
  margin: 0;
}

/* Encabezado */
.about-header {
  text-align: left;
  padding: 0 15px;
}

/* Banner */
.banner {
  width: 100%;
  height: 300px; /* Ajusta la altura del banner */
  background-color: #ccc;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Contenido */
.content {
  margin-top: 20px;
  padding: 10px 40px;
  text-align: left; /* Alineación a la izquierda */
}

.content h2,
.content h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.content p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

/* Botón de texto plegable */
.toggle-container {
  text-align: left; /* Para alinear el botón a la izquierda */
  margin-top: 1rem;
}
.toggle-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 4px;
  color: #333;
}

/* Transición de fade para el texto */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Sección equipo */
.equipo {
  padding: 40px 0;
  text-align: center; /* Centra el encabezado "Equipo" */
}

.card-member {
  margin: 0 auto;
}

/* Grilla de tarjetas */
.grillaEquipo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;           /* Espacio entre tarjetas */
  max-width: 1140px;   /* Ancho máximo del contenedor */
  margin: 0 auto;      /* Centra todo el grid */
  padding: 0 40px;     /* Margen interno a izquierda/derecha para "aire" */
  margin-bottom: 20px; /* Separación con el botón */
}

/* Ajuste a 2 columnas en pantallas medianas */
@media (max-width: 992px) {
  .grillaEquipo {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Una sola columna en pantallas pequeñas */
@media (max-width: 576px) {
  .grillaEquipo {
    grid-template-columns: 1fr;
  }
}

/* Botón para "Ver equipo" / "Ver menos" */
.show-more-button {
  margin-top: 20px;
}
</style>
