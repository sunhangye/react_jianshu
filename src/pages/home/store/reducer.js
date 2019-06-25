import { fromJS } from 'immutable';
import * as actionTypes from './constants'
const defaultState = fromJS ({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
});

export default (state = defaultState, action) => {
  console.log(action);
  
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
    case actionTypes.ADD_HOME_LIST:
      return state.merge({
        articleList: state.get('articleList').merge(action.result),
        articlePage: fromJS(action.nextpage)
      })
    default:
      return state;
  }
  
}