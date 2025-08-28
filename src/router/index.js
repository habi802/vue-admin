import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/Admin.vue'
import EmptyLayout from '@/layouts/Empty.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import User from '@/views/User.vue'
import Review from '@/views/Review.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { layout: EmptyLayout }
    },
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      meta: { layout: AdminLayout }
    },
    {
      path: "/user",
      name: "user",
      component: User,
      meta: { layout: AdminLayout }
    },
    {
      path: "/review",
      name: "review",
      component: Review,
      meta: { layout: AdminLayout }
    },
  ],
})

export default router
