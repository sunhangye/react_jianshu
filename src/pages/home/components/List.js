import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { list, page, getMoreList } = this.props;
    const newResult = list.toJS();
    return (
      <div>
        {
          newResult.map((item, index) => (
            <Link to={`/detail/${item.id}`} key={index}>
            <ListItem >
              <img className="pic" src={item.imgUrl} alt=""/>
              <ListInfo>
                <h3 className="title">{item.title}</h3>
                <p className="desc">{item.desc}</p>
              </ListInfo>
            </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={()=>{getMoreList(page)}}>加载更多</LoadMore>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {
    
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
