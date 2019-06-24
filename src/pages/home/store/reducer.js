import { fromJS } from 'immutable';

const defaultState = fromJS ({
  topicList: [],
  articleList: [],
  recommendList: [],
});

export default (state = defaultState, action) => {
  return state;
}