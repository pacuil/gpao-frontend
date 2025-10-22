import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getLoginUserInfoUsingGet } from '@/api/userController.ts'
// import { API } from '@/api/typings'

export default defineStore('user', () => {
  const loginUser = ref<API.UserVO>({})
  const setLoginUser = (user:API.UserVO) => {
    loginUser.value=user
  }
  const getLoginUser=()=>{
    return loginUser.value
  }
  const fetchUserInfo=async ()=>{
    const res = await getLoginUserInfoUsingGet()
    console.log(res.data)
    if (res.data.code===0 && res.data.data) {
      setLoginUser(res.data.data)
    }
  }
  return {setLoginUser,getLoginUser,fetchUserInfo}
})
