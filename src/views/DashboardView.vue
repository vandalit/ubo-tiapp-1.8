<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    
    <!-- Sección de métricas -->
    <section class="metrics">
      <h2>Métricas Clave</h2>
      <div class="metrics-grid">
        <!-- Gráfico de proyectos activos -->
        <div class="metric-card">
          <canvas id="activeProjectsChart"></canvas>
          <p>Proyectos Activos</p>
        </div>
        <!-- Gráfico de usuarios activos -->
        <div class="metric-card">
          <canvas id="usersChart"></canvas>
          <p>Usuarios Activos</p>
        </div>
      </div>
    </section>

    <section class="notifications">
      <h2>Notificaciones Recientes</h2>
      <ul class="notifications-list">
        <li v-for="notification in notifications" :key="notification.id">
          <i class="fas fa-bell"></i> {{ notification.message }}
        </li>
      </ul>
    </section>

    <section class="resources">
      <h2>Recursos</h2>
      <div class="resources-grid">
        <Tarjeta>
          <h5>Repositorio GitHub</h5>
          <p>Accede al código del proyecto.</p>
          <button class="btn btn-primary" @click="openResource('https://github.com')">Abrir</button>
        </Tarjeta>
        <Tarjeta>
          <h5>Documentación</h5>
          <p>Guías y referencias técnicas.</p>
          <button class="btn btn-primary" @click="openResource('https://docs.example.com')">Ver</button>
        </Tarjeta>
        <Tarjeta>
          <h5>Herramientas</h5>
          <p>Accede a las herramientas del equipo.</p>
          <button class="btn btn-primary" @click="openResource('https://tools.example.com')">Explorar</button>
        </Tarjeta>
      </div>
    </section>
    
    <section class="proyectos">
      <h2>Proyectos</h2>
      <div class="proyectos-grid">
        <Card 
          v-for="project in proyectos" 
          :key="project.id" 
          :cardData="project" 
       />
      </div>
    </section>

    <!-- Botón para gestionar proyectos -->
    <button @click="goToProjectManagement" v-if="isAdmin">Administrar Proyectos</button>

    <!-- Botón para Log Out -->
    <button @click="logout">Log Out</button>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import proyectos from '@/assets/proyectos.json'; // Asegúrate de que el archivo proyectos.json esté en la ruta correcta
import Chart from "chart.js/auto";
import Tarjeta from "@/components/Tarjeta.vue";

export default {
  name: "DashboardView",
  components: { Card, Tarjeta },
  data() {
    return {
      notifications: [
        { id: 1, message: "Nuevo proyecto asignado" },
        { id: 2, message: "Actualización de seguridad disponible" },
        { id: 3, message: "Revisión de sprint finalizada" }
      ],
      isAdmin: false,  // Asumimos que no es admin al principio
      proyectos: []  // Inicialmente vacío, se llenará desde localStorage o proyectos.json
    };
  },
  created() {
    // Intentamos cargar los proyectos desde localStorage
    const storedProjects = JSON.parse(localStorage.getItem('proyectos'));

    if (storedProjects && storedProjects.length > 0) {
      // Si hay proyectos en localStorage, cargarlos
      this.proyectos = storedProjects;
    } else {
      // Si no hay proyectos en localStorage, cargarlos desde proyectos.json
      this.proyectos = proyectos;
      // Guardamos los proyectos en localStorage para la próxima vez
      localStorage.setItem('proyectos', JSON.stringify(this.proyectos));
    }

    // Verificar el rol del usuario en localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.role === 'admin') {
      this.isAdmin = true;  // Si el usuario es admin, permitimos el acceso a funciones de administración
    }
  },
  methods: {
    openResource(url) {
      window.open(url, "_blank");
    },
    renderCharts() {
      // Gráfico de proyectos activos
      const ctx1 = document.getElementById("activeProjectsChart").getContext("2d");
      const activeProjectsData = this.proyectos.map(project => project.progress);
      const activeProjectsLabels = this.proyectos.map(project => project.name);

      new Chart(ctx1, {
        type: "doughnut",
        data: {
          labels: activeProjectsLabels,
          datasets: [
            {
              data: activeProjectsData,
              backgroundColor: ["#4caf50", "#ffc107", "#f44336"]
            }
          ]
        }
      });

      // Gráfico de usuarios activos
      const ctx2 = document.getElementById("usersChart").getContext("2d");
      new Chart(ctx2, {
        type: "bar",
        data: {
          labels: ["Semana 1", "Semana 2", "Semana 3"],
          datasets: [
            {
              label: "Usuarios Activos",
              data: [200, 250, 300],
              backgroundColor: ["#007bff"]
            }
          ]
        }
      });
    },
    goToProjectManagement() {
      this.$router.push('/admin-proyectos');  // Redirigir a la vista de gestión de proyectos
    },
    logout() {
      // Eliminar solo los datos del usuario (no los proyectos)
      localStorage.removeItem('user');
      
      // Redirigir al Login
      this.$router.push('/');  // O la ruta correspondiente al login
    }
  },
  mounted() {
    this.renderCharts();  // Inicializar los gráficos al montar el componente
  }
};
</script>

<style scoped lang="scss">
.dashboard {
  text-align: center;
  padding: 2rem;

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 2rem;
  }

  .metric-card {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    canvas {
      max-width: 100%;
      margin: auto;
    }
  }

  .notifications-list {
    list-style: none;
    padding: 0;
    margin-top: 1rem;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;

      i {
        color: #007bff;  // Color para los iconos de notificación
      }
    }
  }

  .proyectos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 2rem;
  }
  
  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 2rem;
  }


  button {
    margin-top: 20px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
  }
}
</style>
