<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue';

const route = useRoute()
const isHome = computed(() => route.name === 'about' || route.path === '/')
</script>

<template>
  <div class="site-wrapper">
    <NavBar />
    <main :class="['page-content', { 'home-layout': isHome }]">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 3rem;

}

.page-content {
  width: 80vw;
  margin: 0 auto;
  padding: 2rem 0;
}

.home-layout {
  flex: 1;
  display: flex;
  align-items: center;
}

.home-layout :deep(.aboutme-root),
.home-layout :deep(.about-me-root) {
  margin-top: 0;
}
</style>
