import React, { PureComponent } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import Header from './common/header/index';
import Home from './pages/home';
import detail from './pages/detail/loadable';
import login from './pages/login';
import write from './pages/write';
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path='/login' exact component={login}></Route>
          <Route path="/detail/:id" component={detail}></Route>
          <Route path="/write" component={write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}