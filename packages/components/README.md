## 通用组件

#### 目录结构
- Toast 提示
```
import {toast} from '@insurance/components/Toast'

// 普通提示（展示 2 秒）
toast.popup({text:'我是提示'})

// 普通提示（展示 3 秒）
toast.popup({text:'我是提示'}, 3000)

// loading (不自动隐藏)
toast.show({loading: true})

// loading (2 秒后隐藏)
toast.show({loading: true}, 2000)

// 隐藏提示框
toast.hide()
```

- Alert 弹窗
```
import {alert} from '@insurance/components/Alert'

// 提示框
alert.show({
  alertClose: true,  // 右上角展示关闭按钮
  title: '提示',    // 弹窗标题
  type: 'alert',  // alert-提示框（可不写）
  content: '我是提示框',  // 弹窗内容
  closeText: '知道了',   // 提示框文案
  onClose: () => {},  // 提示框关闭按钮事件
})

// 确认框
alert.show({
  alertClose: false,  // 右上角不展示关闭按钮（可不写）
  title: '确认',   // 弹窗标题
  type: 'confirm',   // confirm-确认框
  content: '确认知道了',   // 弹窗内容
  cancelText: '取消',   // 确认框取消按钮文案
  onClose: () => {},  // 确认框关闭按钮事件
  okText: '是的',  // 确认框确定按钮文案
  onOk: () => {}   // 确认框确认按钮事件
})
```
