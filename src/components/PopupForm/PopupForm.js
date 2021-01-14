import React from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Select from '../Common/Select/Select';
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button';
import getPopupFormStyles from './style';
import { roleOptions } from '../../constants/constants';

const useStyles = makeStyles(getPopupFormStyles);

export default function PopupForm(props) {
  const { className } = props;
  const classes = useStyles();
  const history = useHistory();

  const closePopup = ()  => history.replace("/");

  const addPerson = (e) => {
    e.preventDefault();
    console.log('adding');
  }

  return (
    <form className={className} method="POST" onSubmit={addPerson}>
      <Typography color="textSecondary" variant="h6">Your firstname:</Typography>
      <Input
        className={classes.formControl}
        label="Enter your firstname..."
      />
      <Typography color="textSecondary" variant="h6">Your lastname:</Typography>
      <Input
        className={classes.formControl}
        label="Enter your lastname..."
      />
      <Typography color="textSecondary" variant="h6">Your role:</Typography>
      <Select
        className={classes.formControl}
        options={roleOptions.map((obj) => obj.label)}
        label="Choose your role..."
      />
      <Typography color="textSecondary" variant="h6">Your age:</Typography>
      <Input
        className={classes.formControl}
        label="Enter your age..."
      />
      <Typography color="textSecondary" variant="h6">Your country:</Typography>
      <Input
        className={classes.formControl}
        label="Enter country..."
      />
      <Typography color="textSecondary" variant="h6">Your city:</Typography>
      <Input
        className={classes.formControl}
        label="Enter city..."
      />
      <Typography color="textSecondary" variant="h6">Your address:</Typography>
      <Input
        className={classes.formControl}
        label="Enter your address..."
      />
      <Typography color="textSecondary" variant="h6">Your phone number:</Typography>
      <Input
        className={classes.formControl}
        label="Enter your phone number..."
      />
      <Typography color="textSecondary" variant="h6">Your company:</Typography>
      <Input
        className={classes.formControl}
        label="Enter your company..."
      />
      <div className={classes.buttons}>
        <Button variant="outlined" color="secondary" value="Cancel" className={classes.oneButton} onClick={closePopup} type="button" />
        <Button variant="contained" color="secondary" value="Add" className={classes.oneButton} type="submit" />
      </div>
    </form>
  );
}

PopupForm.propTypes = {
  className: PropTypes.string.isRequired
}
