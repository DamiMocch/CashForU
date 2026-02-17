import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home/sections/Hero.vue') // Temporary placeholder
    },
    {
      path: '/empresas',
      name: 'empresas',
      component: () => import('../pages/empresas/index.vue')
    },
    {
      path: '/factoraje',
      name: 'factoraje',
      component: () => import('../pages/factoraje/index.vue')
    },
    {
      path: '/contactanos',
      name: 'contactanos',
      component: () => import('../pages/contactanos/sections/Hero.vue') // Temporary placeholder
    }
  ],
})

export default router
