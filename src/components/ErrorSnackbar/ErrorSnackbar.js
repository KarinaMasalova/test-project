/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import setErrorSnackbar from '../../store/errorSnackbar/errorSnackbar.actions';
import getErrorSnackbarStyles from './style';
import getErrorSnackbarState from '../../store/errorSnackbar/errorSnackbar.selector';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ErrorSnackbar() {
  const dispatch = useDispatch();
  const useStyles = makeStyles(getErrorSnackbarStyles);
  const classes = useStyles();
  const isSnackbarOpened = useSelector(getErrorSnackbarState);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    dispatch(setErrorSnackbar(false));
  };

  return (
    <Snackbar open={isSnackbarOpened} autoHideDuration={6000} onClose={handleClose} classes={classes}>
      <Alert onClose={handleClose} severity="error">
        The server is not responding!
      </Alert>
    </Snackbar>
  );
}
