import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sites from '../views/Sites.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sites',
    name: 'Sites',
    component: Sites
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
