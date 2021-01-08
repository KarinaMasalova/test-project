import SET_VALUE_FROM_SELECT from './valueFromSelect.actionTypes';

const setValueFromSelect = (value) => ({ type: SET_VALUE_FROM_SELECT, payload: value });

export default setValueFromSelect;
