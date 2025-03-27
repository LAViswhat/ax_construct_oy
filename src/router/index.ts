import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Terms from '@/views/Terms.vue'
import Privacy from '@/views/Privacy.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/terms', component: Terms },
  { path: '/privacy-policy', component: Privacy },
  { path: '/:pathMatch(.*)*', component: NotFound }, // 404
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' })
      }, 300)
    })
  },
})

export default router
