import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger)));

export default store;