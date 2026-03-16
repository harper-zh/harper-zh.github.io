<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const items = ref([
  { label: 'About Me', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Digital Tools', path: '/dev' },
{ label: 'CV', path: null, url: '/cv.pdf' }
]);

const route = useRoute();
const router = useRouter();
const menuOpen = ref(false);

const isActive = (item) => item.path === '/' ? route.path === '/' : route.path.startsWith(item.path)
const toggleMenu = () => { menuOpen.value = !menuOpen.value; };
const navigate = (item) => {
  if (item.url) {
    window.open(item.url, '_blank')
  } else {
    router.push(item.path)
    menuOpen.value = false
  }
}
</script>

<template>
  <nav class="navbar">
    <!-- 左侧：名字 -->
    <span class="site-title" @click="router.push('/')">Yuan Zhang</span>

    <!-- 汉堡按钮（小屏） -->
    <button class="menu-button" @click="toggleMenu">☰</button>

    <!-- 右侧：导航链接 -->
    <div class="navbar-links" :class="{ 'menu-open': menuOpen }">
      <div
        v-for="item in items"
        :key="item.label"
        :class="['navbar-item', { active: isActive(item) }]"
        @click="navigate(item)"
      >
        {{ item.label }}
        <span class="underline-bar"></span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  width: 80vw;
  margin: 0 auto;
  position: relative;
}

.site-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
}

.site-title:hover {
  opacity: 0.7;
}

.menu-button {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  display: none;
}

.navbar-links {
  display: flex;
  gap: 40px;
  align-items: center;
}

.navbar-item {
  position: relative;
  padding: 8px 10px;
  cursor: pointer;
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
}

.navbar-item.active {
  font-weight: 700;
  color: #000;
}

.underline-bar {
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  height: 2px;
  background-color: #000;
  width: 0;
  transition: width 0.3s ease;
}

.navbar-item.active .underline-bar {
  width: calc(100% - 20px);
}

@media (max-width: 768px) {
  .menu-button {
    display: block;
  }

  .navbar-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 8px 0;
    z-index: 100;
    
  }

  .navbar-links.menu-open {
    display: flex;
  }

  .navbar-item {
    padding: 10px 20px;
    text-align: center;
  }
}
</style>
