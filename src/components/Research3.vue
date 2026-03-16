<script setup>
import ImageGallery from './ImageGallery.vue'

const images = [
  { itemImageSrc: '/images/re31.jpg', title: 'Baimaofang — Overview' },
  { itemImageSrc: '/images/re32.jpg', title: 'Baimaofang — Detail' },
  { itemImageSrc: '/images/re33.jpg', title: 'Baimaofang — Fabrication' },
  { itemImageSrc: '/images/re34.jpg', title: 'Baimaofang — Installation' },
]
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex flex-col gap-8">
      <div>
        <p class="font-bold text-lg">BAIMAOFANG: Interactive Concrete Sculpture</p>
      </div>
      <div class="flex flex-col gap-4">
        <div>
          <span class="font-bold">Supervisor</span>
          <p>Prof. Li Li</p>
        </div>
        <div>
          <span class="font-bold">Research Focus</span>
          <p>Researched interaction methods and digital fabrication techniques for a freeform interactive sculpture located by the river.</p>
        </div>
        <div>
          <span class="font-bold">Contributions</span>
          <p>Optimized freeform surfaces into ruled surfaces for fabrication, designed concrete-to-metal connections, customized robotic hot wire cutting for formwork, and conducted concrete casting test with foam molds.</p>
        </div>
        <div>
          <p>Collaboration: Xie Han.</p>
        </div>
      </div>
    </div>
    <ImageGallery :images="images" />
  </div>
</template>
