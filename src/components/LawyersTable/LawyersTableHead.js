import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function EnhancedTableHead(props) {
  const headCells = [
    { id: 'firstname', disablePadding: false, label: 'Firstname' },
    { id: 'lastname', disablePadding: false, label: 'Lastname' },
    { id: 'avatar', disablePadding: false, label: 'Avatar' },
    { id: 'role', disablePadding: false, label: 'Role' },
    { id: 'lastLoggedIn', disablePadding: false, label: 'Last logged in' },
    { id: 'profileViews', disablePadding: false, label: 'Profile views' },
    { id: 'age', disablePadding: false, label: 'Age' },
    { id: 'country', disablePadding: false, label: 'Country' },
    { id: 'city', disablePadding: false, label: 'City' },
    { id: 'address', disablePadding: false, label: 'Address' },
    { id: 'phone', disablePadding: false, label: 'Phone number' },
    { id: 'company', disablePadding: false, label: 'Company' },
    { id: 'connections', disablePadding: false, label: 'Connections' },
  ];

  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all lawyers' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
