<!-- <template>
    <div class="card">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :showItemNavigatorsOnHover="true" :showItemNavigators="true" >
            <template #item="slotProps"> 
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="height: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
            <template #caption="slotProps">
                <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
                <p class="text-white">{{ slotProps.item.alt }}</p>
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

import Galleria from 'primevue/galleria';


onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
    console.log(PhotoService)
});

const images = ref();
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
</script> -->



<template>
    <div class="card">
        <Galleria
            ref="galleria"
            v-model:activeIndex="activeIndex"
            :value="images"
            :numVisible="5"
            :showThumbnails="true"
            :showItemNavigators="true"
            :showItemNavigatorsOnHover="true"
            :circular="true"
            :transitionInterval="3000"
            :responsiveOptions="responsiveOptions"
            :pt="{
                
                
            }"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="height: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid gap-4 justify-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </div>
            </template>
            <template #footer>
                <div class="flex items-stretch bg-surface-950">
                    
                    <span v-if="images" class="flex flex-col ml-3">
                        
                        <span class="font-bold">{{ images[activeIndex].title }}</span>
                        <span >{{ images[activeIndex].concept }}</span>
                        <span >{{ images[activeIndex].area }}</span>
                        <span >{{ images[activeIndex].year }}</span>
                        <span >{{ images[activeIndex].teacher }}</span>
                        <span >{{ images[activeIndex].collaboration }}</span>
                    </span>
                    
                </div>
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';
import Galleria from 'primevue/galleria';
onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));

});

const galleria = ref();
const images = ref();
const activeIndex = ref(0);







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

