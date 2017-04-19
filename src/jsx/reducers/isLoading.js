import { combineReducers } from 'redux';
import { IS_LOADING_SIDEBAR, IS_LOADING_DISCUSSION } from '../constants';

const initialState = {
  sidebar: true,
  discussion: true,
}

const sidebar = (state = true, action) => {
  if (action.type === IS_LOADING_SIDEBAR)
    return action.value;
  return state;
}

const discussion = (state = true, action) => {
  if (action.type === IS_LOADING_DISCUSSION)
    return action.value;
  return state;
}

const isLoading = combineReducers({
  sidebar,
  discussion
});

export default isLoading;
