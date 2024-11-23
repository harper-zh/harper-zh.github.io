<!-- <script setup>

import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import { ref, onMounted } from "vue";
import { OtherService } from '@/service/OtherService';
import { ComicService } from '@/service/ComicService';

import Galleria from 'primevue/galleria';


onMounted(() => {
    OtherService.getImages().then((data) => (images.value = data));
    ComicService.getImages().then((data) => (comicImages.value = data))

});

const images = ref();
const comicImages = ref()
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>
<template>
    <div class="my-10 flex flex-row ">
        <div class="size-1/4 pr-28 ">
            <div class="h-px w-1/6 border-dashed border border-slate-700">
            </div>
            <p class="mt-3">I am also deeply passionate about and explored other creative and technology fields. Here, you will find a showcase of my work in front-end development and comics.</p></div>
        <div class="card size-2/3">
           

            

        </div>

    </div>
</template>
<style>
.p-accordionheader {
    color: black !important;
}
</style> -->


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
  <div class="flex flex-row mt-20 ">
    <!-- 左侧研究列表 -->
    <div class="size-1/4 flex flex-col pr-12 gap-12">
        <p >I am also deeply passionate about and explored other creative and technology fields. Here, you will find a showcase of my work in front-end development and comics.</p>
        <div class="h-px w-1/6 border-dashed border border-slate-700">
        </div>
        <div 
        v-for="(item, index) in contents" 
        :key="index" 
        class="flex flex-col cursor-pointer  mb-8"
        @click="selectedIndex = index"
      >
      <span 
          class="text-left font-bold text-lg" 
          :class="selectedIndex === index ? 'text-black' : 'text-gray-300'"
        >
          {{ item.title }}
        </span>
    
        
      </div>
    </div>

    <!-- 右侧研究内容 -->
    <div class="size-3/4 border-l border-gray-300 pl-6">
      <component :is="contents[selectedIndex].component" />
    </div>
  </div>
</template>