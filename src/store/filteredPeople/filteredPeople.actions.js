import * as actionTypes from './filteredPeople.actionTypes';

export const setFilteredByNamePeople = (data) => ({ type: actionTypes.SET_FILTERED_BY_NAME_PEOPLE, payload: data });
export const setFilteredByLocationPeople = (data) => ({ type: actionTypes.SET_FILTERED_BY_LOCATION_PEOPLE, payload: data });
