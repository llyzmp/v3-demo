import axios from 'axios'

//创建axios的一个实例
const instance = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_URL, //接口统一域名
  timeout: 6000, //设置超时
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;'
  }
})
//请求拦截器
instance.interceptors.request.use(
  (config: any) => {
    // 添加请求头config.headers
    //若请求方式为post，则将data参数转为JSON字符串
    if (config.method === 'POST') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  (error) =>
    // 对请求错误做些什么
    Promise.reject(error)
)

//响应拦截器
instance.interceptors.response.use(
  (response) => {
    //响应成功
    console.log('响应成功')
    return response.data
  },
  (error) => {
    console.log(error)
    //响应错误
    if (error.response && error.response.status) {
      const status = error.response.status
      console.log(status)
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)
export default instance
