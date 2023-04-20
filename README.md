# me-ui 一个 Taylor 主题的 Vue UI 组件库

[![Build Status](https://camo.githubusercontent.com/464affec1d056eecc08779948a1bb93bc579e4ab7637979609cd1506a43ad301/68747470733a2f2f696d672e736869656c64732e696f2f636972636c6563692f70726f6a6563742f6769746875622f7675656a732f7675652f6465762e7376673f73616e6974697a653d74727565)![Version](https://camo.githubusercontent.com/6a1ee221c99c800e8d3b104c99033afa11d84c16f58e77632d21ed9d2370f49d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652e7376673f73616e6974697a653d74727565)](https://www.npmjs.com/package/me-test-20230216)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用

## 开始使用

1. 添加 CSS 样式

   使用本框架前，请在 CSS 中开启 border-box

   ```css
   * {
     box-sizing: border-box;
   }

   *::before {
     box-sizing: border-box;
   }

   *::after {
     box-sizing: border-box;
   }
   ```

   IE 8 及以上浏览器都支持此样式

   你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

   ```css
   :root {
     --button-height: 32px;
     --font-size: 14px;
     --button-bg: white;
     --button-active-bg: #eee;
     --border-radius: 4px;
     --color: #999;
     --border-color: #999;
     --border-color-hover: #666;
   }
   ```

IE 15 及以上浏览器都支持此样式

2. 安装 me

   ```
   npm i --save me-test-20230216
   ```

3. 引入 me

   ```javascript
   import { Button, Icon, ButtonGroup } from "me-test-20230216";
   export default {
     name: "App",
     components: {
       HelloWorld,
       "m-button": Button,
       "m-icon": Icon,
       "m-buttonGroup": ButtonGroup,
     },
   };
   ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

## 安装
