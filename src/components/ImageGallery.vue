<script setup>
import { ref, onUnmounted } from 'vue'
import Galleria from 'primevue/galleria'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const activeIndex = ref(0)
const galleryVisible = ref(false)

const onKeydown = (e) => {
  if (e.key === 'ArrowRight') activeIndex.value = (activeIndex.value + 1) % props.images.length
  else if (e.key === 'ArrowLeft') activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
  else if (e.key === 'Escape') galleryVisible.value = false
}

const openGallery = (index) => {
  activeIndex.value = index
  galleryVisible.value = true
  window.addEventListener('keydown', onKeydown)
}

const closeGallery = () => {
  galleryVisible.value = false
  window.removeEventListener('keydown', onKeydown)
}

onUnmounted(() => window.removeEventListener('keydown', onKeydown))

const responsiveOptions = [
  { breakpoint: '1300px', numVisible: 4 },
  { breakpoint: '575px', numVisible: 1 },
]

const pt = {
  previousItemButton: { style: 'left: -4rem; background: transparent; color: #000;' },
  nextItemButton: { style: 'right: -4rem; background: transparent; color: #000;' },
  itemContainer: { style: 'width: 80vw; margin: 0 auto;' },
}
</script>

<template>
  <div>
    <!-- 瀑布流缩略图 -->
    <div class="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
      <div
        v-for="(img, idx) in images"
        :key="idx"
        class="mb-4 break-inside-avoid rounded overflow-hidden cursor-pointer group"
        @click="openGallery(idx)"
      >
        <img
          :src="img.itemImageSrc"
          :alt="img.title || ''"
          class="w-full h-auto transition-opacity duration-200 group-hover:opacity-80"
          loading="lazy"
        />
      </div>
    </div>

    <!-- 全屏 Galleria -->
    <Galleria
      v-model:activeIndex="activeIndex"
      v-model:visible="galleryVisible"
      @update:visible="(v) => { if (!v) closeGallery() }"
      :value="images"
      :fullScreen="true"
      :numVisible="5"
      :showThumbnails="false"
      :showItemNavigators="true"
      :showItemNavigatorsOnHover="true"
      :circular="true"
      :responsiveOptions="responsiveOptions"
      :pt="{
    previousItemButton: { 
        style: 'left: -4rem; background: transparent; color: #000;' 
    },
    nextItemButton: { 
        style: 'right: -4rem; background: transparent; color: #000;' 
    },
    itemContainer: {
        style: 'width: 80vw; margin: 0 auto;'
    }
}"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="max-height: 90vh; display: block"
        />
      </template>
      <template #footer>
        <div class="flex items-center bg-black/80 px-4 py-2">
          <span class="text-white font-bold text-sm">{{ images[activeIndex]?.title }}</span>
        </div>
      </template>
    </Galleria>
  </div>
</template>
