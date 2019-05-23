import './index.less'
export class Toast {
  // 隐藏 toast
  public hide = () => {
    removeDom()
  }

  // 显示 toast （一般用于 loading）
  public show = (option= {},delay?:number) => {
    addDom(option,delay)
  }

  // 显示 toast （一般用于提示）
  public popup = (option= {},delay= 1500) => {
    addDom(option,delay)
  }
}

const addDom = (option= {} as any,delay?:number): Promise<boolean> => {
  const {loading, text} = option
  return new Promise(resolve => {
    removeDom(false)
    const toastEle = document.createElement('div');
    toastEle.setAttribute('class', 'toast-box')
    toastEle.innerHTML = `<div class="toast-content ${loading ? 'toast-content_loading': ''}">
      ${loading ? `<em class="toast-loading"></em>` : ''}
      <p>${text || ''}</p>
    </div>`
    document.body.appendChild(toastEle)
    delay ? setTimeout(()=> resolve(removeDom()), delay) : resolve()
  })
}

const removeDom = (animationEnd= true) => {
  const oldDom = document.getElementsByClassName('toast-box')[0];
  if(oldDom){
    if(animationEnd){
      oldDom.setAttribute('class', 'toast-box hide')
      oldDom.addEventListener('animationEnd', ()=> {
        removeDom(false)
      })
    }else{
      document.body.removeChild(oldDom)
    }
  }
  return true
}

export const toast = new Toast()