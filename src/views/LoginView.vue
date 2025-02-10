<template>
  <div class="login-container">

    <!-- Hero / Imagen de fondo con logo -->
    <div class="hero-section">
      <img
        class="hero-background"
        src="https://placehold.co/1920x1080?text=Fondo+Portal+TI"
        alt="Fondo login"
      />
      <div class="hero-overlay">
        <!-- Logo Universidad (placeholder) -->
        <img
          class="ubo-logo"
          src="https://placehold.co/300x300?text=Logo+UBO"
          alt="Universidad Bernardo O'Higgins"
        />
        <h2 class="hero-title text-white mt-3">
          Nuestra Data TI <br />
          <small class="fs-6 text-light">Accede con tu cuenta</small>
        </h2>
      </div>
    </div>

    <!-- Sección de login (tarjeta de acceso) -->
    <div class="login-card-container">
      <div class="login-card shadow rounded p-4">
        <h5 class="mb-4">Te damos la bienvenida al portal <strong>UBO TI</strong></h5>

        <!-- Campo Usuario -->
        <div class="mb-3">
          <label for="username" class="form-label">Ingresa tu Usuario</label>
          <div class="input-group">
            <span class="input-group-text bg-white">
              <i class="fa-solid fa-user"></i>
            </span>
            <input
              v-model="username"
              id="username"
              class="form-control"
              placeholder="ejemplo@ubo.cl"
            />
          </div>
        </div>

        <!-- Campo Password -->
        <div class="mb-3">
          <label for="password" class="form-label">Ingresa tu Contraseña</label>
          <div class="input-group">
            <span class="input-group-text bg-white">
              <i class="fa-solid fa-lock"></i>
            </span>
            <input
              v-model="password"
              id="password"
              type="password"
              class="form-control"
              placeholder="•••••••"
            />
          </div>
        </div>

        <!-- Olvido de clave -->
        <div class="mb-4">
          <a href="#" class="link-secondary text-decoration-none">
            <small>¿Olvido de clave?</small>
          </a>
        </div>

        <!-- Botón Login -->
        <button @click="login" class="btn btn-primary w-100 mb-2">Ingresar</button>

        <!-- Mensaje de error -->
        <p v-if="loginError" class="text-danger mb-0">
          Credenciales incorrectas.
        </p>
      </div>
    </div>

    <!-- Footer con varias columnas -->
    <footer class="page-footer bg-light pt-4 pb-3">
      <div class="container">
        <div class="row">
          <!-- Equipo -->
          <div class="col-6 col-md-2">
            <h6 class="fw-bold">Equipo</h6>
            <ul class="list-unstyled">
              <li>Jefatura</li>
              <li>Desarrolladores</li>
            </ul>
          </div>
          <!-- Servicios -->
          <div class="col-6 col-md-2">
            <h6 class="fw-bold">Servicios</h6>
            <ul class="list-unstyled">
              <li>Registro</li>
              <li>Consultoría</li>
              <li>Seguridad</li>
            </ul>
          </div>
          <!-- Proyectos -->
          <div class="col-6 col-md-2 mt-3 mt-md-0">
            <h6 class="fw-bold">Proyectos</h6>
            <ul class="list-unstyled">
              <li>01 Proyecto TI</li>
              <li>02 Proyecto Seguridad</li>
              <li>03 Proyecto Laboratorio</li>
              <li>04 Proyecto Auditorio</li>
            </ul>
          </div>
          <!-- Intranet -->
          <div class="col-6 col-md-2 mt-3 mt-md-0">
            <h6 class="fw-bold">Intranet</h6>
            <ul class="list-unstyled">
              <li>Log In</li>
            </ul>
          </div>
          <!-- Ticket de ayuda -->
          <div class="col-12 col-md-2 mt-3 mt-md-0">
            <h6 class="fw-bold">Ticket de ayuda</h6>
          </div>
        </div>
        <div class="text-center mt-3 small text-secondary">
          © Universidad Bernardo O’Higgins
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import usuarios from '@/assets/usuarios.json'

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      loginError: false
    }
  },
  methods: {
    login() {
      const user = usuarios.find(
        u => u.username === this.username && u.password === this.password
      )
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        this.$router.push('/dashboard')
      } else {
        this.loginError = true
      }
    }
  }
}
</script>

<style scoped>
/* Contenedor principal */
.login-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* Evita saltos bruscos al crecer la tarjeta de login */
  justify-content: space-between;
}

/* Sección hero (imagen + logo + texto) */
.hero-section {
  position: relative;
  width: 100%;
  height: 40vh; /* Ajusta la altura según tu preferencia */
  background-color: #000;
  overflow: hidden;
}

/* Imagen de fondo en la sección hero */
.hero-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Capa para oscurecer la imagen y colocar el contenido */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Filtro de oscurecimiento */
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Logo principal */
.ubo-logo {
  width: 200px;
  max-width: 250px;
}

/* Título “Nuestra Data TI” */
.hero-title {
  margin-top: 1rem;
  text-align: center;
}

/* Contenedor de la tarjeta de login */
.login-card-container {
  display: flex;
  justify-content: flex-end;
  margin-top: -10vh; /* Para “solapar” la tarjeta sobre la sección hero */
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

/* Tarjeta de login (derecha) */
.login-card {
  background: #fff;
  width: 90%;
  max-width: 400px;
  margin-right: 2rem;
  /* ajusta si quieres más o menos sombra */
  border-radius: 0.75rem;
}


</style>