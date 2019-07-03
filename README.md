# 仿简书react项目

> 本项目仿照简书网站，也是我使用react的第一个完整项目。对有一定`react`基础的同学非常友好，非常适合入门学习。零基础的同学可以参考我的另外一篇文章[react_demo](https://github.com/sunhangye/react_demo)。可以通过`git log`，查看我的学习思路，与我一起学习，一起进步。😀😀


## 项目使用相关技术和用途

* 使用官方提供脚手架`create-react-app`初始化项目
* 数据状态管理使用`redux`
* 将数据状态绑定到`react`使用`react-redux`
* 路由跳转使用`react-router-dom`
* 动画交互使用`styled-components`
* 异步加载组件使用`react-loadable`

## 项目使用及运行

```bash
git clone git@github.com:sunhangye/react_demo.git

cd react_demo

yarn

yarn start # 浏览器自动打开localhost:3000

yarn build # 上线
```

##开发过程笔记

### **styled-components 使用3+版本对用api使用injectGlobal**


### **使用react-transition-group  过渡动画**
  
  使用CSSTransition组件传入三个属性值
   * in: boolean 执行状态
   * timeout obj:200 延时时间
   * classNames strng: slide 在css中定义 slide-enter、slide-enter-active、slide-exit、slide-exit-active
  
   ```
    &.slide-enter {
      transition: all .2s ease-out;
    }
    &.slide-enter-active {
      width: 240px;
    }
    &.slide-exit {
      transition: all .2s ease-out;
    }
    &.slide-exit-active {
      width: 160px;
    }
   ```
### **redux-thunk**

 在redux中action正常返回 `object{type:changeDataAction,data}`

 而redux-thunk 可以返回异步函数 () => {return(dispatch) {axios.get()} }
 
### **使用高级组件**
react render会执行两次 一次是初始化state,第二次是更新state，所以为避免多次渲染使用, 将之前`Component`替换为`PurComponent`。

### **梳理下数据改变、视图更新流程**

1. 在reducer中初始化`articlePage`
2. 利用`react-redux connect`，将state与组件做关联取出articlePage赋值到组件的props,数据放到`jsx`模板中展示出来
3. 点击加载更多按钮触发点击事件`onClock={()=>{getMoreList(page)}}`将page传到参数中
4. 派发action `dispatch(actionCreators.getMoreList(page))`
5. 在actionCreators中定义action `{type:ADD_HOME_LIST, page: page}`
6. 使用`react-thunk` 进行异步操作 请求数据后dispatch action
7. 在reducer中接收到action 通过`immutablejs` 语法 改变page和articleList 返回一个新的state
8. 组件接到state自动重新视图层

### **数据嵌套问题**

防止html出现便签，在组件中加上属性props ```dangerouslySetInnerHTML={{__html:item}} ```

### **路由**

1. 动态路由 / 反斜杠 /id=   然后可以`this.props.match.param`获取ID
2. 参数传递 id=  从`this.props.location.search`?id=1,然后进行处理

###**dom获取**
使用styled-components获取真实dom应使用innerRef

### **异步加载组件**

使用react-loadable。 将detail异步加载，但detail获取不到match对象，因此使用react中的withRouter

> 高阶组件中的withRouter, 作用是将一个组件包裹进Route里面, 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中.