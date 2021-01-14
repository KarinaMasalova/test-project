import React from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import getAddPersonPopupStyles from './style';
import Button from '../Common/Button/Button';
import PopupForm from '../PopupForm/PopupForm';

const useStyles = makeStyles(getAddPersonPopupStyles);

export default function AddPersonPopup() {
    const classes = useStyles();
    const history = useHistory();

    const closePopup = ()  => history.replace("/");
    const addPerson = () => console.log('adding');

    return createPortal(
      <>
        <div className={classes.overlay} />
        <div className={classes.popup}>
          <p className={classes.popupTitle}>Adding person</p>
          <PopupForm className={classes.form} />
          <div className={classes.buttons}>
            <Button variant="outlined" color="secondary" value="Cancel" className={classes.button} onClick={closePopup} />
            <Button variant="contained" color="secondary" value="Add" className={classes.button} onClick={addPerson} />
          </div>
        </div>
      </>, document.getElementById("portal")
    );
}
