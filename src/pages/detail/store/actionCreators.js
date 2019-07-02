import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const changeDetail = (data) => ({
  type: actionTypes.CHANGE_DETAIL,
  data,
})

export const getDtail = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then((res) => {
      dispatch(changeDetail(res.data.data));
    }).catch(() => {
      console.log('请求详情页错误');
      
    })
  }
}