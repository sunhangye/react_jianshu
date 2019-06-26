import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import Header from './common/header/index';
import Home from './pages/home';
import detail from './pages/detail';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" component={detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}