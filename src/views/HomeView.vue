<template>
  <div class="home">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Bienvenido al Dashboard de TI</h1>
        <p>Gestiona proyectos, descubre noticias y accede a recursos esenciales.</p>
        <div class="hero-buttons">
          <router-link to="/services" class="btn btn-primary">
            <i class="fas fa-cogs"></i> Explorar Servicios
          </router-link>
          <router-link to="/news" class="btn btn-secondary">
            <i class="fas fa-newspaper"></i> Ver Noticias
          </router-link>
          <router-link to="/dashboard" class="btn btn-outline-primary">
            <i class="fas fa-chart-line"></i> Ir al Dashboard
          </router-link>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://placehold.co/600x400" alt="Ilustración Dashboard" />
      </div>
    </section>

    <!-- Summary Metrics -->
    <section class="metrics">
      <h2>Resumen del Sistema</h2>
      <div class="metrics-grid">
        <div class="metric-card">
          <i class="fas fa-project-diagram"></i>
          <h3>15</h3>
          <p>Proyectos Activos</p>
        </div>
        <div class="metric-card">
          <i class="fas fa-users"></i>
          <h3>256</h3>
          <p>Usuarios Conectados</p>
        </div>
        <div class="metric-card">
          <i class="fas fa-shield-alt"></i>
          <h3>99%</h3>
          <p>Seguridad Operativa</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  padding: 2rem;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: linear-gradient(to right, $primary-color, lighten($primary-color, 20%));
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .hero-content {
    text-align: left;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .hero-buttons {
      margin-top: 1.5rem;

      .btn {
        margin: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      }
    }
  }

  .hero-image img {
    max-width: 100%;
    border-radius: 10px;
  }
}

/* Metrics Section */
.metrics {
  margin-top: 3rem;

  h2 {
    margin-bottom: 2rem;
    color: $primary-color;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;

    .metric-card {
      background-color: white;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;

      i {
        font-size: 2rem;
        color: $primary-color;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
        color: $secondary-color;
      }

      p {
        color: $text-color;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
      }
    }
  }
}
</style>