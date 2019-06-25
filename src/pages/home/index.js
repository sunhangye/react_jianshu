import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Download from './components/Download';
import Writter from './components/Writter';
import Recommend from './components/Recommend';
import { actionCreators } from './store'
import { BackTop } from './style'
class Home extends Component {
  
  componentDidMount() {
    this.props.changeHomeData();

  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic />
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Download></Download>
          <Writter></Writter>
        </HomeRight>
        <BackTop onClick={() => {window.scrollTo(0, 0)}}>顶部</BackTop>
      </HomeWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
