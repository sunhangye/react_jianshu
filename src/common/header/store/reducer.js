import * as actionTypes from './constants'
import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
});
const nested = fromJS({
  a: {
    b: {
      c: [3, 4, 5]
    }
  }
});
console.log(nested.getIn(['a', 'b', 'c']));

// 不能直接修改state!
export default (state = defaultState, action) => {
  /**
   * immutable对象的set方法， 会结合之前immutable对象的值
   * 和设置的值，返回一个全新的对象
   */
  if (action.type === actionTypes.SEARCH_FOCUS) {
    
    return state.set('focused', true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  return state
}