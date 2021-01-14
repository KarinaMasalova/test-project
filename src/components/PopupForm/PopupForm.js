import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Select from '../Common/Select/Select';
import Input from '../Common/Input/Input';
import getPopupFormStyles from './style';
import { roleOptions } from '../../constants/constants';

const useStyles = makeStyles(getPopupFormStyles);

export default function PopupForm(props) {
    const { className } = props;
    const classes = useStyles();

    return (
      <form className={className}>
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
      </form>
    );
}

PopupForm.propTypes = {
  className: PropTypes.string.isRequired
}
