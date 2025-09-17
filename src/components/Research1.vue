<script setup>
import { ref, computed, onMounted } from "vue";
import { ResearchService1 } from '@/service/ResearchService1';
import Galleria from 'primevue/galleria';
onMounted(() => {
    ResearchService1.getImages().then((data) => (images.value = data));

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


<template>
    <div class="flex flex-col gap-12">


        <div class="flex flex-col gap-8">
            <div>
                <p class="font-bold  text-lg">Light Redistribution in 3D-Printed Thermoplastic Geometries: Automatic
                    Experiment and Machine Learning</p>
                <span>(Ongoing research, master thesis)</span>
            </div>
            <div class="flex flex-col gap-4">
                <div>
                    <span class="font-bold">Instructor</span>
                    <p>Prof. Hua Hao</p>
                </div>
                <div>
                    <span class="font-bold">Research Focus</span>
                    <p>
                        -To explore
                        automated experimrntal and data-driven approaches to investigate the light behavior of
                        3D-printed facades.<br />
                        -To create a
                        “3D-printed geometry vs light distribution” function from data points using machine learning
                        algorithms.</p>
                </div>
                <div>
                    <span class="font-bold">Methods</span>
                    <p>-Constructed a parametric model, and used a KUKA robot to print samples. <br />-Developed an
                        automated
                        optical
                        experiment system to collect extensive image data, generated luminance maps. <br />-Applied
                        machine learning algorithms to establish a mapping function between façade geometry and optical
                        performance, providing data support for façade optimization in architectural
                        design.<br />-Future steps
                        will
                        focus on luminance map processing and applying machine learning
                        algorithms
                        to model light redistribution.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <Galleria
            ref="galleria"
            v-model:activeIndex="activeIndex"
            :value="images"
            :numVisible="5"
            :showThumbnails="false"
            :showItemNavigators="true"
            :showItemNavigatorsOnHover="true"
            :circular="true"
            :transitionInterval="3000"
            :responsiveOptions="responsiveOptions"
            :pt="{
                
                
            }"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="max-height: 700px; display: block" />
            </template>
            
            <template #footer>
                <div class="flex items-stretch bg-surface-950">
                    
                    <span v-if="images" class="flex flex-col ml-3">
                        
                        <span class="font-bold">{{ images[activeIndex].title }}</span>
            
                    </span>
                    
                </div>
            </template>
        </Galleria>
    </div>
    </div>
</template>

<style></style>