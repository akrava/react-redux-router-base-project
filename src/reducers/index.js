import { combineReducers } from 'redux';
import clcokReducer from './showClock';

const rootReducer = combineReducers({
    clock: clcokReducer,
});

export default rootReducer;