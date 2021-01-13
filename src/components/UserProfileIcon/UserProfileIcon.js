import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import getProfileIconStyles from './style';

const useStyles = makeStyles(getProfileIconStyles);

export default function UserProfileIcon() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <span />
      </div>
    );
}