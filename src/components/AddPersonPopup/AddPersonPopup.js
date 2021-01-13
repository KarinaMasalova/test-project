import React from 'react';
import { createPortal } from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';

import getAddPersonPopupStyles from './style';
import Button from '../Common/Button/Button';

const useStyles = makeStyles(getAddPersonPopupStyles);

export default function AddPersonPopup() {
    const classes = useStyles();
    return createPortal(
      <>
        <div className={classes.overlay} />
        <div className={classes.popup}>
          <p className={classes.popupTitle}>Adding person</p>
          {/* <form className={}></form> */}
          <div className={classes.buttons}>
            <Button variant="outlined" color="secondary">Cancel</Button>
            <Button variant="contained" color="secondary">Add</Button>
          </div>
        </div>
      </>, document.getElementById("portal")
    );
}
