const initialState = {
    allLawyers: []
};

export default function allPlanetsReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_ALL_LAWYERS":
            return {
                allLawyers: action.payload
            }
        default:
            return state;
    }
}
