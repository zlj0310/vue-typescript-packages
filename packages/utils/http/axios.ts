/**
 * Created by zhulijun on 2019/05/13.
 */
import axios from 'axios'
import {toast} from '@insurance/components/Toast'

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    const requestConfig = config.headers.config
    // === 是否加载 loading 框 ===
    const {showLoading= true} = requestConfig
    showLoading && toast.show({loading: true})
    // === 是否加载 loading 框 ===
    return config
  },
  error => {
    toast.hide()
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    const config = response.config.headers.config
    const {showToast= true, returnDirect= false} = config
    // === 直接返回结果 ===
    if(returnDirect) return response.data
    // === 直接返回结果 ===
    const res = response.data
    const { code, content = {}, metadata, message } = res;


    const successCode = ['000000']
    const loginErrorCode = ['460003','460004']

    if (successCode.includes(code)) {
      toast.hide()
      return metadata.totalPages ? res : content
    } else if (loginErrorCode.includes(code)) {
      toast.hide()
      // 登录异常 TODO
      return {failMark: true, ...res}
    } else {
      showToast && toast.popup({ text: message || '系统错误' })
      return {failMark: true, ...res}
    }
  },
  error => {
    toast.hide()
    if (error.response.status === 404) {
      toast.popup({text: '您请求的接口不存在'})
    } else {
      toast.popup({text: `哎呀，服务器繁忙，请稍后再试~${error.response.status}`})
    }
    return {failMark: true}
  }
)

export default axios
