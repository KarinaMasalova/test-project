import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '../Common/Button/Button';

import { getToolbarStyles } from './style';
import setAddPersonPopup from '../../store/addPersonPopup/addPersonPopup.actions';

const useStyles = makeStyles(getToolbarStyles);

export default function PeopleTableToolbar(props) {
  const { numSelected } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

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
      ) : (<></>)}

      { numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Button
          variant="outlined"
          value="add person"
          endIcon={<AddCircleOutlineSharpIcon className={classes.addIcon} />}
          onClick={() => dispatch(setAddPersonPopup(true))}
          type="button"
        />
      )}
    </Toolbar>
  );
}

PeopleTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
