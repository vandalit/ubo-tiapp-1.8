<template>
  <div class="consejos-view">
    <!-- Sección principal / Hero -->
    <div class="section">
      <div class="about-header container">
        <h2>Consejos y Buenas Prácticas para evitar el Phishing</h2>
        <p>en sistemas TI</p>
      </div>

      <!-- Banner de ancho completo -->
      <div class="banner">
        <img src="../assets/img/img10.webp" alt="Banner Consejos" class="img-fluid" />
      </div>
    </div>

    <!-- Carrusel de Consejos -->
    <div class="consejos-section">
      <div class="container">
        <CarruselConsejos :consejos="consejos" />
      </div>
    </div>

    <!-- Sección de Banderas Rojas -->
    <div class="banderas-rojas-section">
      <div class="container">
        <h2>Si detectas "banderas rojas de alerta" en un correo electrónico o mensaje de texto</h2>
        
        <div class="banderas-list">
          <div class="bandera-item">
            <div class="bandera-icon">
              <i class="fas fa-mouse-pointer"></i>
            </div>
            <p>No hagas clic en él.</p>
          </div>
          
          <div class="bandera-item">
            <div class="bandera-icon">
              <i class="fas fa-reply"></i>
            </div>
            <p>No respondas ni reenvíes el correo.</p>
          </div>
          
          <div class="bandera-item">
            <div class="bandera-icon">
              <i class="fas fa-download"></i>
            </div>
            <p>No abras archivos adjuntos.</p>
          </div>
          
          <div class="bandera-item">
            <div class="bandera-icon">
              <i class="fas fa-trash"></i>
            </div>
            <p>Borra inmediatamente el correo o mensaje.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CarruselConsejos from '@/components/CarruselConsejos.vue'
import consejosData from '@/assets/consejos.json'

// Reactive data
const consejos = ref(consejosData)
</script>

<style scoped lang="scss">
.consejos-view {
  min-height: 100vh;
}

// Header styles (reutilizando estilos existentes)
.about-header {
  padding: 20px 20px !important;
  text-align: left;
  
  h2 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    color: $primary-color;
    margin-bottom: 0.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
    font-weight: 300;
  }
}

// Banner styles (reutilizando estilos existentes del proyecto)
.banner {
  width: 100%;
  height: 400px;
  background-color: #ccc;
  margin-bottom: 40px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// Sección del carrusel
.consejos-section {
  padding: 6rem 0 3rem;
  background: #f8f9fa;
  margin-top: -3rem;
}

// Sección de banderas rojas
.banderas-rojas-section {
  padding: 4rem 0;
  background: white;
  
  h2 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 1.8rem;
    color: $primary-color;
    text-align: left;
    margin-bottom: 3rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 768px) {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
  }
}

.banderas-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.bandera-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid $secondary-color;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-left-color: $primary-color;
  }
  
  .bandera-icon {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    background: $secondary-color;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
  }
  
  &:hover .bandera-icon {
    background: $primary-color;
  }
  
  p {
    font-size: 1rem;
    color: $primary-color;
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    
    .bandera-icon {
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
}

// Animaciones de entrada
.consejos-view {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
