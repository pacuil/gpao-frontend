<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/stores/useUserStore.ts'
import dayjs, { type Dayjs } from 'dayjs'
import { formatDate, getGenderVal } from '@/utils/CommonUtils.ts'
const userStore=useUserStore()
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
const user=reactive<API.UserVO>({})
const pathToEdit = () => {
  router.push({name:'myEdit',params:{id:myInfo.value.id}})
}



onMounted(()=>{
  Object.assign(user,userStore.getLoginUser())
  console.log(user)
})
</script>

<template>
  <div id="myView">
    <van-space direction="vertical" style="width: 100%">
      <div>
        <van-image
          style="margin: 0 auto;display: block"
          round
          width="6rem"
          height="6rem"
          :src="user.avatarUrl"
        />
        <van-icon name="edit" class="edit" @click="pathToEdit" />
      </div>
      <van-cell-group>
        <van-cell title="昵称" :value="user.username" />
        <van-cell title="性别" :value="getGenderVal(user.gender!)" />
        <van-cell title="邮箱" :value="user.email" />
        <van-cell title="出生年月" :value="formatDate(user.birth)" />
        <van-cell title="简介" :value="user.profile" />
      </van-cell-group>
    </van-space>
  </div>
</template>

<style scoped>
#myView {
  padding: 16px;
}

#myView .edit {
  position: absolute;
  top: 16px;
  right: 16px;
}
</style>
