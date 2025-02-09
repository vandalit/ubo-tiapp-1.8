<template>
    <div class="login-container">
      <h2>Login</h2>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Log In</button>
      <p v-if="loginError" class="error">Credenciales incorrectas.</p>
    </div>
  </template>
  
  <script>
  import usuarios from '@/assets/usuarios.json'; // Ruta del archivo usuarios.json
  
  export default {
    name: 'LoginView',
    data() {
      return {
        username: '',
        password: '',
        loginError: false
      };
    },
    methods: {
      login() {
        const user = usuarios.find(u => u.username === this.username && u.password === this.password);
        if (user) {
          // Guardar los datos del usuario en localStorage
          localStorage.setItem('user', JSON.stringify(user));
          this.$router.push('/dashboard');
        } else {
          this.loginError = true;
        }
      }
    }
  };
  </script>
  