import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import '../Main.scss';
import getPeopleOverviewStyles from './style';
import Select from '../../../components/Common/Select/Select';
import Input from '../../../components/Common/Input/Input';
import Button from '../../../components/Common/Button/Button';
import PeopleTable from '../../../components/PeopleTable/PeopleTable';
import setFilteredPeople from '../../../store/filteredPeople/filteredPeople.actions';

const useStyles = makeStyles(getPeopleOverviewStyles);

export default function PeopleOverview() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getAllPeople = (state) => state.allPeopleReducer.allPeople;
  const data = useSelector(getAllPeople);

  const getValueFromSelect = (state) => state.valueFromSelectReducer.valueFromSelect;
  const valueFromSelect = useSelector(getValueFromSelect);

  const handleChange = (event, field) => {
    event.preventDefault();
    const filteredData = data.filter((obj) => obj[field]
      .toString()
      .toLowerCase()
      .includes(event.target.value.toLowerCase()));
    dispatch(setFilteredPeople(filteredData));
  }

  return (
    <main className="main">
      <div className={classes.root}>
        <Select />
        <Input onChange={(e) => handleChange(e, valueFromSelect.id)} />
        <Button variant="contained" color="secondary" value="Search" />
        <Button variant="outlined" color="secondary" value="Reset filters" />
      </div>
      <PeopleTable />
    </main>
  );
}
