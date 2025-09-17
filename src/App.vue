<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue';

const route = useRoute()
const isHome = computed(() => route.name === 'about' || route.path === '/')
</script>

<template>


<!-- <div id="app" > -->
  <NavBar ></NavBar>
    
  <div :class="['content', { 'home-layout': isHome }]">
    <RouterView></RouterView>
  </div>
<!-- </div> -->
</template>

<style scoped>



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  /* #app {
    max-width: 1920px;
    min-width: 1080px;
  } */
}
.content {
  
  flex-grow: 1;
}
/* Adjust AboutMe position only on home route */
.home-layout :deep(.aboutme-root),
.home-layout :deep(.about-me-root) {
  /* tweak as desired */
  margin-top: 3rem;
}
</style>
