const initialState = {
    isOpened: false
};

export default function addPersonPopupReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_ADD_PERSON_POPUP":
            return {
                ...state,
                isOpened: action.payload
            }
        default:
            return state;
    }
}
