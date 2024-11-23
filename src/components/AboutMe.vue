<script setup>

import 'primeicons/primeicons.css'

import { useRoute, useRouter } from 'vue-router';

import Card from 'primevue/card';
const router = useRouter();
import Divider from 'primevue/divider';
import { ref } from 'vue';
const cardContents = ref([
    {
        title:'-Researches and Projects',
        // content:'My research focuses on robotic fabrication and robotic control in architectural design and construction, with an interest in exploring more with human-robot collaboration.',
        command: () => router.push('/research')
        

    },
    {
        title:'-Design Works',
        // content:'My research focuses on robotic fabrication and robotic control in architectural design and construction, with an interest in exploring more with human-robot collaboration',
        command: () => router.push('/design')

    },
    {
        title:'-Development and Comics',
        // content:'My research focuses on robotic fabrication and robotic control in architectural design and construction, with an interest in exploring more with human-robot collaboration',
        command: () => router.push('/others')
    }
])
</script>
<template>
    

        <div class="card flex flex-row  justify-between mt-36">
            <img src="/images/avatar.jpg" alt="Image" class="size-1/3" />
            <div class="flex flex-col  justify-end item-end gap-10">
                <h1 class="text-4xl font-bold text-black text-right"> Zhang Yuan </h1>
                <div class=" flex flex-col justify-between  gap-10 text-right relative ">
                    <p class="pl-72"> I am currently a graduate student at
                        the 
                        <a href="https://archialgo.com/" class="underline">
                            
                                Institute of Architectural Algorithms and Applications, 
                            
                        </a>
                        Southeast University, China, where I also earned my Bachelor of Architecture (B.Arch).
                        <br />
                        My research interests include robotic fabrication, robotic control, and human-robot collaboration.
Beyond academics, I have a passion for creativity 💡 and a love for dogs 🐶.
                    </p>

                    <div class="h-px w-1/12 border-dashed border border-slate-700 flex absolute right-0 bottom-1/4">
                    </div>
                    <div class="flex flex-row gap-10 justify-end">
                        <div class="flex flex-row ">
                            <p class="font-bold">Contact:
                                <a href="mailto:zhang_yuan@seu.edu.cn">
                                    <i class="pi pi-envelope" style="font-size: 1rem"> </i>
                                </a>
                            </p>


                        </div>
                        <div class="flex flex-row">
                            <p class="font-bold">My Sketch Work:
                                <a
                                    href="https://www.xiaohongshu.com/user/profile/5fe15f78000000000101c1a9?xsec_token=&xsec_source=pc_note">
                                    <i class="pi pi-instagram" style="font-size: 1rem"> </i>
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
                <!-- <div class="flex flex-row justify-between gap-10">

<div class="shadow-none cursor-pointer hover:bg-slate-100 flex flex-col gap-2" v-for="item in cardContents" @click="item.command">
    <div class="font-bold text-xl">{{ item.title }}</div>
    <div class="text-[18px]">{{ item.content }}</div>

</div>

</div> -->
            </div>

            
        </div>

        






 
</template>
<style scoped>

</style>