import { createStore , applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';


const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(logger,Thunk),
    // other store enhancers if any
  ));

export default store;


// for combining multiple reducers in redux we combineReducers funtion in redux