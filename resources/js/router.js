import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('./pages/Get.vue'),
    name: 'get.index'
  },
  {
    path: '/login',
    component: () => import('./pages/Login.vue'),
    name: 'login'
  },
  {
    path: '/registration',
    component: () => import('./pages/Registr.vue'),
    name: 'registr'
  },
];

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;