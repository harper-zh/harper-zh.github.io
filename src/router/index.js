import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '@/components/AboutMe.vue'
import Research from '@/components/Research.vue'
import ResearchDetail from '@/components/ResearchDetail.vue'
import Dev from '@/components/Dev.vue'
import Others from '@/components/Others.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'about', component: AboutMe },
    { path: '/research', name: 'research', component: Research },
    { path: '/research/:id', name: 'research-detail', component: ResearchDetail },
    { path: '/dev', name: 'dev', component: Dev },

  ],
})

export default router
