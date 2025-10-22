import dayjs, { type Dayjs } from 'dayjs'

export const getGenderVal=(code:number)=>{
  if (code===0) {
    return '男'
  }else if (code===1) {
    return '女'
  }
}

/**
 * 格式化时间
 */
export const formatDate=(date:Dayjs)=>{
  return dayjs(date).format('YYYY-MM-DD')
}
