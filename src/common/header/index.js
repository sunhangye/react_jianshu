import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
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

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props;
  
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

const mapStateToProps = (state) => {
  
  return {
    focused: state.getIn(['header', 'focused'])
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