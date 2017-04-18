import { combineReducers } from 'redux';
import isLoading from './isLoading';
import { firebaseStateReducer } from 'react-redux-firebase'
import {reducer as notifications} from 'react-notification-system-redux';

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  notifications,
  isLoading
});

export default rootReducer;
