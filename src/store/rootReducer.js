import { combineReducers } from 'redux';

import allLawyersReducer from "./lawyers/lawyers.reducer";

const rootReducer = combineReducers({
    allLawyersReducer
});

export default rootReducer;
