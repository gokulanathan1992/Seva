import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import homeCarouselReducer from './homeCarouselReducer';

const allReducers = combineReducers({
    headerReducer,
    homeCarouselReducer
});

export default allReducers;