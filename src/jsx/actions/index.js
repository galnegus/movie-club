import { IS_LOADING_SIDEBAR, IS_LOADING_COMMENTS, IS_LOADING_ADD_COMMENT } from '../constants';

export const isLoadingSidebar = (value) => {
  return {
    type: IS_LOADING_SIDEBAR,
    value
  }
};

export const isLoadingComments = (value) => {
  return {
    type: IS_LOADING_COMMENTS,
    value
  }
};

export const isLoadingAddComment = (value) => {
  return {
    type: IS_LOADING_ADD_COMMENT,
    value
  }
};
