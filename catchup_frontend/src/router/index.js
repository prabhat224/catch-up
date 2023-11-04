import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/loginView.vue'
import signupView from '../views/signupView.vue'
import logoutView from '../views/logoutView.vue'
import homeView from '../views/homeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path:'/signup',
      name:'signup',
      component:signupView
    },
    {
      path:'/logout',
      name:'logout',
      component:logoutView
    },
    {
      path:'/',
      name:'home',
      component:homeView
    }
  ]
})

export default router
