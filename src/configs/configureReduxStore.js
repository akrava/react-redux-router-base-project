import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers/index';
import thunk from 'redux-thunk';
import { redirect } from './../middlewares/redirect';

let reduxDevtool = null;

if (process.env['NODE_ENV'] !== 'production') {
    reduxDevtool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const composeEnhancers = reduxDevtool || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(redirect)
);

const store = createStore(rootReducer, enhancer);

export default store;