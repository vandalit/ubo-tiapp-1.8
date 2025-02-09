<template>
    <div class="dashboard-container">
      <h2>Dashboard</h2>
      
      <!-- Mostrar el botón de Log Out -->
      <button @click="logout">Log Out</button>
      
      <!-- Mostrar diferentes opciones según el rol -->
      <div v-if="isAdmin">
        <h3>Admin Access</h3>
        <p>Accede a la edición de proyectos, servicios y más.</p>
        
        <!-- Enlace a la página de edición de proyecto -->
        <router-link :to="'/edit-project/1'">Editar Proyecto A</router-link>
      </div>
      
      <div v-else>
        <h3>Usuario</h3>
        <p>Vista solo de lectura.</p>
      </div>
      
      <!-- Proyecto y actividades se mostrarán como antes -->
      <div class="projects-stats">
        <h3>Proyectos</h3>
        <canvas id="projectChart"></canvas>
      </div>
      <div class="notifications">
        <h3>Últimas Actividades</h3>
        <ul>
          <li v-for="activity in activities" :key="activity.date">{{ activity.activity }} ({{ activity.date }})</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  import proyectos from '@/assets/proyectos.json';
  import activities from '@/assets/activities.json';
  
  export default {
    name: 'DashboardView',
    setup() {
      const activitiesList = ref(activities);
      const isAdmin = ref(false);  // Estado para determinar si el usuario es admin
      
      // Verificar si el usuario es admin
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.role === 'admin') {
        isAdmin.value = true;
      }
  
      // Gráfico de proyectos con Chart.js
      const chartData = ref({
        labels: proyectos.map(p => p.name),
        datasets: [{
          label: 'Progreso de Proyectos (%)',
          data: proyectos.map(p => p.progress),
          borderColor: '#42A5F5',
          fill: false
        }]
      });
  
      let chart;
      onMounted(() => {
        const ctx = document.getElementById('projectChart').getContext('2d');
        chart = new Chart(ctx, {
          type: 'line',
          data: chartData.value
        });
      });
  
      // Función para el Log Out
      const logout = () => {
        localStorage.removeItem('user');  // Eliminar los datos del usuario en localStorage
        window.location.href = '/';  // Redirigir a la vista de Login
      };
  
      return {
        activities: activitiesList,
        isAdmin,
        logout
      };
    }
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    padding: 20px;
  }
  
  button {
    background-color: #ff5c5c;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #ff3b3b;
  }
  
  .projects-stats,
  .notifications {
    margin-top: 20px;
  }
  </style>
  