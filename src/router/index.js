import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/stage'
  },
  {
    path: '/stage',
    name: 'home',
    component: () => import('@/views/Home.vue')
  }

  // {
  //   path: '*',
  //   name: '404',
  //   component: () => import('@/views/404')
  // }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
