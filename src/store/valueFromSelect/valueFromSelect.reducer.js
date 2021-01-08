const initialState = {
    valueFromSelect: { label: '' }
};

export default function valueFromSelectReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_VALUE_FROM_SELECT":
            return {
                ...state,
                valueFromSelect: action.payload
            }
        default:
            return state;
    }
}
