<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Research0 from './Research0.vue'
import Research1 from './Research1.vue'
import Research2 from './Research2.vue'
import Research3 from './Research3.vue'

const components = [Research1, Research0, Research2]
const titles = [
  'Light Redistribution in 3D-Printed Thermoplastic Facades',
  'Timber-Earth Slab: Robotic Assembly & Computational Tools',
  '3D-Printed Urban Furniture',
  'Baimaofang: Concrete Digital Fabrication',
]

const route = useRoute()
const router = useRouter()

const id = computed(() => parseInt(route.params.id))
const current = computed(() => components[id.value])
const hasPrev = computed(() => id.value > 0)
const hasNext = computed(() => id.value < components.length - 1)

const go = (delta) => router.push(`/research/${id.value + delta}`)
</script>

<template>
  <div class="detail-layout">
    <!-- 左箭头 -->
    <button
      class="nav-arrow left"
      :class="{ invisible: !hasPrev }"
      @click="go(-1)"
      aria-label="Previous"
    >
      <span class="nav-arrow-icon">‹</span>
      <span class="nav-arrow-label">Previous Research</span>
    </button>

    <!-- 内容区 -->
    <div class="detail-content">
      <div class="detail-header">
        <button class="back-btn" @click="router.push('/research')">← Research</button>
        <span class="detail-counter">{{ id + 1 }} / {{ components.length }}</span>
      </div>
      <component :is="current" />
    </div>

    <!-- 右箭头 -->
    <button
      class="nav-arrow right"
      :class="{ invisible: !hasNext }"
      @click="go(1)"
      aria-label="Next"
    >
      <span class="nav-arrow-icon">›</span>
      <span class="nav-arrow-label">Next Research</span>
    </button>
  </div>
</template>

<style scoped>
.detail-layout {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0;
  width: 100%;
}

.detail-content {
  flex: 1;
  min-width: 0;
  width: 100%;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.back-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: #555;
  padding: 0;
}

.back-btn:hover {
  color: #000;
}

.detail-counter {
  font-size: 0.85rem;
  color: #999;
}

.nav-arrow {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  width: 2rem;
  min-width: 2rem;
  padding: 0;
  cursor: pointer;
  color: #555;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  transition: color 0.2s;
  z-index: 20;
}

.nav-arrow.left {
  left: 1rem;
}

.nav-arrow.right {
  right: 1rem;
}

.nav-arrow:hover {
  color: #000;
}

.nav-arrow-icon {
  font-size: 1.9rem;
  line-height: 1;
}

.nav-arrow-label {
  font-size: 0.68rem;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-2px);
  transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
}

.nav-arrow:hover .nav-arrow-label {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.invisible {
  visibility: hidden;
  pointer-events: none;
}

@media (max-width: 1024px) {
  .nav-arrow {
    width: 1.8rem;
    min-width: 1.8rem;
  }

  .nav-arrow-icon {
    font-size: 1.5rem;
  }
}

@media (max-width: 720px) {
  .detail-header {
    margin-bottom: 1.2rem;
  }

  .nav-arrow {
    width: 1.6rem;
    min-width: 1.6rem;
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    background: color-mix(in srgb, var(--color-background) 88%, transparent);
    border-radius: 999px;
  }

  .nav-arrow.left {
    left: 0.45rem;
  }

  .nav-arrow.right {
    right: 0.45rem;
  }

  .nav-arrow-icon {
    font-size: 1.28rem;
  }

  .nav-arrow-label {
    display: none;
  }
}
</style>
