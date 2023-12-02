import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/CarouselView',
      name: 'CarouselView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CarouselView.vue')
    },
    {
      path: '/ListView',
      component: () => import('@/views/ListView.vue')
    },
    {
      path: '/FileUploadView',
      component: () => import('@/views/FileUploadView.vue')
    },
    {
      path: '/DownloadView',
      component: () => import('@/views/DownloadView.vue')
    },
    {
      path: '/DialogView',
      component: () => import('@/views/DialogView.vue')
    }
  ]
})

export default router
