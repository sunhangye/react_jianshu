import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Header from './common/header/index';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
        </Fragment>
      </Provider>
    )
  }
}