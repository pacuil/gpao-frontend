<script setup lang="ts">
import { reactive, ref } from 'vue'
import {useRouter} from 'vue-router'
import { loginUsingPost } from '@/api/userController.ts'
import useUserStore from '@/stores/useUserStore.ts'
import { showNotify } from 'vant'
const userStore=useUserStore()
const router=useRouter()
const loginParams = reactive<API.UserLoginRequest>({})
const onSubmit = async () => {
  const res = await loginUsingPost(loginParams)
  if (res.data.code === 0 && res.data.data) {
    userStore.setLoginUser(res.data.data)
    showNotify({ type: 'success', message: '登录成功' })
    // await router.push({path:'/'})
    location.href='/'
    return
  }
  showNotify({ type: 'danger', message: res.data.message })
}
</script>

<template>
  <div id="loginView">
    <div class="title">
      <h4>登录</h4>
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="loginParams.userAccount"
          name="userAccount"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="loginParams.userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped>
#loginView .title {
  text-align: center;
}
</style>
