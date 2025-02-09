<template>
    <div class="edit-project-container">
      <h2>Editar Proyecto</h2>
  
      <form @submit.prevent="saveChanges">
        <label for="name">Nombre del Proyecto:</label>
        <input v-model="project.name" id="name" type="text" />
  
        <label for="status">Estado:</label>
        <select v-model="project.status" id="status">
          <option value="En Progreso">En Progreso</option>
          <option value="Finalizado">Finalizado</option>
          <option value="En Espera">En Espera</option>
        </select>
  
        <label for="progress">Progreso (%):</label>
        <input v-model="project.progress" id="progress" type="number" min="0" max="100" />
  
        <label for="teamMembers">Miembros del Equipo:</label>
        <input v-model="project.teamMembers" id="teamMembers" type="text" placeholder="Separar nombres con coma" />
  
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  </template>
  
  <script>
  import proyectos from '@/assets/proyectos.json';  // Importa los proyectos desde el archivo JSON
  
  export default {
    name: 'EditProject',
    props: {
      projectId: Number  // El ID del proyecto que se va a editar
    },
    data() {
      // Encuentra el proyecto basado en el ID
      const project = proyectos.find(p => p.id === this.projectId);
  
      return {
        project: { ...project }
      };
    },
    methods: {
      saveChanges() {
        // Guardar cambios en localStorage (simulando un backend)
        const updatedProjects = proyectos.map(p =>
          p.id === this.project.id ? { ...this.project } : p
        );
  
        // Simulamos guardar el proyecto actualizado en localStorage
        localStorage.setItem('proyectos', JSON.stringify(updatedProjects));
        alert('Cambios guardados!');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Agregar estilo básico para el formulario */
  .edit-project-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  
  input,
  select,
  button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  