import SET_FILTERED_LAWYERS from './filteredLawyers.actionTypes';

const setFilteredLawyers = (data) => ({ type: SET_FILTERED_LAWYERS, payload: data });

export default setFilteredLawyers;
