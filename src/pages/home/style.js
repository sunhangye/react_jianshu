import styled from 'styled-components';

export const HomeWrapper = styled.div `
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div `
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div `
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div `
  overflow: hidden;
  padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`

export const ListInfo = styled.div `
  width: 490px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`

export const RecommentWrapper = styled.div `
  width: 280px;
  margin: 30px 0;
`

export const RecommentItem = styled.div `
  wdith: 280px;
  height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: pink url(${(props)=>props.imgUrl}) no-repeat top center;
  background-size: contain;
`
export const DownloadWrapper = styled.div `
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85;
  }
`

export const DownloadInfo = styled.div `
  display: inline-block;
  vertical-align: middle;
  margin-left: 7px;
  .title {
    font-size: 15px;
    color: #333;
  }
  .description {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`

export const WriterWrapper = styled.div `
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;

export const LoadMore = styled.div `
  width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`

export const BackTop = styled.div `
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  transition: .1s ease-in;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: hsla(0,0%,71%,.1);
    transition: .1s ease-in;
  }
`
