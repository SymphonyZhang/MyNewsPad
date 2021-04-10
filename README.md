# 微信小程序学习

1. 组件

   - `view`标签：类似HTML中的div标签和p标签

   - `text`标签：类别HTML中的span标签

     - `selectable`属性 :文档是否可选

       ```html
       <text selectable>你好</text> <!-- 用带有selectable属性的text标签包裹的内容可以被长按选中 -->
       ```

       

     - `decode` 属性: 是否解码，decode可以解析的有 nbsp/lt/gt/amp/apos/ensp/emsp等等

       ```html
       <text decode>世界&nbsp;很大</text> <!-- 世界 很大 -->
       ```

       

   - `button`

     - `type`属性: `primary` / `default` / `warn`

       ```html
       <button type="primary">Primary</button>
       <button type="default">Default</button>
       <button type="warn">Warn</button>
       ```

       

     - `form-type`属性: `submit` / `reset`

       ```html
       <form bindsubmit="submitFunc" bindreset="resetFunc">
         <button form-type="submit">Submit</button>
         <button form-type="reset">Reset</button>
       </form>
       ```

       

     - `open-type`属性:  ~~`getUserInfo`(获取用户信息[不建议使用，有新的方法了 2021年])~~ / `getPhoneNumber`(获取手机号码)  / `contact`(联系客服)

       ```html
       <button open-type="getUserInfo">getUserInfo</button>
       <button open-type="getPhoneNumber">getPhoneNumber</button>
       <button open-type="contact">contact</button>
       ```

       

   - `checkbox`

     - 复选按钮

     - 具有开闭标签，可以在开闭标签内写入复选文字内容

     - `value`属性：可以填入真实的值

       ```html
       <checkbox-group>
         <checkbox value="0">语文</checkbox>
         <checkbox value="1">数学</checkbox>
       </checkbox-group>
       ```

       

   - `radio`

     - 单选按钮

     - 具有开闭标签，可以在开闭标签内写入复选文字内容

     - `value`属性：可以填入真实的值

     - 如果要实现单选按钮，必须配合`radio-group`

       ```html
       <radio-group>
         <radio value="1">英语</radio>
         <radio value="2">法语</radio>
       </radio-group>
       ```

       

   - block

     - 标签块，其本身不会渲染到页面中，只有其内部的标签和内容会被渲染到页面中

       ```html
       <!-- 可以通过调试窗口看到渲染的代码中并没有block标签 -->
       <block>
         <view>Logo</view>
         <text style="margin-right:6px">首页</text>
         <text style="margin-right:6px">商品</text>
         <text style="margin-right:6px">购物车</text>
         <text style="margin-right:6px">订单</text>
       </block>
       ```

       

   - input

     ```html
     <!-- 这两种写法是等价的 -->
     <input type="password"></input>
     <input password></input>
     
     <!-- 常用属性 -->
     <input type="text" value="dafsdfas"></input>
     <input password></input>
     <input type="number"></input>
     <input placeholder="hello" placeholder-style="color:red" placeholder-class="ph-style"></input>
     <input disabled > </input>
     <input maxlength="10"></input>
     ```
- 

## 事件绑定

- 组件的点击事件用属性 `bindtap`指定js中的方法，在js中添加对应的方法

  - 普通点击

  ```html
  <!-- wxml -->
  <button bindtap="clickMe">点击我</button>
  ```

  ```javascript
  //js
  clickMe(event){
      console.log("点击了按钮")
    },
  ```

  - 传参点击

  ```html
  <!-- wxml -->
  <button bindtap="clickMe" data-val1="1" data-val2="2">点击我</button>
  ```

  ```javascript
  //js
  clickMe(event){
      console.log("点击了按钮",event.currentTarget.dataset) //点击了按钮 {val1: "1", val2: "2"}
    },
  ```

  

- 输入事件在`input`标签中使用`bindinput`标签指定js中的方法，在js中添加对应的方法

  ```html
  <!-- wxml -->
  <input type="text" placeholder="please input something" bindinput="changeMe"></input>
  ```

  ```javascript
  //js
  changeMe(event){
      console.log("输入了：",event.detail.value) //当在输入框中输入1时打印：    输入了： 1
    },
  ```

  

- 插值表达式
  
  

```js
//js
data: {
	msg:"Halo"
  },
```

```html
<!-- wxml -->
<view>{{msg}}</view> <!-- 这样就可以获取到js中data里的msg的数据并显示在页面上 -->
```

- 显示插值表达式中的富文本内容

```javascript
//js
  data: {
    msg2:"<b>你好</b><p style='color:red'>嘿嘿嘿</p>"
  },

```

```html
<!-- wxml -->
<view>
    <!-- 只支持站外标签，不能使用本地资源，不支持交互事件 支持css中定义style不支持对标签进行设置样式-->
  <rich-text nodes="{{msg2}}"></rich-text>
</view>
```

```css
/* wxss */
/*这是不能让msg2中的b标签使用这个样式的*/
b{
  color:red
}
```

需要修改成如下：

```javascript
//js
  data: {
    msg2:"<b class='bStyle'>你好</b><p style='color:red'>嘿嘿嘿</p>"
  },
```

```css
/* wxss */
.bStyle{
  color:red
}
```
