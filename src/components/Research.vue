<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const contents = [
  {
    theme: 'Material Performance',
    title: 'Light Redistribution in 3D-Printed Thermoplastic Facades',
    description: 'Automated robotic experiments + machine learning to predict optical behaviour from geometry parameters.',
    src: '/images/re10.JPG',
  },
  {
    theme: 'Robotic Fabrication',
    title: 'Timber-Earth Slab: Robotic Assembly & Computational Tools',
    description: 'Parametric structural integration and robotic construction simulation for hybrid timber-earth floor systems.',
    src: '/images/re08.jpg',
  },
  {
    theme: 'Robotic Fabrication',
    title: '3D-Printed Urban Furniture',
    description: 'Path planning and on-site robotic fabrication of 15 large-scale concrete furniture pieces.',
    src: '/images/re2.png',
  },

]

const themeColors = {
  'Material Performance': 'bg-stone-100 text-stone-600',
  'Robotic Fabrication': 'bg-zinc-100 text-zinc-600',
  'Computational Design': 'bg-neutral-100 text-neutral-600',
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    <div
      v-for="(item, index) in contents"
      :key="index"
      class="flex flex-col cursor-pointer group border border-gray-100 hover:border-gray-300 transition-all duration-200"
      @click="router.push(`/research/${index}`)"
    >
      <div class="overflow-hidden aspect-video bg-gray-50 rounded-lg">
        <img
          :src="item.src"
          :alt="item.title"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div class="flex flex-col gap-2 p-4">
        <span class="text-xs font-medium px-2 py-1 rounded-full w-fit" :class="themeColors[item.theme]">
          {{ item.theme }}
        </span>
        <p class="font-bold text-sm leading-snug">{{ item.title }}</p>
        <p class="text-gray-500 text-sm">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
