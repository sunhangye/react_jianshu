import * as actionTypes from './constants'
import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false,
});

// 不能直接修改state!
export default (state = defaultState, action) => {
  /**
   * immutable对象的set方法， 会结合之前immutable对象的值
   * 和设置的值，返回一个全新的对象
   */
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage);
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default: 
      return state
  }
  
  

  
}