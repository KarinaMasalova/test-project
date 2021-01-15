import React from 'react';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default function Btn(props) {
  const { variant, value, onClick, className, type, endIcon } = props;

  return (
    <div className={className}>
      <Button variant={variant} onClick={onClick} type={type} endIcon={endIcon}>
        {value}
      </Button>
    </div>
  );
}

Btn.propTypes = {
  variant: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  endIcon: PropTypes.node
};
