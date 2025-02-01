<template>

  <div class="section">
    <h2>Nosotros</h2>
    <p> nuestro equipo TI</p>
    <!-- Banner de ancho completo -->
    <div class="banner">
      <img src="https://placehold.co/1500x500" alt="Banner" class="img-fluid" />
    </div>

    <!-- Título y descripción -->
    <div class="content">


      <h3>Dirección de Tecnologías de la Información</h3>
      <p>
        La Dirección de Tecnologías de la Información de la Universidad Bernardo O’Higgins, se especializa en la
        gestión y supervisión de los recursos tecnológicos, ofreciendo soporte esencial y promoviendo el desarrollo de
        sistemas que sustentan tanto las operaciones académicas como financieras.
      </p>

      <!-- Descripción expandida -->
      <transition name="fade">
        <p v-if="isExpanded">
          Este es el texto adicional que se muestra cuando el usuario hace clic en el botón "Ver más".
        </p>
      </transition>

      <!-- Botón para expandir la descripción -->
      <button @click="toggleText" class="btn btn-link">
        <i class="fas fa-plus"></i> Ver más
      </button>

      <br>
      <br>
      <br>
    </div>
  </div>

  <div class="equipo">
    <h2>Equipo</h2>
    <div class="row g-4 grillaEquipo"> <!-- g-4 para el espaciado entre las tarjetas -->
      <!-- Mostrar las tarjetas -->
      <Card v-for="user in displayedUsers" :key="user.id" :user="user" />
    </div>
    <button class="btn btn-primary" @click="toggleView">
      {{ showAll ? 'Ver menos' : 'Ver equipo' }}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import Card from '@/components/Card.vue';
import teamData from '@/assets/equipo.json'; // Asegúrate de tener la ruta correcta al archivo JSON

export default {
  name: 'AboutView',
  components: {
    Card
  },
  setup() {
    const isExpanded = ref(false); // Controla si el texto está expandido
    const toggleText = () => {
      isExpanded.value = !isExpanded.value; // Alterna el estado de expansión
    };


    const showAll = ref(false); // Controla si se muestran todas las cards
    // Mostrar las primeras 3 cards por defecto
    const displayedUsers = ref(teamData.slice(0, 3));
    const toggleView = () => {
      showAll.value = !showAll.value;
      displayedUsers.value = showAll.value ? teamData : teamData.slice(0, 3);
    };

    return {
      showAll,
      displayedUsers,
      toggleView,
      teamData,
      isExpanded,
      toggleText
    };
  }
};
</script>

<style scoped>
button {
  margin-top: 20px;
}

.grillaEquipo {
  margin-left: 200px;
  margin-right: 200px;
}

.equipo {
  padding: 40px;
}

@media screen and (max-width: 768px) { 

  .grillaEquipo {
    margin-left: 0px;
    margin-right: 0px;

  }
  
}


.section {
  margin: 0px;
}

.banner {
  width: 100%;
  height: 300px;
  /* Ajusta la altura del banner */
  background-color: #ccc;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  margin-top: 20px;
  padding: 40px;
}

.content h2,
.content h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.content p {
  font-size: 1rem;
  line-height: 1.5;
}

.btn-link {
  color: #007bff;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>