import './index.less'

export class Alert {
  // 隐藏 alert
  public hide = () => {
    removeDom()
  }

  // 显示 alert
  public show = (option= {}) => {
    addDom(option)
  }
}

const addDom = (option= {} as any) => {
  const {
    alertClose= false,
    title= '',
    type= 'alert',
    content= '',
    closeText= '关 闭',
    onClose= () => {},
    cancelText= '取 消',
    okText= '确 定',
    onOk= () => {},
    onCancel= () => {},
  } = option
  removeDom(false)
  const alertEle = document.createElement('div');
  alertEle.setAttribute('class', 'alert-box')

  const html =
    `<div>
      <div class="alert-mask"></div>
      <div class="alert-wrapper">
        ${alertClose && `<em class="icon-close"></em>`}
        <h3>${title}</h3>
        <div class="alert-content">
          ${content}
        </div>
        <div class="alert-footer">
          ${type === 'alert' ?
            `<button class="btn-close">
              ${closeText}
            </button>`:
            `<div class="btn-group">
              <button class="btn-cancle">
                ${cancelText}
              </button>
              <button class="btn-ok">
                ${okText}
              </button>
            </div>`
          }
        </div>
      </div>
    </div>`
  alertEle.innerHTML = html
  document.body.appendChild(alertEle)

  // === 监听关闭事件
  const btnClose= document.getElementsByClassName('btn-close')[0];
  if(btnClose){
    (btnClose as any).onclick = () => {
      onClose()
      removeDom()
    }
  }

  // === 监听取消事件
  const btnCancle = document.getElementsByClassName('btn-cancle')[0];
  if(btnCancle){
    (btnCancle as any).onclick = () => {
      onCancel()
      removeDom()
    }
  }

  // === 监听确认事件
  const btnOk = document.getElementsByClassName('btn-ok')[0];
  if(btnOk){
    (btnOk as any).onclick = () => {
      onOk()
      removeDom()
    }
  }

  // === 监听右上角关闭事件
  const iconClose = document.getElementsByClassName('icon-close')[0];
  if(iconClose){
    (iconClose as any).onclick = () => {
      removeDom()
    }
  }
}

const removeDom = (animationEnd= true) => {
  const oldDom = document.getElementsByClassName('alert-box')[0];
  if(oldDom){
    if(animationEnd){
      oldDom.setAttribute('class', 'alert-box hide')
      oldDom.addEventListener('animationEnd', ()=> {
        removeDom(false)
      })
    }else{
      document.body.removeChild(oldDom)
    }
  }
  return true
}

export const alert = new Alert()