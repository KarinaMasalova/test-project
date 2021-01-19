import React from 'react';

import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export default function Input(props) {
  const { onChange, label, value = '', className, type } = props;

  return (
    <FormControl variant="outlined" className={className}>
      <TextField
        id={label}
        label={label}
        type={type}
        variant="outlined"
        onChange={onChange}
        value={value}
      />
    </FormControl>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
