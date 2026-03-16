<script setup>
const projects = [
    {
        title: 'VITAMIN – Female-Centric AI Fortune Telling Application',
        org: ' Product Engineer',
        description: "Traditional fortune-telling systems were built on frameworks that encode gender bias — prescribing how women should behave, who they should become. We wanted to challenge that. VITAMIN reimagines the Bazi system not as a set of rules, but as a lens for self-understanding — helping women reframe their own narratives, recognize their strengths, and approach life with intention. I handled the full technical implementation: LLM integration, prompt engineering to shape a voice that feels empowering rather than prescriptive, front-end development, and deployment. Every interaction detail was carefully considered — from how responses are phrased to how they arrive on screen.",
        link: "https://vita-me.vercel.app/",
        linkLabel: "Visit: vita-me.vercel.app/",
        image: '/images/VITAME.png',
    },
    {
        title: 'AI Epitaph Information Extraction Platform',
        org: ' Front-end Intern | Research Center for Digital Humanities, Peking University',
        description: 'Scholars working with historical texts face an enormous manual burden — reading through thousands of epitaphs, extracting structured information by hand. A research initiative at the Research Center for Digital Humanities, Peking University set out to change that.We built an LLM-powered platform that transforms this process: upload a document, extract structured biographical and historical information automatically, and save results locally — turning hours of manual work into minutes. I collaborated on the full front-end implementation using Vue.js and TailwindCSS, including file upload flow, streaming AI response rendering, local data management with Pinia, and a poetry generation interface built on the same pipeline.',
        link: null,
        linkLabel: null,
        image: '/images/epitaph.jpg',
    },
    {
        title: 'Digital Employment Platform',
        org: 'School of Architecture, Southeast University ',
        description: "Recruiting the right faculty involves coordinating dozens of presentation events across institutions — scheduling, information updates, and public-facing displays all happening at once. We built a management platform for Southeast University's School of Architecture to handle exactly this. I developed the presentation event module end-to-end: an event listing page, individual event detail views, and an editing and upload interface for administrators. Built to real UI prototypes, delivered for actual use.",
        link: 'https://www.seuarchjob.com/manage/',
        linkLabel: 'Visit: seuarchjob.com',
        image: '/images/jobweb.jpg',
    },
]
</script>

<template>
    <div class="flex flex-col divide-y divide-gray-100 mt-8">
        <div v-for="(project, i) in projects" :key="i" class="flex flex-col md:flex-row gap-[5vw] py-10">
            <!-- 左侧图片 -->
            <div class="w-full md:w-[35%] lg:w-[40%] flex-shrink-0">
                <img :src="project.image" :alt="project.title" class="w-full object-cover rounded" />
            </div>

            <!-- 右侧文字 -->
            <div class="flex flex-col gap-3 justify-center md:items-end">
                <p class="font-bold text-base">{{ project.title }}</p>
                <p class="text-sm text-gray-500">{{ project.org }}</p>
                <p class="text-sm text-gray-700 leading-relaxed md:text-end">{{ project.description }}</p>
                <a v-if="project.link" :href="project.link" target="_blank"
                    class="text-sm underline text-gray-500 hover:text-black w-fit">
                    {{ project.linkLabel }}
                </a>

            </div>
        </div>
    </div>
</template>
