import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import useOutsideClick from "@rooks/use-outside-click";

import getAddPersonPopupStyles from './style';
import PopupForm from '../PopupForm/PopupForm';

const useStyles = makeStyles(getAddPersonPopupStyles);

export default function AddPersonPopup() {
    const classes = useStyles();
    const popupRef = useRef();

    // const closePopup = ()  => history.replace("/");
    // useOutsideClick(popupRef, closePopup);

    return createPortal(
      <>
        <div className={classes.overlay} />
        <div className={classes.popup} ref={popupRef}>
          <p className={classes.popupTitle}>Adding person</p>
          <PopupForm className={classes.form} />
        </div>
      </>, document.getElementById("portal")
    );
}
