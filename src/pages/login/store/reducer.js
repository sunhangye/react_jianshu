import { fromJS } from 'immutable'
import * as actionTypes from "./actionTypes";
const defaultStatus = fromJS ({
  login: false,
})

export default (state = defaultStatus, action) => {
  
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('login', action.value);
    case actionTypes.LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
}