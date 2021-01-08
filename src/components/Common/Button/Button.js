import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import getButtonStyles from './style';

const useStyles = makeStyles(getButtonStyles);

export default function Btn(props) {
  const classes = useStyles();
  const { variant, color, value } = props;

  return (
    <div className={classes.root}>
      <Button variant={variant} color={color}>
        {value}
      </Button>
    </div>
  );
}

Btn.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
