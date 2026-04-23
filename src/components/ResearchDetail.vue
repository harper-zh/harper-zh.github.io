<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Research0 from './Research0.vue'
import Research1 from './Research1.vue'
import Research2 from './Research2.vue'
import Research3 from './Research3.vue'

const components = [Research1, Research0, Research2, Research3]
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
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
}

.detail-content {
  flex: 1;
  min-width: 0;
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
  flex-shrink: 0;
  position: sticky;
  top: 50vh;
  background: none;
  border: none;
  min-width: 4.5rem;
  padding: 0;
  cursor: pointer;
  color: #555;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  transition: color 0.2s;
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
</style>
