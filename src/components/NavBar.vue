

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const items = ref([
  { label: 'About Me', path: '/', command: () => router.push('/') },
  { label: 'Researches & Projects', path: '/research', command: () => router.push('/research') },
  { label: 'Design', path: '/design', command: () => router.push('/design') },
  { label: 'Development & Comics', path: '/others', command: () => router.push('/others') },
]);

const route = useRoute();
const router = useRouter();
const menuOpen = ref(false);

const isActive = (item) => route.path === item.path;

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const handleMobileClick = (item) => {
  router.push(item.path);
  menuOpen.value = false; // Close menu after selection
};
</script>

<template>
  <nav class="navbar">
    <!-- 菜单按钮 (在小屏幕显示) -->
    <button class="menu-button" @click="toggleMenu">
      ☰
    </button>

    <!-- 标签导航 -->
    <div
      class="navbar-links"
      :class="{ 'menu-open': menuOpen }"
    >
      <div
        v-for="item in items"
        :key="item.label"
        :class="['navbar-item', { active: isActive(item) }]"
        @click="handleMobileClick(item)"
      >
        {{ item.label }}
        <span class="underline"></span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Navbar 基本样式 */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;

  position: relative;
}

/* 菜单按钮 */
.menu-button {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  display: none; /* 默认隐藏 */
}

/* 标签导航样式 */
.navbar-links {
  display: flex;
  gap: 20px;
  transition: all 0.3s ease-in-out;
  justify-content: space-between;
  width:100%;

}

.navbar-item {
  position: relative;
  padding: 10px;
  
  cursor: pointer;
  color: #333;
  font-weight: 500;
}

.navbar-item.active {
  font-weight: bold;
  color: #000;
}

.navbar-item .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #000;
  transition: width 0.3s ease-in-out;
}

.navbar-item.active .underline {
  width: 100%;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .menu-button {
    display: block; /* 小屏幕显示菜单按钮 */
  }

  .navbar-links {
    display: none; /* 默认隐藏导航栏 */
    flex-direction: column;
    
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    
    padding: 10px 0;

  }

  .navbar-links.menu-open {
    display: flex; /* 打开菜单时显示导航栏 */
  }

  .navbar-item {
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
  }
}
</style>
