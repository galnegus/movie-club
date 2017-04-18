import { IS_LOADING_SIDEBAR, IS_LOADING_DISCUSSION, IS_LOADING_ADD_COMMENT } from '../constants';

export const isLoadingSidebar = (value) => {
  return {
    type: IS_LOADING_SIDEBAR,
    value
  }
};

export const isLoadingDiscussion = (value) => {
  return {
    type: IS_LOADING_DISCUSSION,
    value
  }
};

export const isLoadingAddComment = (value) => {
  return {
    type: IS_LOADING_ADD_COMMENT,
    value
  }
};
