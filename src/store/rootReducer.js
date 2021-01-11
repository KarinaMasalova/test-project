import { combineReducers } from 'redux';

import peopleReducer from "./people/people.reducer";
import errorSnackbarReducer from './errorSnackbar/errorSnackbar.reducer';
import valueFromSelectReducer from './valueFromSelect/valueFromSelect.reducer';

const rootReducer = combineReducers({
    peopleReducer,
    errorSnackbarReducer,
    valueFromSelectReducer
});

export default rootReducer;
