import React from 'react';
import PropTypes from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SimpleSelect(props) {
  const { options, onChange, label, value = '', className, multiple } = props;

  const handleChange = (e) => {
    const value = e.target.value; // array if multiple, else id
    let object;
    if (Array.isArray(value)) {
      object = value.map((val) => options.find((option) => option.id === val));
    } else {
      object = options.find((option) => option.id === value);
    }
    onChange(object);
  }

  return (
    <FormControl variant="outlined" className={className}>
      <InputLabel>{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        value={value}
        onChange={handleChange}
        label={label}
        multiple={multiple}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}> {/* value goes to e.target.value */}
            {option.content}
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
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  multiple: PropTypes.bool,
};
