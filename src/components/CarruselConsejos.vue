<template>
  <div class="carrusel-container">
    <div class="carrusel-wrapper">
      <!-- Navegación izquierda -->
      <button 
        class="nav-btn nav-prev" 
        @click="prevSlide"
      >
        <i class="fas fa-chevron-left"></i>
      </button>

      <!-- Cards del carrusel -->
      <div class="carrusel-content">
        <div 
          v-for="(consejo, index) in consejos" 
          :key="consejo.id"
          class="card-consejo"
          :class="{
            'active': index === currentIndex,
            'prev': index === getPrevIndex(currentIndex),
            'next': index === getNextIndex(currentIndex),
            'hidden': !isVisible(index, currentIndex)
          }"
          @click="selectCard(index)"
          :style="{ backgroundImage: `url(${consejo.image})` }"
        >
          <div class="card-overlay">
            <div class="card-content">
              <h3 class="card-title">{{ consejo.title }}</h3>
              <div class="card-description" :class="{ 'show': index === currentIndex }">
                <p>{{ consejo.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navegación derecha -->
      <button 
        class="nav-btn nav-next" 
        @click="nextSlide"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>

    <!-- Indicadores -->
    <div class="carrusel-indicators">
      <button
        v-for="(consejo, index) in consejos"
        :key="`indicator-${consejo.id}`"
        class="indicator"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  consejos: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const nextSlide = () => {
  if (currentIndex.value < props.consejos.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // Volver al inicio
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.consejos.length - 1 // Ir al final
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const selectCard = (index) => {
  currentIndex.value = index
}

// Funciones helper para cálculo circular de índices
const getPrevIndex = (current) => {
  return current === 0 ? props.consejos.length - 1 : current - 1
}

const getNextIndex = (current) => {
  return current === props.consejos.length - 1 ? 0 : current + 1
}

const isVisible = (index, current) => {
  const prev = getPrevIndex(current)
  const next = getNextIndex(current)
  return index === current || index === prev || index === next
}
</script>

<style scoped lang="scss">
.carrusel-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.carrusel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 400px;
}

.nav-btn {
  background: $secondary-color;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: $primary-color;
    transform: scale(1.1);
  }
  
  i {
    font-size: 1.2rem;
  }
}

.nav-prev {
  margin-right: 2rem;
}

.nav-next {
  margin-left: 2rem;
}

.carrusel-content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 400px;
  overflow: visible;
}

.card-consejo {
  position: absolute;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  // Card inactiva (lateral)
  width: 280px;
  height: 320px;
  opacity: 0.7;
  transform: scale(0.85);
  z-index: 1;
  
  // Card activa (centro)
  &.active {
    width: 350px;
    height: 400px;
    opacity: 1;
    transform: scale(1);
    z-index: 5;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  // Posicionamiento con transición suave
  &.prev {
    left: -150px;
  }
  
  &.next {
    right: -150px;
  }
  
  &.hidden {
    opacity: 0;
    transform: scale(0.7) translateX(-100px);
    pointer-events: none;
  }
  
  &:hover:not(.active) {
    opacity: 0.9;
  }
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1.5rem;
  border-radius: 0 0 15px 15px;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.card-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  text-align: center;
}

.card-description {
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.show {
    opacity: 1;
  }
  
  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
    text-align: center;
    margin: 0;
  }
}

.carrusel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.active {
    background: $secondary-color;
    transform: scale(1.2);
  }
  
  &:hover {
    background: $primary-color;
  }
}


// Responsive
@media (max-width: 768px) {
  .carrusel-wrapper {
    flex-direction: column;
    min-height: 350px;
  }
  
  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
  }
  
  .nav-prev {
    left: 10px;
    margin-right: 0;
  }
  
  .nav-next {
    right: 10px;
    margin-left: 0;
  }
  
  .card-consejo {
    width: 250px;
    height: 280px;
    
    &.active {
      width: 300px;
      height: 350px;
    }
    
    &.prev {
      left: -100px;
    }
    
    &.next {
      right: -100px;
    }
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .card-title {
    font-size: 1rem;
  }
  
  .card-description p {
    font-size: 0.85rem;
  }
}
</style>
