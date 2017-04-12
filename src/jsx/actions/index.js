import { DONE_LOADING_SIDEBAR, DONE_LOADING_COMMENTS, DONE_LOADING_ADD_COMMENT } from '../constants';

export const doneLoadingSidebar = (component) => {
  return {
    type: DONE_LOADING_SIDEBAR,
  }
};

export const doneLoadingComments = (component) => {
  return {
    type: DONE_LOADING_COMMENTS,
  }
};

export const doneLoadingAddComment = (component) => {
  return {
    type: DONE_LOADING_ADD_COMMENT,
  }
};
