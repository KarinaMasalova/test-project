import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import { getPeopleTableStyles } from './style';
import loadPeopleData from '../../utils/api';
import { getComparator, tableSort } from './sorting';
import PeopleTableHead from './PeopleTableHead';
import PeopleTableToolbar from './PeopleTableToolbar';

import { setAllPeople, setFilteredPeople } from '../../store/people/people.actions';
import { getFilteredPeople } from '../../store/people/people.selector';
import setErrorSnackbar from '../../store/errorSnackbar/errorSnackbar.actions';

const useStyles = makeStyles(getPeopleTableStyles);

export default function PeopleTable() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const allPeopleData = useSelector(getFilteredPeople);

  const isSelected = (name) => selected.findIndex((selectedValue) => name === selectedValue) !== -1;

  const convertTimeStamp = (value) => {
    const date = new Date(value * 1000);
    return date.toDateString();
  }

  useEffect(() => {
    loadPeopleData()
      .then((data) => {
        dispatch(setAllPeople(data));
        dispatch(setFilteredPeople(data));
      })
      .catch((error) => {
        Promise.reject(error);
        dispatch(setErrorSnackbar(true));
      });
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = allPeopleData.map((n) => n.firstName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.findIndex((selectedValue) => selectedValue === name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...newSelected, ...selected, name];
    } else if (selectedIndex === 0) {
      newSelected = [...newSelected, ...selected.slice(1)];
    } else if (selectedIndex === selected.length - 1) {
      newSelected = [...newSelected, ...selected.slice(0, -1)];
    } else if (selectedIndex > 0) {
      newSelected = [
        ...newSelected,
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, allPeopleData.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <PeopleTableToolbar numSelected={selected.length} />
        <TableContainer className={classes.table}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <PeopleTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={allPeopleData.length}
            />
            <TableBody>
              {tableSort(allPeopleData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((person, index) => {
                  const isItemSelected = isSelected(person.firstName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, person.firstName)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={person.firstName}
                      selected={isItemSelected}
                    >
                      <TableCell padding="default">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <img src={person.avatar} alt={person.lastName} className={classes.avatar} />
                      </TableCell>
                      <TableCell component="th" align="left" className={classes.tableCellName}>
                        {person.firstName + ' ' + person.lastName}
                      </TableCell>
                      <TableCell align="left">{person.role}</TableCell>
                      <TableCell align="left">{convertTimeStamp(person.lastLoggedIn)}</TableCell>
                      <TableCell align="left">{person.profileViews}</TableCell>
                      <TableCell align="left">{person.age}</TableCell>
                      <TableCell align="left">{person.country}</TableCell>
                      <TableCell align="left">{person.city}</TableCell>
                      <TableCell align="left">{person.address}</TableCell>
                      <TableCell align="left">{person.phone}</TableCell>
                      <TableCell align="left">{person.company}</TableCell>
                      <TableCell align="left">
                        {person.connections.length === 0 ? '' : person.connections.map((person) => person.fullName)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={allPeopleData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
