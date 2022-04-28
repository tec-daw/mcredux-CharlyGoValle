import {combineReducers, CombineReducers} from 'redux';

import questionReducer from './counter';
import lightIsOnReducer from './light';

const rootReducer = combineReducers({
    question: questionReducer,
    light: lightIsOnReducer,
});

export default rootReducer;