import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import  { actionCreators } from './store';
import { Link } from 'react-router-dom';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getSearchList() {
    const {focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage } = this.props;
    const newList = list.toJS();
    let pageList = [];
    
    // 只有异步获取数据后才渲染搜索提示框 不然为空数组
    if (newList.length > 0) {
      for (let i = (page-1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
        }
      }
    }
    
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
              	<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe685;</i>换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
          </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
  
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <SearchWrapper>
            <CSSTransition 
              in={focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch className={ focused ? 'focused' : '' } onFocus={() => handleInputFocus(list)} onBlur={handleInputBlur}></NavSearch>
            </CSSTransition>
            <i className={ focused ? 'focused iconfont zoom' : 'iconfont zoom' }>&#xe623;</i>
            {this.getSearchList()}
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
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getSearchData());
      
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spinIcon) {

      var originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
      
      if (!originAngle) {
        originAngle = 0;
      } else {
        originAngle = parseInt(originAngle, 10); // 转number类型
      }
      spinIcon.style.transform = `rotate(${originAngle+360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page+1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)