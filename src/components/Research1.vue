<script setup>
import { ref, onMounted } from 'vue'
import { ResearchService1 } from '@/service/ResearchService1'
import ImageGallery from './ImageGallery.vue'

const images = ref([])
onMounted(() => ResearchService1.getImages().then(data => images.value = data))
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex flex-col gap-8">
      <div>
        <p class="font-bold text-lg">LIGHT REDISTRIBUTION IN 3D-PRINTED THERMOPLASTIC GEOMETRIES: Automatic Experiment and Machine Learning</p>
        <span>(Ongoing Research, Master Thesis)</span>
      </div>
      <div class="flex flex-col gap-4">
        <div>
          <span class="font-bold">Supervisor</span>
          <p>Prof. Hua Hao</p>
        </div>
        <div>
          <span class="font-bold">Research Focus</span>
          <p>3D-printed thermoplastic facades can redistribute daylight in complex, geometry and angle-dependent ways, but without a systematic understanding of this relationship, designers have no way to intentionally control it.<br />This research builds that understanding. I developed an automated robotic experiment platform to collect HDR luminance data across a range of printed geometries, then applied machine learning to establish predictive relationships between printing parameters and optical behaviour.</p>
        </div>
        <div>
          <span class="font-bold">Methods</span>
          <p>-Constructed a parametric model, and used a KUKA robot to print samples.<br />-Developed an automated optical experiment system to collect extensive image data, generated luminance maps.<br />-Developed a data processing pipeline and applied machine learning to establish predictive relationships between geometric parameters and lighting performance.</p>
        </div>
        <div>
          <span class="font-bold">Publications</span>
          <p><a href="https://conf.dap.tuwien.ac.at/preprints/ecaade2025/ecaade2025_412.pdf" target="_blank" class="underline">https://conf.dap.tuwien.ac.at/preprints/ecaade2025/ecaade2025_412.pdf</a></p>
        </div>
      </div>
    </div>
    <ImageGallery v-if="images.length" :images="images" />
  </div>
</template>
