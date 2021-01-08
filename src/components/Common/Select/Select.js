import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import getSelectStyles from './style';
import setValueFromSelect from '../../../store/valueFromSelect/valueFromSelect.actions';
import * as constants from '../../../constants/constants';

const useStyles = makeStyles(getSelectStyles);

export default function SimpleSelect() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getValueFromSelect = (state) => state.valueFromSelectReducer.valueFromSelect;
  const valueFromSelect = useSelector(getValueFromSelect);

  const handleChange = (e) => dispatch(setValueFromSelect(constants.headCells.filter((obj) => obj.label === e.target.value)[0]));

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel color="secondary">Select...</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        value={valueFromSelect.label}
        onChange={handleChange}
        label="Select"
        color="secondary"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Firstname">Firstname</MenuItem>
        <MenuItem value="Lastname">Lastname</MenuItem>
        <MenuItem value="Role">Role</MenuItem>
        <MenuItem value="Country">Country</MenuItem>
        <MenuItem value="City">City</MenuItem>
        <MenuItem value="Age">Age</MenuItem>
      </Select>
    </FormControl>
  );
}
