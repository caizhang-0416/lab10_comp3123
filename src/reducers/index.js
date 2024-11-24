// src/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Import the userReducer

const rootReducer = combineReducers({
    user: userReducer, // Combine userReducer here
});

export default rootReducer;
