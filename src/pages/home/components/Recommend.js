import React from 'react';
import { RecommentWrapper, RecommentItem } from '../style'
import { connect } from 'react-redux';

const Recommend = (props) => {
  const newList = props.list.toJS();
  
  return (
      <RecommentWrapper>
        {
          newList.map((item) => (
          <RecommentItem key={item.id} imgUrl={item.imgUrl}></RecommentItem>
        ))
        }
      </RecommentWrapper>
    );
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapStateToProps, null)(Recommend);
