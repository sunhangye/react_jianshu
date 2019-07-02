import { fromJS } from 'immutable'
import * as actionTypes from "./actionTypes";
const defaultStatus = fromJS ({
  title: '',
  content: '',
})

export default (state = defaultStatus, action) => {
  
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.data.title,
        content: action.data.content
      })
    default:
      return state;
  }
}