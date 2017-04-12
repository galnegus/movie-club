import { combineReducers } from 'redux';
import isLoading from './isLoading';
import { firebaseStateReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  isLoading
});

export default rootReducer;
