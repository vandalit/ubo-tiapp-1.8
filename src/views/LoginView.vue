<template>
  <div class="login-container">
    <!-- Imagen de fondo a pantalla completa -->
    <div class="background"></div>

    <!-- Contenedor central con dos cajas lado a lado -->
    <div class="centered-content">
      <!-- Caja izquierda: solo logo -->
      <div class="left-box shadow">
        <img
          src="https://placehold.co/300x300?text=Logo+UBO"
          alt="Logo UBO"
          class="ubo-logo"
        />
      </div>

      <!-- Caja derecha: formulario de login -->
      <div class="right-box shadow">
        <h5 class="mb-3">
          Te damos la bienvenida al portal
          <strong>UBO TI</strong>
        </h5>

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
        <button @click="login" class="btn btn-primary w-100 mb-2">
          Ingresar
        </button>

        <!-- Mensaje de error -->
        <p v-if="loginError" class="text-danger mb-0">
          Credenciales incorrectas.
        </p>
      </div>
    </div>
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
/* 
  ===== Contenedor general =====
  Ocupa toda la pantalla para mostrar la imagen de fondo. 
*/
.login-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden; /* evitar scroll si no es necesario */
}

/* 
  ===== Imagen de fondo =====
  Ocupa todo el contenedor, en capa trasera. 
*/
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://placehold.co/1920x1080?text=Fondo+Portal+TI')
    center center / cover no-repeat;
  z-index: 1;
}

/* 
  ===== Contenido centrado =====
  Caja flexible que centra vertical y horizontalmente.
  Ponemos z-index superior para que quede "encima" de la imagen de fondo.
*/
.centered-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem; /* espacio entre las dos cajas */
  height: 100%; /* para ocupar todo el alto y centrar verticalmente */
  padding: 0 2rem; /* margen lateral si deseas */
}

/* 
  ===== Caja izquierda: solo el logo =====
*/
.left-box {
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  display: flex; /* para centrar el logo vertical y horizontal */
  align-items: center;
  justify-content: center;
}

/* Ajusta el tamaño del logo a tu gusto */
.ubo-logo {
  max-width: 220px;
}

/* 
  ===== Caja derecha: formulario de login =====
*/
.right-box {
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  width: 360px; /* Ajusta el ancho preferido para el formulario */
}
</style>