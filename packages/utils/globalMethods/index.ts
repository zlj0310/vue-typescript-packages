
import querystring from 'query-string'
import {toast} from '@insurance/components/Toast'

export default class GlobalMethods {
  // 获取 url 参数
  public getUrlParam = () => {
    const searchParam = querystring.parse(window.location.search.split('?')[1])
    const index = window.location.hash.indexOf('?')
    const hashParam = querystring.parse(window.location.hash.substr(index).split('?')[1])
    return Object.assign({}, searchParam, hashParam)
  }

  // 设置页面标题
  public setTitle = (title: string) => {
    document.title = title
  }

  public getLocalStorage(key:string) {
    const values = window.localStorage.getItem(key)
    if (values) {
      return JSON.parse(decodeURIComponent(values))
    }
  }

  public setLocalStorage(key:string, values:any) {
    const data = typeof values === 'string' ? values : JSON.stringify(values)
    window.localStorage.setItem(key, encodeURIComponent(data))
  }

  public delLocalStorage(key:string) {
    window.localStorage.removeItem(key)
  }

  // 检验手机号的正确性
  public checkMobile = (mobile: string) => {
    if (!mobile) {
      toast.popup({ text: '请输入手机号码' })
      return false
    } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(mobile)) {
      toast.popup({ text: '请输入正确的手机号' })
      return false
    }
    return true
  }
}

export const globalMethods = new GlobalMethods()