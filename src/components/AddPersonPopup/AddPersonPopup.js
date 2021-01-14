import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '../Common/Button/Button';

import getAddPersonPopupStyles from './style';

import getAddPersonPopupState from '../../store/addPersonPopup/addPersonPopup.selector';
import setAddPersonPopup from '../../store/addPersonPopup/addPersonPopup.actions';
import PopupForm from '../PopupForm/PopupForm';

const useStyles = makeStyles(getAddPersonPopupStyles);

export default function FormDialog() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpened = useSelector(getAddPersonPopupState);

  const closeModal = () => dispatch(setAddPersonPopup(false));

  return (
    <div>
      <Dialog open={isOpened} onClose={closeModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>Add person</DialogTitle>
        <DialogContent className={classes.description}>
          <DialogContentText>
            To add a person, please enter all the necessary information.
          </DialogContentText>
          <PopupForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="secondary" value="cancel" variant="outlined" type="button" className={classes.button} />
          <Button onClick={closeModal} color="secondary" value="add" variant="contained" type="submit" className={classes.button} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
