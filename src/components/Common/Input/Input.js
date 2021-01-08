import React from 'react';

import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import getInputStyles from './style';

const useStyles = makeStyles(getInputStyles);

export default function Input(props) {
  const classes = useStyles();
  const { onChange } = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-search"
        label="Search..."
        type="search"
        variant="outlined"
        color="secondary"
        onChange={onChange}
      />
    </form>
  );
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired
};
