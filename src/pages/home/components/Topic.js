import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style'
class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img className="topic-pic" src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt=""/>
          社会热点
        </TopicItem>
        <TopicItem>
          <img className="topic-pic" src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt=""/>
          手绘
        </TopicItem>
      </TopicWrapper>
    );
  }
}

export default Topic;
