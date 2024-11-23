import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '@/components/AboutMe.vue'
import Reseach from '@/components/Reseach.vue'
import Design from '@/components/Design.vue'
import Others from '@/components/Others.vue'
import Research1 from '@/components/Research1.vue'
import Research2 from '@/components/Research2.vue'
import Research3 from '@/components/Research3.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutMe,
    },
    {
      path: '/research',
      name: 'research',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Reseach,
      
    },
    {
      path: '/design',
      name: 'design',
      component: Design,
      
    },
    {
      path: '/others',
      name: 'others',
      component: Others,
      
    }
  ],
})

export default router
