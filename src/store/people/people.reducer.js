const initialState = {
    allPeople: [],
    filteredPeople: []
};

export default function peopleReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_ALL_PEOPLE":
            return {
                ...state,
                allPeople: action.payload
            }
        case "SET_FILTERED_PEOPLE":
            return {
                ...state,
                filteredPeople: action.payload
            }
        default:
            return state;
    }
}
