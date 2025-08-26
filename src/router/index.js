import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/Admin.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      meta: { layout: AdminLayout }
    },
  ],
})

export default router
