const initialState = {
    allPeople: []
};

export default function alPeopleReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_ALL_PEOPLE":
            return {
                ...state,
                allPeople: action.payload
            }
        default:
            return state;
    }
}
