import axios from 'axios';
import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const getSearchData = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data.data;
      dispatch(changeList(data));
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})




