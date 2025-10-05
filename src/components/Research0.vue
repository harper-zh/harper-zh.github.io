<script setup>
import { ref, computed, onMounted } from "vue";
import { ResearchService0 } from '@/service/ResearchService0';
import Galleria from 'primevue/galleria';
onMounted(() => {
    ResearchService0.getImages().then((data) => (images.value = data));

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
                <p class="font-bold  text-lg">TIMBER-EARTH-SLAB:Robotic Assembly & Computational Tools</p>
                <span>(Research Intern at Professorship of Digital Fabrication, TU Munich)</span>
            </div>
            <div class="flex flex-col gap-4">
                <div>
                    <span class="font-bold">Supervisor</span>
                    <p>Prof. Kathrin Dörfler</p>
                    
                </div>
                <div>
                    <span class="font-bold">Research Focus</span>
                    <p>
                        This research explores timber-earth slabs (TES)—a hybrid structural system that combines the tensile strength of
timber with earth's superior thermal mass, thermal activation capabilities, fire resistance, and acoustic insulation.
The project focuses on developing computational design and robotic fabrication workflows for TES construction.
</p>
                </div>
                <div>
                    <span class="font-bold">Contributions</span>
                    <p>-Contributed to the parametric design of timber floor frameworks and the development of a structural
integration tool, enhancing structural integration and construction sequence visualization through Python
scripts.

<br />-Simulated robotic construction processes by modeling the building environment and visualizing robotic
motion and assembly process in Rhino, based on the COMPAS framework and ROS.<br />-Participated in on-site construction, completing robotic fabrication and validation of two timber floor slabs
(6m × 2m).</p>
                </div>
                <div><p>Collaborator: Janna Vollrath, Dominik Merk</p>
                    <p>Research Link:<a href="https://www.arc.ed.tum.de/en/df/research/timber-earth-slab-tes/" target="_blank" class="underline">https://www.arc.ed.tum.de/en/df/research/timber-earth-slab-tes/</a></p></div>
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