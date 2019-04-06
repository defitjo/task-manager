import { combineReducers } from 'redux';
import {firestoreReducer} from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authenticationReducer from "./authenticationReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  auth: authenticationReducer,
  task: taskReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;

