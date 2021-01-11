import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import '../Main.scss';
import getPeopleOverviewStyles from './style';
import Select from '../../../components/Common/Select/Select';
import Input from '../../../components/Common/Input/Input';
import Button from '../../../components/Common/Button/Button';
import PeopleTable from '../../../components/PeopleTable/PeopleTable';

import { setFilteredPeople } from '../../../store/people/people.actions';
import setValueFromSelect from '../../../store/valueFromSelect/valueFromSelect.actions';
import * as constants from '../../../constants/constants';
import { getAllPeople } from '../../../store/people/people.selector';

const useStyles = makeStyles(getPeopleOverviewStyles);

export default function PeopleOverview() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allPeopleData = useSelector(getAllPeople);

  let name = '';
  let location = '';

  const filter = () => {
    const filteredData = allPeopleData.filter((obj) => {
      return (obj.firstName.toLowerCase().includes(name.toLowerCase()) || obj.lastName.toLowerCase().includes(name.toLowerCase())) &&
      (obj.city.toLowerCase().includes(location.toLowerCase()) || obj.country.toLowerCase().includes(location.toLowerCase()))
    });
    dispatch(setFilteredPeople(filteredData));
  }

  const handleSelectAgeChange = (e) => dispatch(setValueFromSelect(constants.headCells.filter((obj) => obj.label === e.target.value)[0]));

  const handleInputNameChange = (e) => {
    name = e.target.value;
    filter();
  }

  const handleInputLocationChange = (e) => {
    location = e.target.value;
    filter();
  }

  return (
    <main className="main">
      <Input onChange={handleInputNameChange} label="Enter firstname / lastname..." />
      <Input onChange={handleInputLocationChange} label="Enter country / city..." />
      <div className={classes.root}>
        <Select options={constants.ageOptions} onChange={handleSelectAgeChange} label="Select age..." />
        <Select options={constants.roleOptions} onChange={handleSelectAgeChange} label="Select role..." />
      </div>
      <Button variant="outlined" color="secondary" value="Reset filters" />
      <PeopleTable />
    </main>
  );
}
