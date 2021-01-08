import { combineReducers } from 'redux';

import allLawyersReducer from "./lawyers/lawyers.reducer";
import errorSnackbarReducer from './errorSnackbar/errorSnackbar.reducer';
import valueFromSelectReducer from './valueFromSelect/valueFromSelect.reducer';
import filteredLawyersReducer from './filteredLawyers/filteredLawyers.reducer';

const rootReducer = combineReducers({
    allLawyersReducer,
    errorSnackbarReducer,
    valueFromSelectReducer,
    filteredLawyersReducer
});

export default rootReducer;
