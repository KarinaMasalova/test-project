import { combineReducers } from 'redux';

import peopleReducer from "./people/people.reducer";
import errorSnackbarReducer from './errorSnackbar/errorSnackbar.reducer';

const rootReducer = combineReducers({
    peopleReducer,
    errorSnackbarReducer
});

export default rootReducer;
