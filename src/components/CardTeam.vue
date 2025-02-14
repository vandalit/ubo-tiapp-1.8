<template>
  <div class="card-member">
    <!-- Parte superior (imagen) -->
    <div class="card-top">
      <img :src="user.image" alt="Foto de usuario" />
    </div>

    <!-- Parte inferior (datos + botón) -->
    <div class="card-bottom">
      <h4 class="user-name">
        {{ formattedName.firstName }}<br />
        {{ formattedName.lastName }}
      </h4>
      <p class="user-role">{{ user.role }}</p>
      <!-- Botón para abrir el modal con más detalles -->
      <button class="expand-btn" @click="$emit('open-modal', user)">
        <i class="fas fa-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardTeam',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedName() {
      const parts = this.user.name.split(' ');
      return {
        firstName: parts[0] || '',
        lastName: parts.slice(1).join(' ') || ''
      };
    }
  }
};
</script>

<style scoped lang="scss">
/* Contenedor general de la tarjeta */
.card-member {
  width: 305px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Parte superior: imagen centrada */
.card-top {
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-top img {
  width: 230px;
  height: 230px;
  border-radius: 50%;
  object-fit: cover;
}

/* Parte inferior: datos y botón */
.card-bottom {
  background-color: $background-color; /* tono gris muy claro */
  padding: 15px;
  position: relative;  /* para ubicar el botón en la esquina */
  text-align: left;
}

/* Nombre del miembro */
.user-name {
  font-size: 1rem;
  font-weight: 600; /* semi-bold */
  color: #092C4C;    /* color aproximado al azul oscuro del mockup */
  margin-bottom: 5px;
}

/* Rol o cargo del miembro */
.user-role {
  font-size: 0.85rem;
  color: #666;
  text-transform: uppercase;
  margin: 0;
}

/* Botón (+) en la esquina inferior derecha */
.expand-btn {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 28px;
  height: 28px;
  background-color: $light-color;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expand-btn i {
  color: $secondary-color;
  font-size: 14px;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .card-member {
    width: 100%;
    max-width: 240px;
    margin: 0 auto;
  }
}
</style>
