import { combineReducers } from 'redux';

import allPlanetsReducer from "./planet/planet.reducer";

const rootReducer = combineReducers({
    allPlanetsReducer
});

export default rootReducer;
