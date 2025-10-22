import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import TeamView from '@/views/TeamView.vue'
import MyView from '@/views/MyView.vue'
import UserUpdateView from '@/views/UserUpdateView.vue'
import MyDetailView from '@/views/MyDetailView.vue'
import LoginView from '@/views/LoginView.vue'
import { ref } from 'vue'
import useUserStore from '@/stores/useUserStore.ts'
const FIRST_ENTER=ref(true)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path:'/teams',
      name: 'teams',
      component:TeamView
    },
    {
      path:'/my',
      name: 'my',
      redirect:'/my/detail',
      component:MyView,
      children:[
        {
          path:'detail',
          name: 'myDetail',
          component:MyDetailView,
        },
        {
          path:'edit/:id',
          name: 'myEdit',
          component:UserUpdateView,
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:LoginView
    }
  ],
})

router.beforeEach(async (to, from, next)=>{
  if (FIRST_ENTER.value) {
    await useUserStore().fetchUserInfo()
    FIRST_ENTER.value=false
  }
  next()
})

export default router
