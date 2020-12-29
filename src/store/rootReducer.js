import { combineReducers } from 'redux';

import allPlanetsReducer from '../store/planet/planet.reducer';

const rootReducer = combineReducers({
    allPlanetsReducer
});

export default rootReducer;
