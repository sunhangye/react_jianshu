import * as actionTypes from './actionTypes';
import axios from 'axios';


const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
})

export const login = (accout, psd) => {
  return (dispatch) => {
    axios.get('/api/login.json', {
      accout,
      psd
    }).then((res) => {
      console.log(res.data);
      if (res.data.status === 1) {
        dispatch(changeLogin())
      }
    }).catch(() => {
      console.error('登录错误');
      
    })
  }
}

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
})