import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: () => import('@/view/home.vue')
  }
]
const routers = createRouter({
  history: createWebHashHistory(),
  routes
})
routers.beforeEach((to, from, next) => {
  next()
})
export default routers
