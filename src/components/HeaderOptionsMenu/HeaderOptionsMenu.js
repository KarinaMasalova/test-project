import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import getMenuStyles from './styles';
import Switch from '../Switch/Switch';
import UserProfileIcon from '../UserProfileIcon/UserProfileIcon';

const options = [
  <Switch />
];

export default function HeaderOptionsMenu() {
  const useStyles = makeStyles(getMenuStyles);
  const classes = useStyles();

  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const handleClick = (event) => setAnchor(event.currentTarget);
  const handleClose = () => setAnchor(null);

  return (
    <div className={classes.root}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.icon}
      >
        <UserProfileIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchor}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{className: classes.style}}
      >
        {options.map((option) => (
          <MenuItem key={option} paperprops={{className: classes.style}}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
