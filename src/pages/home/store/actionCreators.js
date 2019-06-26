import * as actionTypes from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
})

const addHomeList = (result, nextpage) => ({
  type: actionTypes.ADD_HOME_LIST,
  result: fromJS(result),
  nextpage: fromJS(nextpage)
  
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      if (res.data.status === 1) {
        dispatch(changeHomeData(res.data.data))
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const getMoreList = (nextpage) => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      if (res.data.status === 1) {
        dispatch(addHomeList(res.data.data, nextpage + 1))
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_TOP_SHOW,
  show,
});

