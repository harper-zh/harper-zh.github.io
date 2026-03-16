<script setup>
import { ref, onMounted } from 'vue'
import { ResearchService0 } from '@/service/ResearchService0'
import ImageGallery from './ImageGallery.vue'

const images = ref([])
onMounted(() => ResearchService0.getImages().then(data => images.value = data))
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex flex-col gap-8">
      <div>
        <p class="font-bold text-lg">TIMBER-EARTH-SLAB: Robotic Assembly & Computational Tools</p>
        <span>(Research Intern at Professorship of Digital Fabrication, TU Munich)</span>
      </div>
      <div class="flex flex-col gap-4">
        <div>
          <span class="font-bold">Supervisor</span>
          <p>Prof. Kathrin Dörfler</p>
        </div>
        <div>
          <span class="font-bold">Research Focus</span>
          <p>This research explores timber-earth slabs (TES)—a hybrid structural system that combines the tensile strength of timber with earth's superior thermal mass, thermal activation capabilities, fire resistance, and acoustic insulation. The project focuses on developing computational design and robotic fabrication workflows for TES construction.</p>
        </div>
        <div>
          <span class="font-bold">Contributions</span>
          <p>-Contributed to the parametric design of timber floor frameworks and the development of a structural integration tool, enhancing structural integration and construction sequence visualization through Python scripts.<br />-Simulated robotic construction processes by modeling the building environment and visualizing robotic motion and assembly process in Rhino, based on the COMPAS framework and ROS.<br />-Participated in on-site construction, completing robotic fabrication and validation of two timber floor slabs (6m × 2m).</p>
        </div>
        <div>
          <p>Collaborator: Janna Vollrath, Dominik Merk</p>
          <p>Research Link: <a href="https://www.arc.ed.tum.de/en/df/research/timber-earth-slab-tes/" target="_blank" class="underline">https://www.arc.ed.tum.de/en/df/research/timber-earth-slab-tes/</a></p>
        </div>
      </div>
    </div>
    <ImageGallery v-if="images.length" :images="images" />
  </div>
</template>
