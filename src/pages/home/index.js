import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight,RecommentWrapper, RecommentItem } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Download from './components/Download';
import Writter from './components/Writter';
import { actionCreators } from './store'

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
          <RecommentWrapper>
            <RecommentItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"></RecommentItem>
            <RecommentItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"></RecommentItem>
            <RecommentItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"></RecommentItem>
            <RecommentItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"></RecommentItem>
          </RecommentWrapper>
          <Download></Download>
          <Writter></Writter>
        </HomeRight>
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
