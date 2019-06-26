import { fromJS } from 'immutable';
import * as actionTypes from './constants'
const defaultState = fromJS ({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  scrollTopShow: false,
});

export default (state = defaultState, action) => {
  
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
    case actionTypes.TOGGLE_TOP_SHOW:
      return state.set('scrollTopShow', action.show)
    default:
      return state;
  }
}
