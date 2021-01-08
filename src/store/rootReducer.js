import { combineReducers } from 'redux';

import allLawyersReducer from "./lawyers/lawyers.reducer";
import errorSnackbarReducer from './errorSnackbar/errorSnackbar.reducer';

const rootReducer = combineReducers({
    allLawyersReducer,
    errorSnackbarReducer
});

export default rootReducer;
