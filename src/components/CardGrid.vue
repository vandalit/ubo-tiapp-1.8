<template>
  <div class="row card-grid">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="col-md-4 mb-4"
    >
      <div class="card h-100">
        <img
          :src="service.image"
          class="card-img-top"
          alt="Imagen del servicio"
        />
        <div class="card-body">
          <h5 class="card-title">{{ service.name }}</h5>
        </div>
        <div class="card-footer text-end">
          <!-- Botón toggle "+" para pasar a vista detalle -->
          <button
            class="btn btn-primary"
            @click="selectCard(index)"
          >
            <i class="fa fa-plus"></i> <!-- Icono FA de ejemplo -->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
})

const emits = defineEmits(['selectService'])

function selectCard(index) {
  // Emitimos el evento para que el padre abra el carrusel en la tarjeta "index"
  emits('selectService', index)
}
</script>

<style scoped>
.card-grid {
  /* Personaliza estilos de la grilla */
  color: chocolate;
}
</style>
