<template>
  <div class="row">
    <!-- Recorremos los servicios -->
    <div
      v-for="(service, index) in services"
      :key="index"
      class="col-md-4 mb-4"
    >
      <!-- Tarjeta personalizada -->
      <div class="service-card shadow" @click="selectCard(index)">
        <!-- Imagen superior -->
        <div class="image-container">
          <img
            :src="service.image"
            alt="Imagen del servicio"
            class="img-fluid"
          />
        </div>
        <!-- Área inferior con el nombre y el botón "+" -->
        <div class="label-area">
          <span class="service-name">
            {{ service.name }}
          </span>
          <div class="plus-btn" @click.stop="selectCard(index)">
            <i class="fa fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
})

const emits = defineEmits(['selectService'])

function selectCard(index) {
  // Emitimos al padre qué tarjeta se seleccionó
  emits('selectService', index)
}
</script>

<style scoped>
/* 
  Contenedor general de la tarjeta.
  Redondeamos esquinas, aplicamos un fondo blanco y sombra (o la de Bootstrap).
*/
.service-card {
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
}

/* 
  Contenedor de la imagen arriba. 
  Podemos añadir height fija o aspect-ratio si quieres un recorte más controlado.
*/
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/*
  Área inferior donde va el nombre y el botón "+". 
  Usamos flex para centrar el texto y posicionar el botón al costado.
*/
.label-area {
  position: relative;
  background: #fff;
  padding: 0.75rem 1rem;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Nombre del servicio */
.service-name {
  font-size: 1rem;
  font-weight: 500;
  color: #0d2c5b; /* Ajusta al color corporativo si deseas */
}

/* 
  El botón “+” en una cajita blanca, 
  flotando a la derecha y levemente solapado con la tarjeta.
*/
.plus-btn {
  position: absolute;
  right: 1rem;
  background: #fff;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.plus-btn i {
  color: #0d2c5b;
  font-size: 1.1rem;
}
</style>
