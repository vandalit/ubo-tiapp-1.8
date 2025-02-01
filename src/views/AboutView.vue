<template>
  <div>
    <h2>Equipo</h2>
    <div class="row g-4"> <!-- g-4 para el espaciado entre las tarjetas -->
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
    const showAll = ref(false);

    // Mostrar las primeras 3 cards por defecto
    const displayedUsers = ref(teamData.slice(0, 3));

    const toggleView = () => {
      showAll.value = !showAll.value;
      displayedUsers.value = showAll.value ? teamData : teamData.slice(0, 3);
    };

    return {
      showAll,
      displayedUsers,
      toggleView
    };
  }
};
  </script>
  
  <style scoped>
  button {
    margin-top: 20px;
  }


  .row {
    margin-left: 200px;
    margin-right: 200px;
  }


  </style>
  