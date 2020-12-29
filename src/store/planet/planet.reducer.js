const initialState = {
    allPlanets: []
};

export default function allPlanetsReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_ALL_PLANETS":
            return {
                allPlanets: action.payload
            }
        default:
            return state;
    }
}
