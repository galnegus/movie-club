import { combineReducers } from 'redux';
import { IS_LOADING_SIDEBAR, IS_LOADING_COMMENTS, IS_LOADING_ADD_COMMENT } from '../constants';

const initialState = {
  sidebar: true,
  comments: true,
  addComments: true
}

const sidebar = (state = true, action) => {
  if (action.type === IS_LOADING_SIDEBAR)
    return action.value;
  return state;
}

const comments = (state = true, action) => {
  if (action.type === IS_LOADING_COMMENTS)
    return action.value;
  return state;
}

const addComment = (state = true, action) => {
  if (action.type === IS_LOADING_ADD_COMMENT)
    return action.value;
  return state;
}

const isLoading = combineReducers({
  sidebar,
  comments,
  addComment
});

export default isLoading;
