import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import List from './components/List';


class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic />
          <List></List>
        </HomeLeft>
        <HomeRight>
          Rigth
        </HomeRight>
      </HomeWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}
export default connect(
  mapStateToProps,
)(Home);