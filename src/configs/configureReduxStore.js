import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers/index';
import thunk from 'redux-thunk';
import { redirect } from './../middlewares/redirect';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // recommended to delete on prod

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(redirect)
);

const store = createStore(rootReducer, enhancer);

export default store;