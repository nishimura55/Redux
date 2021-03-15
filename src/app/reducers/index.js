import { combineReducers } from 'redux';
import count from './count';
import post from './post';

const reducer = combineReducers({ count, post});

export default reducer;
