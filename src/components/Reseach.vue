
<script setup>
import { ref } from 'vue';
import Research1 from './Research1.vue';
import Research2 from './Research2.vue';
import Research3 from './Research3.vue';

const contents = [
  {
    title: 'Light Redistribution in 3D-Printed Thermoplastic Geometries',
    src: '/images/re1.png',
    component: Research1,
  },
  {
    title: 'Large-Scale 3D Printing for Urban Furniture at Historical Sites',
    src: '/images/re2.png',
    component: Research2,
  },
  {
    title: 'Design and Fabrication of The Interactive BaiMaofang Sculpture',
    src: '/images/re3.png',
    component: Research3,
  },
];

const selectedIndex = ref(0); // 默认选择第一个研究
</script>
<template>
  <div class="flex flex-row mt-20 ">
    <!-- 左侧研究列表 -->
    <div class="size-1/4 flex flex-col pr-36">
      <div 
        v-for="(item, index) in contents" 
        :key="index" 
        class="flex flex-col cursor-pointer items-center mb-8"
        @click="selectedIndex = index"
      >
      <span 
          class=" text-center font-bold text-lg" 
          :class="selectedIndex === index ? 'text-black' : 'text-gray-300'"
        >
          {{ item.title }}
        </span>
        <img :src="item.src" class="rounded-lg w-full h-auto">
        
      </div>
    </div>

    <!-- 右侧研究内容 -->
    <div class="size-3/4 border-l border-gray-300 pl-6">
      <component :is="contents[selectedIndex].component" />
    </div>
  </div>
</template>
