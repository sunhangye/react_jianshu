import React from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';

const Topic = (props) => {
  const { list } = props;

  return (
      <TopicWrapper>
        {
          (list.toJS().length > 0) && list.map((item) => (
            <TopicItem key={item.get('id')}>
            < img className = "topic-pic"
            src = {item.get('imgUrl')}
            alt = "pic" / >
            {item.get('title')}
          </TopicItem>
          ))
        }
      </TopicWrapper>
    );
}

const mapStateToProps = (state) => ({
   list: state.getIn(['home', 'topicList'])
});

export default connect(mapStateToProps, null)(Topic);
