<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const myInfo = ref(
  {
    id: 1,
    avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    nickName: '韶华',
    gender: '男',
    age: 18,
    birth: '2000-1-1',
    profile: '一个正在变强的developer'
  })

const pathToEdit = () => {
  router.push({name:'myEdit',params:{id:myInfo.value.id}})
}
</script>

<template>
  <div id="myView">
    <router-view></router-view>
<!--    <van-space direction="vertical" style="width: 100%">-->
<!--      <div>-->
<!--        <van-image-->
<!--          style="margin: 0 auto;display: block"-->
<!--          round-->
<!--          width="6rem"-->
<!--          height="6rem"-->
<!--          :src="myInfo.avatar"-->
<!--        />-->
<!--        <van-icon name="edit" class="edit" @click="pathToEdit" />-->
<!--      </div>-->
<!--      <van-cell-group>-->
<!--        <van-cell title="昵称" :value="myInfo.nickName" />-->
<!--        <van-cell title="性别" :value="myInfo.gender" />-->
<!--        <van-cell title="年龄" :value="myInfo.age" />-->
<!--        <van-cell title="出生年月" :value="myInfo.birth" />-->
<!--        <van-cell title="简介" :value="myInfo.profile" />-->
<!--      </van-cell-group>-->
<!--    </van-space>-->

  </div>
</template>

<style scoped>
</style>
