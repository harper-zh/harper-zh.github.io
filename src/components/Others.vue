

<script setup>
import { ref } from 'vue';
import Dev from './Dev.vue';
import Comic from './Comic.vue';


const contents = [
  {
    title: 'Front-end Development and Design',

    component: Dev,
  },
  {
    title: 'Illustrations and Comics',

    component: Comic,
  },
  
];

const selectedIndex = ref(0); // 默认选择第一个
</script>
<template>
  <div class="flex flex-row mt-auto ">
    <!-- 左侧研究列表 -->
    <div class="size-1/12 flex flex-col ">
        
        
        <div 
        v-for="(item, index) in contents" 
        :key="index" 
        class="flex flex-col cursor-pointer  mb-8"
        @click="selectedIndex = index"
      >
      <span 
          class="font-bold text-justify" 
          :class="selectedIndex === index ? 'text-black' : 'text-gray-300'"
        >
          {{ item.title }}
        </span>
    
        
      </div>
    </div>

    <!-- 右侧研究内容 -->
    <div class="border-l border-gray-300 pl-6 ml-12">
      <component :is="contents[selectedIndex].component" />
    </div>
  </div>
</template>