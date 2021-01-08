import SET_ERROR_SNACKBAR from './errorSnackbar.actionTypes';

const setErrorSnackbar = (isOpen) => ({ type: SET_ERROR_SNACKBAR, payload: isOpen });

export default setErrorSnackbar;
