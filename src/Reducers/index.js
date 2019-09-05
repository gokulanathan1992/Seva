import { combineReducers } from 'redux';
import headerReducer from './headerReducer';

const allReducers = combineReducers({
    headerReducer
});

export default allReducers;