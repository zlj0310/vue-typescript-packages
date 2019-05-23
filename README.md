# vue-typescript-packages
采用 vue + vue-router + webpack + typescript + axios

## 规范
### ts、tsx
采用 tslint 规范，并使用 prettier 格式化代码。


## 前言

该项目采用 yarn workspaces 来管理各子项目的依赖

- config 项目基础配置，在子项目中已继承
- /packages/boilerplate 样例模板，新的项目推荐基于这个样例开发
- /packages/component 通用组件
- /packages/utils 工具类

## 日常命令

安装依赖

```
yarn
```

子项目运行

```
yarn workspace {packages 子项目名称} start
```

子项目打包

```
yarn build {packages 子项目名称}
```