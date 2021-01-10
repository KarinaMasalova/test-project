import { combineReducers } from 'redux';

import allPeopleReducer from "./people/people.reducer";
import errorSnackbarReducer from './errorSnackbar/errorSnackbar.reducer';
import valueFromSelectReducer from './valueFromSelect/valueFromSelect.reducer';
import filteredPeopleReducer from './filteredPeople/filteredPeople.reducer';

const rootReducer = combineReducers({
    allPeopleReducer,
    errorSnackbarReducer,
    valueFromSelectReducer,
    filteredPeopleReducer
});

export default rootReducer;
