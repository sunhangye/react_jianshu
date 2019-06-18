import * as actionTypes from './constants'

const defaultState = {
  focused: false,
};

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    
    
    return { // 返回一个新对象
      focused: true,
    }
  }
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return {
      focused: false,
    }
  }
  return state
}