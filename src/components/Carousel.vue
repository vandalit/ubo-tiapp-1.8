<template>
    <h2>carusel</h2>
    <div class="carusel">
      <Card></Card>
      <Card></Card>
      <Card></Card> 
    </div>
  </template>
  
  <script>
  import Card from './Card.vue';
  
  export default {
    name: "Carousel",
    components: { Card }
  };
  </script>
  
  <style scoped lang="scss">
  .carusel {
    display: flex;
    padding: 10px;
    margin: auto;
  }
  </style>