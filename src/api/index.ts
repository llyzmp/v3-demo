import { axios } from '@/http'

export const test = (data: any) => {
  return axios({
    url: '/test',
    data,
    method: 'get',
    config: {
      // headers: {
      //     'Request-Type': 'wechat'
      // },
      // timeout: 10000
    }
  })
}
