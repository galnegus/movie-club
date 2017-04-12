import { combineReducers } from 'redux';
import { DONE_LOADING_SIDEBAR, DONE_LOADING_COMMENTS, DONE_LOADING_ADD_COMMENT } from '../constants';

const initialState = {
  sidebar: false,
  comments: false,
  addComments: false
}

const sidebar = (state = false, action) => {
  if (action.type === DONE_LOADING_SIDEBAR)
    return true;
  return state;
}

const comments = (state = false, action) => {
  if (action.type === DONE_LOADING_COMMENTS)
    return true;
  return state;
}

const addComment = (state = false, action) => {
  if (action.type === DONE_LOADING_ADD_COMMENT)
    return true;
  return state;
}

const isLoading = combineReducers({
  sidebar,
  comments,
  addComment
});

export default isLoading;
