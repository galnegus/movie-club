import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'

// Add Firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseStateReducer
})

// Firebase config
const config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>'
}

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(config, { userProfile: 'users' }),
)(createStore)

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer, initialState)
