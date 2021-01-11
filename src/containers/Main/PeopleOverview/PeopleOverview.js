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
import setValueFromSelect from '../../../store/valueFromSelect/valueFromSelect.actions';
import getAllPeople from '../../../store/people/people.selector';
import getValueFromSelect from '../../../store/valueFromSelect/valueFromSelect.selector';
import * as constants from '../../../constants/constants';

const useStyles = makeStyles(getPeopleOverviewStyles);

export default function PeopleOverview() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector(getAllPeople);
  const valueFromSelect = useSelector(getValueFromSelect);

  const options = [
    "None",
    "Firstname",
    "Lastname",
    "Role",
    "Country",
    "City",
    "Age"
  ]

  const handleSelectChange = (e) => dispatch(setValueFromSelect(constants.headCells.filter((obj) => obj.label === e.target.value)[0]));

  const handleInputChange = (event, field) => {
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
        <Select options={options} onChange={handleSelectChange} />
        <Input onChange={(e) => handleInputChange(e, valueFromSelect.id)} />
        <Button variant="contained" color="secondary" value="Search" />
        <Button variant="outlined" color="secondary" value="Reset filters" />
      </div>
      <PeopleTable />
    </main>
  );
}
