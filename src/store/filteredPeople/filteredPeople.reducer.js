const initialState = {
    filteredPeople: []
};

export default function filteredPeopleReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_FILTERED_PEOPLE":
            return {
                ...state,
                filteredPeople: action.payload
            }
        default:
            return state;
    }
}
