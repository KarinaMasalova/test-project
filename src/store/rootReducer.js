import { combineReducers } from 'redux';

import peopleReducer from "./people/people.reducer";
import errorSnackbarReducer from './errorSnackbar/errorSnackbar.reducer';
import addPersonPopupReducer from './addPersonPopup/addPersonPopup.reducer';

const rootReducer = combineReducers({
    peopleReducer,
    errorSnackbarReducer,
    addPersonPopupReducer
});

export default rootReducer;
