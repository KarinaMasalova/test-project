const initialState = {
    allPeople: []
};

export default function allPeopleReducer(state = initialState, action) {
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
