const initialState = {
    name: '',
    location: ''
};

export default function filteredPeopleReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "SET_LOCATION":
            return {
                ...state,
                location: action.payload
            }
        default:
            return state;
    }
}
