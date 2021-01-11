import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import getSelectStyles from './style';

const useStyles = makeStyles(getSelectStyles);

export default function SimpleSelect(props) {
  const { options, onChange, label, value } = props;
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel color="secondary">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        value={value}
        onChange={onChange}
        label={label}
        color="secondary"
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'None'} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

SimpleSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
