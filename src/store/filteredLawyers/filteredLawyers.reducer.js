const initialState = {
    filteredLawyers: []
};

export default function filteredLawyersReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_FILTERED_LAWYERS":
            return {
                ...state,
                filteredLawyers: action.payload
            }
        default:
            return state;
    }
}
