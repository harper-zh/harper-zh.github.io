<script setup>

import { ref, onMounted } from "vue";
import { OtherService } from '@/service/OtherService';
import { ComicService } from '@/service/ComicService';

import Galleria from 'primevue/galleria';


onMounted(() => {
    OtherService.getImages().then((data) => (images.value = data));


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
<template>




    <div class="flex flex-col gap-20">
        <div class="flex flex-col gap-8">
            <div><p class="font-bold text-lg">Research Center for Digital Humanities of PKU 
            </p>
            
            <span>(Front-end Development Intern)</span></div>
            
            <div class="flex flex-col gap-2">


                <div>
                    <span class="font-bold">Contributions: </span>
                    <p>-Collaborated with a team via GitHub to develop an AI-powered epitaph information extraction platform
using Vue.js and TailwindCSS. Implemented four core features: Submitting forms to AI APIs. Dynamic
rendering with streaming responses. Displaying locally stored information. Responsive UI design.<br />
-Developed a poetry generation interface by integrating AI models through API calls with real-time result
display. Built a local history system with Pinia, improving user creativity and learning experience. </p>
                </div>
                <span>
                    <span class="font-bold">Website Link: </span>Waiting for online
                </span>
                <img src="/public/images/epitaph.jpg" alt="Image">

            </div>


        </div>

        <div class="flex flex-col gap-4">

            <p class="font-bold text-lg">Front-end Development for recruitment website
            </p>
            <div class="flex flex-col gap-2">
                <div>
                    
                    <span>Collaboratively developed a website tailored for managing employment
                        recruitment events
                        for faculty staff in School of
                        Architecture. Built a responsive information display and editing interface for the recruitment
                        event, comprising a total of four pages
                        based on UI prototypes.</span>
                </div>
                <div>
                    <p class="font-bold">Webiste Link: </p> <a href="https://www.seuarchjob.com/manage/"
                        class="underline">Digital
                        Employment Platform for Southeast University School of Architecture</a>
                    <img src="/public/images/jobweb.jpg" alt="Image">
                </div>


            </div>
        </div>

        <!-- <div class="flex flex-col gap-4">


            <div class="flex flex-col gap-2">


                <p class="font-bold text-lg">VR House Viewing App Prototype
                </p>
                <span>Prototyped an interactive VR Home Tour System for a real estate app.
                    The UI interaction encompasses
                    the design and optimization of all user interactions and visual elements leading up to
                    the
                    VR experience.</span><br />

                <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5"
                    :showItemNavigatorsOnHover="true" :showItemNavigators="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                            style="height: 100%; display: block" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                    </template>

                </Galleria>


            </div>
        </div> -->
    </div>

</template>