import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Download from './components/Download';
import Writter from './components/Writter';
import Recommend from './components/Recommend';
import { actionCreators } from './store';
import { BackTop } from './style';

class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
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
        {
          this.props.scrollTopShow ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
        }
        
      </HomeWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  scrollTopShow: state.getIn(['home', 'scrollTopShow'])
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
