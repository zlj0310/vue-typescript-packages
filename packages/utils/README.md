## 工具类

#### 目录结构
- http 底层请求拦截器封装
```
import { encryHttp } from '@insurance/utils/http/encrytionHttp'
encryHttp.get({url: '', config: {}})
```
- sensors  神策打点
- ibsCityMap  全国城市 json
```
import sen from '@insurance/utils/src/sensors';
sen.track(event, {
  ...properties,
});
```
- globalMethods 公用方法
  ```
  import {globalMethods} from '@insurance/utils/globalMethods'
  ```
  - 获取 url 所有参数
  ```
  globalMethods.getUrlParam()
  ```
  - 设置 title
  ```
  globalMethods.setTitle('xxx')
  ```