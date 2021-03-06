import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
	z-index: 1;
	position: relative;
	height: 56px;
  border-bottom: 1px solid #f0f0f0;
  min-width: 768px;
  max-width: 1440px;
  // margin: 0 auto;
`;

export const Logo = styled.div `
	// position: absolute;
	// top: 0;
  // left: 0;
  float: left;
	width: 100px;
  height: 56px;
  padding: 0;
	background: url(${logoPic}) no-repeat;
  background-size: contain;
`;

export const Nav = styled.div `
	min-width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`;

export const NavItem = styled.div `
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
  }
  &.pointer {
    cursor: pointer;
  }
`;

export const SearchWrapper = styled.div `
	position: relative;
  float: left;
  
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
  }
`;

export const SearchInfo = styled.div `
	position: absolute;
	left: 30px;
	top: 61px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

export const SearchInfoTitle = styled.div `
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
  color: #969696;
  overflow: hidden;
`;

export const SearchInfoSwitch = styled.span `
	float: right;
  font-size: 13px;
  background-color: transparent;
  border-width: 0;
  cursor: pointer;
  padding: 0;
	.spin {
		float: left;
		font-size: 15px;
		margin-right: 2px;
		transition: all .2s ease-in;
    transform-origin: center center;
    line-height: 1;
    transition: .5s ease;
    margin-top: 3px;
	}
`;

export const SearchInfoList = styled.div `
	overflow: hidden;
`;

export const SearchInfoItem = styled.a `
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;

export const Addition = styled.div `
	// position: absolute;
	// right: 0;
	// top: 0;
  height: 56px;
  float: right;
`;

export const Button = styled.div `
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-siz: 14px;
	&.reg {
    color: #ec6149;
    transition: .1s ease-in;
    &:hover {
      color: #ec6149;
      border-color: #ec6149;
      background-color: rgba(236,97,73,.05);
    }
	}
	&.writting {
		color: #fff;
    background: #ec6149;
    transition: .1s ease-in;
    &:hover {
      color: #fff;
      background-color: #ec6149;
    }
	}
`