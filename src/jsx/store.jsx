import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import rootReducer from './reducers';

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyC3imMOUNHSx83uZ5a8eU4A4YQLILzkoGo',
  authDomain: 'movieclub-21947.firebaseapp.com',
  databaseURL: 'https://movieclub-21947.firebaseio.com/',
  storageBucket: 'gs://movieclub-21947.appspot.com/'
}

// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
}

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, config)
)(createStore)

// Create store with reducers and initial state
export default createStoreWithFirebase(rootReducer)
