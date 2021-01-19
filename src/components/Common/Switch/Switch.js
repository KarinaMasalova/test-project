import React from 'react';

import PropTypes from 'prop-types';
import { Switch as Toggle } from '@material-ui/core';

export default function Switch(props) {
  const { checked, onChange } = props;

  return (
    <Toggle
      checked={checked}
      onChange={onChange}
    />
  );
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
