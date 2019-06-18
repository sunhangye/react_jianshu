import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import store from '../../store';
import  { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  Addition,
  Button
} from './style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
    
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <SearchWrapper>
            <CSSTransition 
              in={focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch className={ focused ? 'focused' : '' } onFocus={handleInputFocus} onBlur={handleInputBlur}></NavSearch>
            </CSSTransition>
            <i className={ focused ? 'focused iconfont zoom' : 'iconfont zoom' }>&#xe623;</i>
          </SearchWrapper>
          <Addition>
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)