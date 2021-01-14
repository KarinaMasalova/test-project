import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';

import { getToolbarStyles } from './style';

const useStyles = makeStyles(getToolbarStyles);

export default function PeopleTableToolbar(props) {
  const { numSelected } = props;
  const classes = useStyles();

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected + ' '}
          selected
        </Typography>
      ) : (
        <Typography className={classes.title} color="secondary" variant="h4" id="tableTitle" component="div">
          Our people
        </Typography>
      )}

      { numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <div className={classes.addIconText}>Add person</div>
          <Link to="/add">
            <AddCircleOutlineSharpIcon className={classes.addIcon} />
          </Link>
        </>
      )}
    </Toolbar>
  );
}

PeopleTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
