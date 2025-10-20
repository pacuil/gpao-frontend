<script setup lang="ts">
import { ref } from 'vue'
import {useRouter} from 'vue-router'
const router=useRouter()
const username = ref('');
const password = ref('');
const onSubmit = (values) => {
  console.log('submit', values);
};
const onClickLeft=()=>{
  router.go(-1)
}
</script>

<template>
  <div id="userUpdateView">
    <van-nav-bar
      title="修改个人信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="nickName"
          label="昵称"
          placeholder="请输入昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />
        <van-field
          v-model="password"
          name="gender"
          label="性别"
          placeholder="请选择性别"
          :rules="[{ required: true, message: '请选择性别' }]"
        />
        <van-field
          v-model="password"
          name="age"
          label="年龄"
          placeholder="请选择年龄"
          :rules="[{ required: true, message: '请选择年龄' }]"
        />
        <van-field
          v-model="password"
          name="birth"
          label="出生年月"
          placeholder="请选择出生年月"
          :rules="[{ required: true, message: '请选择出生年月' }]"
        />
        <van-field
          v-model="password"
          name="profile"
          label="简介"
          placeholder="请输入简介"
          :rules="[{ required: true, message: '请输入简介' }]"
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

</style>
