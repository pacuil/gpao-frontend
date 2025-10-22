<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import router from '@/router'
import useUserStore from '@/stores/useUserStore.ts'
const HOME_MAPPING=reactive({
  INDEX:{code:0,value:'/'},
  TEAM:{code:1,value:'/teams'},
  MY:{code:2,value:'/my/detail'}
})
router.afterEach((to, from, failure)=>{
  if (HOME_MAPPING.INDEX.value===to.path) {
    active.value=HOME_MAPPING.INDEX.code
  }else if (HOME_MAPPING.TEAM.value===to.path) {
    active.value=HOME_MAPPING.TEAM.code
  }else if (HOME_MAPPING.MY.value===to.path) {
    active.value=HOME_MAPPING.MY.code
  }else {
    active.value=HOME_MAPPING.MY.code
  }
})
const userStore = useUserStore()
const active = ref(HOME_MAPPING.INDEX.code)
const go = (path: string) => {
  router.push({ path })
}
const isLogin = ref(false)
onMounted(async () => {
  await userStore.fetchUserInfo()
  isLogin.value=userStore.getLoginUser()?.id!=undefined
  //检验是否登录
  if (!isLogin.value) {
    await router.push({ path: '/login' })
  }
})
</script>

<template>
  <div id="basicLayout">
    <router-view></router-view>
    <van-tabbar v-model="active" v-if="isLogin">
      <van-tabbar-item icon="home-o" @click="go('/')">首页</van-tabbar-item>
      <van-tabbar-item icon="flag-o" @click="go('/teams')">队伍</van-tabbar-item>
      <van-tabbar-item icon="contact-o" @click="go('/my')">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>
