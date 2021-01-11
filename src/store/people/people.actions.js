import * as actionTypes from './people.actionTypes';

export const setAllPeople = (payload) => ({ type: actionTypes.SET_ALL_PEOPLE, payload });
export const setFilteredPeople = (data) => ({ type: actionTypes.SET_FILTERED_PEOPLE, payload: data });
