import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import getMenuStyles from './styles';
import Switch from '../Switch/Switch';

const options = [
  <Switch />
];

export default function HeaderOptionsMenu() {
  const useStyles = makeStyles(getMenuStyles);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className={classes.root}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{className: classes.style}}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} paperprops={{className: classes.style}}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
