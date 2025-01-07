<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>


<div id="app" >
  <NavBar ></NavBar>
    
  <RouterView class="content"></RouterView>
</div>
</template>

<style scoped>



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  #app {
    max-width: 1920px;
    min-width: 1080px;
  }
}
.content {
  
  flex-grow: 1;
}
</style>
