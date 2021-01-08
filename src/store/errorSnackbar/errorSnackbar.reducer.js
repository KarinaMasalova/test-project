const initialState = {
    isErrorSnackbarOpened: false
};

export default function errorSnackbarReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_ERROR_SNACKBAR":
            return {
                ...state,
                isErrorSnackbarOpened: action.payload
            }
        default:
            return state;
    }
}
