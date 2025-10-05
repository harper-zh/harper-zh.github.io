
<script setup>
import { ref } from 'vue';
import Divider from 'primevue/divider';
import Research1 from './Research1.vue';
import Research2 from './Research2.vue';
import Research3 from './Research3.vue';
import Research0 from './Research0.vue';

const contents = [{
    title: 'LIGHT REDISTRIBUTION IN 3DPTFS',
    src: '/images/re1.png',
    component: Research1,
  },
  {
    title: 'TIMBER-EARTH-SLAB',
    src: '/images/re0.png',
    component: Research0,
  },
  
  {
    title: '3D-PRINTED URBAN FURNITURE',
    src: '/images/re2.png',
    component: Research2,
  },
  {
    title: 'CONCRETE DIGITAL FABRICATION',
    src: '/images/re3.png',
    component: Research3,
  },
];

const selectedIndex = ref(0); // 默认选择第一个研究
</script>
<template>
  <div class="flex flex-row mt-auto ">
    <!-- 左侧研究列表 -->
    <div class="size-1/12 flex flex-col">
      <div 
        v-for="(item, index) in contents" 
        :key="index" 
        class="flex flex-col cursor-pointer items-center"
        @click="selectedIndex = index"
      >
      <span 
          class="font-bold text-justify" 
          :class="selectedIndex === index ? 'text-black' : 'text-gray-300'"
        >
          {{ item.title }}
        </span>
        <Divider />
        <!-- <img :src="item.src" class="rounded-lg w-full h-auto"> -->
        
      </div>
    </div>

    <!-- 右侧研究内容 -->
    <div class=" border-l border-gray-300 pl-6 ml-12">
      <component :is="contents[selectedIndex].component" />
    </div>
  </div>
</template>
