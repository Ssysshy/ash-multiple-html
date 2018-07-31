# kikuu-template

## 项目介绍
KiKUU 日常支持页面

## 软件架构
软件架构说明


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
#### 打包

通过执行   

```bash
npm run build:dev
```
来打包输出html及各个静态资源。

### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


### 码云特技

1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2. 码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3. 你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4. [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5. 码云官方提供的使用手册 [http://git.mydoc.io/](http://git.mydoc.io/)
6. 码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)