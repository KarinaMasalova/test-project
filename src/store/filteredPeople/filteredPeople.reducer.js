const initialState = {
    name: '',
    location: '',
    filteredByNamePeople: [],
    filteredByLocationPeople: []
};

export default function filteredPeopleReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_FILTERED_BY_NAME_PEOPLE":
            return {
                ...state,
                filteredByNamePeople: action.payload
            }
        case "SET_FILTERED_BY_LOCATION_PEOPLE":
            return {
                ...state,
                filteredByLocationPeople: action.payload
            }
        default:
            return state;
    }
}
