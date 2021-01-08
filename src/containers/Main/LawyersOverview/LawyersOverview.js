import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import '../Main.scss';
import getLawyersOverviewStyles from './style';
import Select from '../../../components/Common/Select/Select';
import Input from '../../../components/Common/Input/Input';
import Button from '../../../components/Common/Button/Button';
import LawyersTable from '../../../components/LawyersTable/LawyersTable';
import setFilteredLawyers from '../../../store/filteredLawyers/filteredLawyers.actions';

const useStyles = makeStyles(getLawyersOverviewStyles);

export default function LawyersOverview() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getAllLawyers = (state) => state.allLawyersReducer.allLawyers;
  const data = useSelector(getAllLawyers);

  const getValueFromSelect = (state) => state.valueFromSelectReducer.valueFromSelect;
  const valueFromSelect = useSelector(getValueFromSelect);

  const handleChange = (event, field) => {
    event.preventDefault();
    const filteredData = data.filter((obj) => obj[field]
      .toString()
      .toLowerCase()
      .includes(event.target.value.toLowerCase()));
    dispatch(setFilteredLawyers(filteredData));
  }

  return (
    <main className="main">
      <div className={classes.root}>
        <Select />
        <Input onChange={(e) => handleChange(e, valueFromSelect.id)} />
        <Button variant="contained" color="secondary" value="Search" />
        <Button variant="outlined" color="secondary" value="Reset filters" />
      </div>
      <LawyersTable />
    </main>
  );
}
