import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import { Map, fromJS } from 'immutable';

const logger = createLogger();
const initialState = Map(fromJS({}));

const enhancers = [
  applyMiddleware(ReduxThunk, logger)
];

const Store = createStore(rootReducer, initialState, compose(...enhancers));

export default Store;
