## 通用组件

#### 目录结构
- Toast 弹窗提示<br/>使用样例：
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
