// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** 获取登录用户信息 GET /api/api/user */
export async function getLoginUserInfoUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseUserVO_>('/api/api/user', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 用户登录 POST /api/api/user/login */
export async function loginUsingPost(body: API.UserLoginRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseUserVO_>('/api/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
