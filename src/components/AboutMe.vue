<script setup>

import 'primeicons/primeicons.css'

import { useRoute, useRouter } from 'vue-router';

import Card from 'primevue/card';
const router = useRouter();
import Divider from 'primevue/divider';
import { ref } from 'vue';
// const cardContents = ref([
//     {
//         title: '-Researches and Projects',
//         // content:'My research focuses on robotic fabrication and robotic control in architectural design and construction, with an interest in exploring more with human-robot collaboration.',
//         command: () => router.push('/research')


//     },
//     {
//         title: '-Design Works',
//         // content:'My research focuses on robotic fabrication and robotic control in architectural design and construction, with an interest in exploring more with human-robot collaboration',
//         command: () => router.push('/design')

//     },
//     {
//         title: '-Development and Comics',
//         // content:'My research focuses on robotic fabrication and robotic control in architectural design and construction, with an interest in exploring more with human-robot collaboration',
//         command: () => router.push('/others')
//     }
// ])
</script>
<template>

    <div class="aboutme-root">
    <div class="row-view">
        <div class="flex flex-row justify-center items-end h-[50vh]">

            <img src="/images/avatar.jpg" alt="Image" class="w-1/4 h-auto" />

            <div class="flex flex-col justify-end item-end gap-10 ml-80">
                <h1 class="text-4xl font-bold text-black text-right">Yuan Zhang</h1>
                <div class=" flex flex-col justify-between  gap-10 text-justify ">
                    <p> I am currently a graduate student at the
                        <a href="https://archialgo.com/" class="underline">

                            Lab of Architectural Algorithms and Applications,

                        </a>
                        Southeast University, China, a lab with a 40-year relationship with ETH Zurich. I also earned my
                        B.Arch from Southeast University.
                        <br />
                        
                        My research focuses on robotic fabrication, computational tools & systems development.
                        Beyond architecture, drawing
                        comics and skteches is my creative outlet.
                        I'm eager to continue exploring interdisciplinary fields and bridging the gap between creativity
                        and technology.

                        <br />
                    </p>


                    <div class="flex flex-row gap-10 justify-end">
                        <div class="flex flex-row ">
                            <p class="font-bold">Contact:
                                <a href="mailto:31415926harper@gmail.com">
                                    <i class="pi pi-envelope" style="font-size: 1rem"> </i>
                                </a>
                            </p>


                        </div>
                        <div class="flex flex-row">
                            <p class="font-bold">My Artwork Account:
                                <a
                                    href="https://www.xiaohongshu.com/user/profile/5fe15f78000000000101c1a9?xsec_token=&xsec_source=pc_note" target="_blank">
                                    <i class="pi pi-instagram" style="font-size: 1rem"> </i>
                                </a>
                            </p>
                        </div>
                    </div>

                </div>

            </div>


        </div>

    </div>

    <div class="column-view hidden">
        <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-4 justify-between items-start">

                <img src="/images/avatar.jpg" alt="Image" class="w-full h-auto" />

            </div>


            <div class=" flex flex-col justify-between  gap-10 text-justify ">
                <div>
                    <h1 class="text-2xl font-bold text-black ">Yuan Zhang</h1>
                    <p> I am currently a graduate student at the
                        <a href="https://archialgo.com/" class="underline">

                            Lab of Architectural Algorithms and Applications,

                        </a>
                        Southeast University, China, a lab with a 40-year relationship with ETH Zurich. I also earned my
                        B.Arch from Southeast University.
                        <br />
                        My research focuses on robotic fabrication, computational tools & systems development.
                        Beyond architecture, drawing
                        comics and skteches is my creative outlet.
                        I'm eager to continue exploring interdisciplinary fields and bridging the gap between creativity
                        and technology.

                        <br />
                    </p>
                </div>

                <div class="flex flex-col gap-4 ">
                    <div class="flex flex-row ">
                        <p class="font-bold">Contact:
                            <a href="mailto:31415926harper@gmail">
                                <i class="pi pi-envelope" style="font-size: 1rem"> </i>
                            </a>
                        </p>


                    </div>
                    <div class="flex flex-row">
                        <p class="font-bold">My Artwork Account:
                            <a
                                href="https://www.xiaohongshu.com/user/profile/5fe15f78000000000101c1a9?xsec_token=&xsec_source=pc_note" target="_blank">
                                <i class="pi pi-instagram" style="font-size: 1rem"> </i>
                            </a>
                        </p>
                    </div>
                </div>

            </div>

        </div>


    </div>
    </div>
</template>
<style scoped>
@media (max-width: 1080px) {
    .row-view {
        display: none;
        
    }

    .column-view {
        display: block
    }
}
</style>