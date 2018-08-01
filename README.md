# ash-multiple-template

## 项目介绍
静态页面日常支持页面

## 软件架构
```aidl

| -- page
|     |-- app-static
|            |-- app-static.html
|            |-- app-static.js
|            |-- app-static.less
|     |--app-vue
|     |--pc-static
|     |--pc-vue
| -- view
|     |-- kikuu-tmp                             (主体内容编写)
|            |-- app-static.njk  
|            |-- app-vue.njk
|            |-- pc-static.njk
|            |-- pc-vue.njk
|     |-- widget
|            |-- base   
|                   |-- kikuu-tmp-app.njk
|                   |-- kikuu-tmp-pc.njk
|            |-- footer
|                   |-- kikuu-app-footer.njk
|                   |-- kikuu-pc-footer.njk
|            |-- header
|                   |-- kikuu-app-header.njk
|                   |-- kikuu-pc-header.njk
|            |-- layout                        （通用结构）
|                   |-- kikuu-tmp-app.njk
|                   |-- kikuu-tmp-pc.njk
```

## 安装教程

- 安装依赖

```bash
npm install
```
- 通过taobao源安装依赖

```bash
npm ii
```

## 使用说明

#### HTML模板

- 独立模板, Entry目录下面包含同名的HTML页面
- 全局模板(entry.template), 没有独立模板时,将采用全局模板.

HTML构建时, 首先取独立模板,如果文件存在,则使用独立模板, 否则取全局模板.

#### nunjucks

nunjucks loader 默认是禁用， 你可以通过如下方式开启：

```js
// webpack.config.js
module.exports = {
  loaders: {
    nunjucks: {
      options: {
        searchPaths: ['./view']  // nunjucks 模板查找目录
      }
    }
  },
}
```
#### HTTP Proxy 

use [koa-proxy](https://github.com/popomore/koa-proxy) plugin proxy http request:

```js
// webpack.config.js
module.exports = {
  proxy: {
    host:  'http://localhost:8888',   
    match: /\/debug/
  },
}
```

#### 启动
```bash
npm start
```

#### 打包

通过执行   

```bash
npm run build:dev
```
来打包输出html及各个静态资源。


#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request

