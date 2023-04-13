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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (!token) {
    if (to.name === 'login' || to.name === 'registr') {
      return next();
    } else {
      return next({ name: 'login' })
    }
  }

  if ((to.name === 'login' || to.name === 'registr') && token) {
    return next({ name: 'get.index' })
  }

  next();
})

export default router;