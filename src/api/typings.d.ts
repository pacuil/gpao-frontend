import type { Dayjs } from 'dayjs'

declare namespace API {
  type BaseResponseUserVO_ = {
    code?: number
    data?: UserVO
    message?: string
  }

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string
    /** nonce */
    nonce?: string
    /** signature */
    signature?: string
    /** timestamp */
    timestamp?: string
  }

  type UserLoginRequest = {
    userAccount?: string
    userPassword?: string
  }

  type UserVO = {
    avatarUrl?: string
    createTime?: string
    email?: string
    gender?: number
    id?: number
    phone?: string
    planeCode?: string
    tags?: string[]
    birth?:Dayjs
    profile?:string
    updateTime?: string
    userAccount?: string
    userRole?: number
    userStatus?: number
    username?: string
  }
}
