// src/store/index.js
import { createStore } from 'redux';
import rootReducer from '../reducers'; // Import the rootReducer

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
