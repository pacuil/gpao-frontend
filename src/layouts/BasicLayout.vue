<script setup lang="ts">
import { ref } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const active = ref(0)
const go=(path:string)=>{
  router.push({path})
}
</script>

<template>
  <div id="basicLayout">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="go('/')">首页</van-tabbar-item>
      <van-tabbar-item icon="flag-o" @click="go('/teams')">队伍</van-tabbar-item>
      <van-tabbar-item icon="contact-o" @click="go('/my')">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>
