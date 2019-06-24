import * as actionTypes from './constants';
import axios from 'axios';

// const changeHomeData = (result) => ({
//   tyle: actionTypes.CHANGE_HOME_DATA,
//   topicList: result.topicList,
//   articleList: result.articleList,
//   recommendList: result.recommendList,
// })

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      console.log(res);
      // dispatch(changeHomeData(res.data.data))
    }).catch((err) => {
      console.log(err);
      
    })
  }
  
}