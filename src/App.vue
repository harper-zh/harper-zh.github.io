<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>


<div id="app" >
  <NavBar class="mb-12"></NavBar>
    
  <RouterView />
</div>
</template>

<style scoped>



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
