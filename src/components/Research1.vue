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
const galleryVisible = ref(false);
const openGallery = (index) => {
    activeIndex.value = index;
    galleryVisible.value = true;
};
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
                <p class="font-bold  text-lg">LIGHT REDISTRIBUTION IN 3D-PRINTED
THERMOPLASTIC GEOMETRIES:
Automatic Experiment and Machine Learning</p>
                <span>(Ongoing Research, Master Thesis)</span>
            </div>
            <div class="flex flex-col gap-4">
                <div>
                    <span class="font-bold">Supervisor</span>
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
                        experiment system to collect extensive image data, generated luminance maps. <br />-Developed a data processing pipline and applied machine learning algorithms to establish a mapping
function between façade geometry and light distribution, resulting in a predictive model for light
redistribution for any given geometry.</p>
                </div>
                <div>
                    <span class="font-bold">Publications</span>
                    <p><a href="https://conf.dap.tuwien.ac.at/preprints/ecaade2025/ecaade2025_412.pdf" target="_blank" class="underline">https://conf.dap.tuwien.ac.at/preprints/ecaade2025/ecaade2025_412.pdf</a></p>
                </div>
            </div>
        </div>
        <div v-if="images" class="mb-4">
            <div class="columns-2 md:columns-3 lg:columns-3 gap-4 [column-fill:_balance]">
                <div
                    v-for="(img, idx) in images"
                    :key="idx"
                    class="mb-4 break-inside-avoid rounded overflow-hidden cursor-pointer group"
                    @click="openGallery(idx)"
                >
                    <img
                        :src="img.itemImageSrc"
                        :alt="img.title || 'image'"
                        class="w-full h-auto transition-opacity duration-200 group-hover:opacity-90"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
        <div class="card">
            <Galleria
            ref="galleria"
            v-model:activeIndex="activeIndex"
            :value="images"
            v-model:visible="galleryVisible"
            :fullScreen="true"
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
            <template #header>
                <!-- <div class="w-full flex justify-end p-2">
                    <button
                        class="px-3 py-1 rounded bg-surface-800 text-white hover:bg-surface-700"
                        @click="galleryVisible = false"
                        aria-label="Close gallery"
                    >
                        Close
                    </button>
                </div> -->
            </template>
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