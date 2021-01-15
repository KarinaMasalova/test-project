import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Select from '../Common/Select/Select';
import Input from '../Common/Input/Input';
import getPopupFormStyles from './style';
import { roleOptions } from '../../constants/constants';

const useStyles = makeStyles(getPopupFormStyles);

export default function PopupForm() {
  const classes = useStyles();

  const addPerson = (e) => {
    e.preventDefault();
    console.log('adding');
  }

  return (
    <form method="POST" onSubmit={addPerson}>
      <Typography color="textSecondary" variant="h5">Your firstname:</Typography>
      <Input
        className={classes.formControl}
        label="Firstname..."
        type="text"
      />
      <Typography color="textSecondary" variant="h5">Your lastname:</Typography>
      <Input
        className={classes.formControl}
        label="Lastname..."
        type="text"
      />
      <Typography color="textSecondary" variant="h5">Your role:</Typography>
      <Select
        className={classes.formControl}
        options={roleOptions.map((obj) => obj.label)}
        label="Role..."
      />
      <Typography color="textSecondary" variant="h5">Your age:</Typography>
      <Input
        className={classes.formControl}
        label="Age..."
        type="number"
      />
      <Typography color="textSecondary" variant="h5">Your country:</Typography>
      <Input
        className={classes.formControl}
        label="Country..."
        type="text"
      />
      <Typography color="textSecondary" variant="h5">Your city:</Typography>
      <Input
        className={classes.formControl}
        label="City..."
        type="text"
      />
      <Typography color="textSecondary" variant="h5">Your address:</Typography>
      <Input
        className={classes.formControl}
        label="Address..."
        type="text"
      />
      <Typography color="textSecondary" variant="h5">Your phone number:</Typography>
      <Input
        className={classes.formControl}
        label="Phone number..."
        type="number"
      />
      <Typography color="textSecondary" variant="h5">Your company:</Typography>
      <Input
        className={classes.formControl}
        label="Company..."
        type="text"
      />
    </form>
  );
}
