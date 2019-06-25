This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

styled-components 使用3+版本对用api使用injectGlobal

使用react-transition-group  过渡动画
  
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
#### redux --> action

 正常返回 object {type:changeDataAction,data}

 redux-thunk 可以返回异步函数 () => {return(dispatch) {axios.get()} }

react render会执行两次 一次是初始化state,第二次是更新state

梳理下数据改变流程

在reducer中定义articlePage --> 在react-redux取出articlePage赋值到组件的props --> 点击加载更多按钮()=>{getMoreList(page)}将page传到参数中 --> dispatch action dispatch(actionCreators.getMoreList(page)) --> [在actionCreators中定义action {type:ADD_HOME_LIST, page: page} --> 使用react-thunk 进行异步操作 请求数据后dispatch action] --> 接到action 通过immutable 语法 改变page和articleList 返回一个新的state --> 组件接到state自动重新视图层