import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: () => import('../views/Page1About.vue')
    },
    {
      path: '/catalog',
      component: () => import('../views/Page2Catalog.vue')
    },
    {
      path: '/clients',
      component: () => import('../views/Page3Map.vue')
    },
    {
      path: '/partners',
      component: () => import('../views/Page4Partners.vue')
    },
    {
      path: '/garanty',
      component: () => import('../views/Page5Garanty.vue')
    },
    {
      path: '/library',
      component: () => import('../views/Page6Library.vue')
    },
    {
      path: '/contacts',
      component: () => import('../views/Page7Contacts.vue')
    },
    {
      path: '/catalog/:id',
      component: () => import('../views/ProductPage.vue')
    },

  ]
})

export default router
