import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import TeamView from '@/views/TeamView.vue'
import MyView from '@/views/MyView.vue'
import UserUpdateView from '@/views/UserUpdateView.vue'
import MyDetailView from '@/views/MyDetailView.vue'

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
    }
  ],
})

export default router
