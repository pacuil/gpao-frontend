<script setup lang="ts">
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import type { Numeric } from 'vant/es/utils'
const router=useRouter()
const username = ref('');
const password = ref('');
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
const onSubmit = (values) => {
  console.log('submit', values);
};
const onClickLeft=()=>{
  router.go(-1)
}
const showEditGender=ref(false)
const showEditBirth=ref(false)
const pickerValue = ref<Numeric[]>([]);
const columns = [
  { text: '男', value: 0 },
  { text: '女', value: 1 },
];

const onConfirm = ({ selectedValues, selectedOptions }) => {
  showEditGender.value = false;
  pickerValue.value = selectedValues;
  myInfo.value.gender = selectedOptions[0].text;
};

const currentDate = ref(['2021', '01', '01']);
const maxDate=ref(new Date())
const minDate=ref(new Date('1900','1','1'))

const cancelEditBirth=()=>{
  showEditBirth.value=false
}
const confirmBirth=(selectedValues, selectedOptions, selectedIndexes)=>{
  currentDate.value=selectedValues.selectedValues
  myInfo.value.birth=currentDate.value.join('-')
  console.log(new Date().getTime())
  myInfo.value.age=((new Date().getTime()-new Date(currentDate.value[0],currentDate.value[1],currentDate.value[2]).getTime())/(1000*60*60*24*365)).toFixed(0)
  showEditBirth.value=false
}

const afterRead = (file) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);
};

const fileList = ref([
]);
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
        <van-uploader :after-read="afterRead" :max-count="1" v-model="fileList" style="margin: 12px auto;display: block;width: 100px;height: 100px"/>
        <van-field
          v-model="myInfo.nickName"
          name="nickName"
          label="昵称"
          placeholder="请输入昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />
        <van-field
          v-model="myInfo.gender"
          is-link
          readonly
          label="性别"
          placeholder="请选择性别"
          @click="showEditGender = true"
        />
        <van-popup v-model:show="showEditGender" destroy-on-close round position="bottom">
          <van-picker
            :model-value="pickerValue"
            :columns="columns"
            @cancel="showEditGender = false"
            @confirm="onConfirm"
          />
        </van-popup>
<!--        <van-field-->
<!--          v-model="password"-->
<!--          name="gender"-->
<!--          label="性别"-->
<!--          placeholder="请选择性别"-->
<!--          :rules="[{ required: true, message: '请选择性别' }]"-->
<!--        />-->
        <van-field
          v-model="myInfo.age"
          name="age"
          label="年龄"
          disabled
        />
<!--        <van-date-picker-->
<!--          v-model="currentDate"-->
<!--          :max-date="maxDate"-->
<!--          title="请选择出生日期"-->
<!--        />-->
        <van-field
          v-model="myInfo.birth"
          name="birth"
          label="出生年月"
          placeholder="请选择出生年月"
          :rules="[{ required: true, message: '请选择出生年月' }]"
          @click="showEditBirth = true"
        />
        <van-popup v-model:show="showEditBirth" destroy-on-close round position="bottom">
          <van-date-picker
            v-model="currentDate"
            :max-date="maxDate"
            :min-date="minDate"
            title="请选择出生日期"
            @confirm="confirmBirth"
            @cancel="cancelEditBirth"
          />
        </van-popup>
        <van-field
          v-model="myInfo.profile"
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
