<template>
    <div class="card my-10">
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
</script>
