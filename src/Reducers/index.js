import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import headerReducer from './headerReducer';
import homeCarouselReducer from './homeCarouselReducer';

const allReducers = combineReducers({
    adminReducer,
    headerReducer,
    homeCarouselReducer
});

export default allReducers;