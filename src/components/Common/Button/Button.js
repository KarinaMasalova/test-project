import React from 'react';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default function Btn(props) {
  const { variant, color, value, onClick, className } = props;

  return (
    <div className={className}>
      <Button variant={variant} color={color} onClick={onClick}>
        {value}
      </Button>
    </div>
  );
}

Btn.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  className: PropTypes.object.isRequired
};
