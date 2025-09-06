<template>
  <div>
    <!-- Header de la noticia -->
    <div class="section">
      <div class="news-header container">
        <div class="breadcrumb">
          <router-link to="/news" class="breadcrumb-link">
            <i class="fas fa-arrow-left"></i> Volver a Noticias
          </router-link>
        </div>
        <div class="category-badge">{{ news?.category }}</div>
        <h1>{{ news?.title }}</h1>
        <div class="news-meta">
          <span class="author">{{ news?.author }}</span>
          <span class="date">{{ news?.date }}</span>
        </div>
        <div class="tags">
          <span v-for="tag in news?.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>

      <!-- Banner de imagen -->
      <div class="banner">
        <img :src="news?.image" :alt="news?.title" class="img-fluid" />
      </div>

      <!-- Contenido principal -->
      <div class="content container">
        <div class="content-wrapper">
          <!-- Descripción inicial -->
          <div class="lead-paragraph">
            {{ news?.description }}
          </div>

          <!-- Contenido completo -->
          <div class="full-content" v-html="formattedContent"></div>

          <!-- Botones de acción -->
          <div class="action-buttons">
            <button class="custom-btn share-btn" @click="shareNews">
              <i class="fas fa-share-alt"></i>
              <span>Compartir</span>
            </button>
            <router-link to="/news" class="custom-btn more-news-btn">
              <i class="fas fa-list"></i>
              <span>Ver más noticias</span>
            </router-link>
          </div>
        </div>

        <!-- Sidebar con información adicional -->
        <div class="sidebar">
          <div class="info-card">
            <h4>Información del artículo</h4>
            <div class="info-item">
              <strong>Categoría:</strong> {{ news?.category }}
            </div>
            <div class="info-item">
              <strong>Autor:</strong> {{ news?.author }}
            </div>
            <div class="info-item">
              <strong>Fecha:</strong> {{ news?.date }}
            </div>
            <div class="info-item">
              <strong>Etiquetas:</strong>
              <div class="tags-list">
                <span v-for="tag in news?.tags" :key="tag" class="tag-small">{{ tag }}</span>
              </div>
            </div>
          </div>

          <div class="contact-card">
            <h4>Contacto DTI</h4>
            <p>¿Tienes preguntas sobre este proyecto?</p>
            <button class="custom-btn contact-btn">
              <i class="fas fa-envelope"></i>
              <span>Contactar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import noticiasData from '@/assets/noticias.json'

export default {
  name: 'NewsDetailView',
  setup() {
    const route = useRoute()
    const news = ref(null)

    const formattedContent = computed(() => {
      if (!news.value?.fullContent) return ''
      
      // Convertir markdown básico a HTML
      return news.value.fullContent
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        .replace(/^/, '<p>')
        .replace(/$/, '</p>')
        .replace(/• /g, '<li>')
        .replace(/<p><li>/g, '<ul><li>')
        .replace(/<\/p>/g, (match, offset, string) => {
          if (string.substring(offset + 4, offset + 8) === '<li>') {
            return '</li></ul>'
          }
          return match
        })
    })

    const shareNews = () => {
      if (navigator.share) {
        navigator.share({
          title: news.value?.title,
          text: news.value?.description,
          url: window.location.href
        })
      } else {
        // Fallback para navegadores que no soportan Web Share API
        navigator.clipboard.writeText(window.location.href)
        alert('Enlace copiado al portapapeles')
      }
    }

    onMounted(() => {
      const newsId = parseInt(route.params.id)
      news.value = noticiasData.find(item => item.id === newsId)
      
      if (!news.value) {
        // Redirigir a 404 o página de noticias si no se encuentra
        router.push('/news')
      }
    })

    return {
      news,
      formattedContent,
      shareNews
    }
  }
}
</script>

<style scoped lang="scss">
/* Header de la noticia */
.news-header {
  padding: 30px 20px;
  text-align: left;
}

.breadcrumb {
  margin-bottom: 20px;
}

.breadcrumb-link {
  color: $primary-color;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s;
}

.breadcrumb-link:hover {
  color: $secondary-color;
}

.category-badge {
  display: inline-block;
  background-color: $secondary-color;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.news-header h1 {
  font-family: Roboto;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.2;
  color: $primary-color;
  margin-bottom: 20px;
}

.news-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  color: #666;
  font-size: 0.95rem;
}

.author {
  font-weight: 600;
}

.date {
  font-style: italic;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background-color: #f0f0f0;
  color: $primary-color;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Banner */
.banner {
  width: 100%;
  height: 400px;
  background-color: #ccc;
  margin-bottom: 40px;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Contenido principal */
.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  background: white;
}

.lead-paragraph {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #444;
  font-weight: 500;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-left: 4px solid $secondary-color;
  border-radius: 0 8px 8px 0;
}

.full-content {
  font-size: 1rem;
  line-height: 1.7;
  color: #333;
  
  :deep(p) {
    margin-bottom: 20px;
  }
  
  :deep(strong) {
    color: $primary-color;
    font-weight: 600;
  }
  
  :deep(ul) {
    margin: 20px 0;
    padding-left: 0;
  }
  
  :deep(li) {
    list-style: none;
    padding: 8px 0;
    padding-left: 20px;
    position: relative;
    
    &:before {
      content: "•";
      color: $secondary-color;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
}

/* Botones personalizados UBO */
.custom-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  i {
    font-size: 1rem;
  }
}

.share-btn {
  background: linear-gradient(135deg, $secondary-color 0%, #4fa8c5 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(92, 189, 224, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #4fa8c5 0%, $secondary-color 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(92, 189, 224, 0.4);
    color: white;
  }
}

.more-news-btn {
  background: linear-gradient(135deg, $primary-color 0%, #0a1f42 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(13, 44, 91, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #0a1f42 0%, $primary-color 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(13, 44, 91, 0.4);
    color: white;
    text-decoration: none;
  }
}

.contact-btn {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
  font-size: 0.85rem;
  padding: 10px 20px;
  
  &:hover {
    background: linear-gradient(135deg, #20c997 0%, #28a745 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
  }
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
  padding-top: 30px;
  padding-bottom: 60px;
  border-top: 1px solid #eee;
}

/* Sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-card, .contact-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.info-card h4, .contact-card h4 {
  color: $primary-color;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
  border-bottom: 2px solid $secondary-color;
  padding-bottom: 10px;
}

.info-item {
  margin-bottom: 15px;
  font-size: 0.9rem;
  
  strong {
    color: $primary-color;
    display: block;
    margin-bottom: 5px;
  }
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.tag-small {
  background-color: #f0f0f0;
  color: $primary-color;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.contact-card p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

/* Responsive */
@media (max-width: 992px) {
  .content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .news-header h1 {
    font-size: 2rem;
  }
  
  .banner {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .news-header {
    padding: 20px 30px;
  }
  
  .news-header h1 {
    font-size: 1.8rem;
  }
  
  .content {
    padding: 0 30px;
  }
  
  .news-meta {
    flex-direction: column;
    gap: 10px;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .banner {
    height: 250px;
  }
}
</style>
