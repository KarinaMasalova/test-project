import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import '../Main.scss';
import getPeopleOverviewStyles from './style';
import Select from '../../../components/Common/Select/Select';
import Input from '../../../components/Common/Input/Input';
import Button from '../../../components/Common/Button/Button';
import PeopleTable from '../../../components/PeopleTable/PeopleTable';

import { setFilteredPeople } from '../../../store/people/people.actions';
import { getAllPeople } from '../../../store/people/people.selector';
import * as constants from '../../../constants/constants';

const useStyles = makeStyles(getPeopleOverviewStyles);

let name = '';
let location = '';
let _age = null;
let _role = null;

export default function PeopleOverview() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allPeopleData = useSelector(getAllPeople);
  const [age, setAge] = useState({label: ''});
  const [role, setRole] = useState({label: ''});

  const filter = () => {
    const filteredData = allPeopleData.filter((obj) => {
      return (obj.firstName.toLowerCase().includes(name.toLowerCase()) || obj.lastName.toLowerCase().includes(name.toLowerCase())) &&
        (obj.city.toLowerCase().includes(location.toLowerCase()) || obj.country.toLowerCase().includes(location.toLowerCase())) &&
        (_age === null || obj.age < _age) &&
        (_role === null || obj.role === _role)
    });
    dispatch(setFilteredPeople(filteredData));
  }

  const handleSelectAgeChange = (e) => {
    const ageObj = constants.ageOptions.filter((obj) => obj.label === e.target.value)[0]
    _age = ageObj.maxValue;
    setAge(ageObj);
    filter();
  }

  const handleSelectRoleChange = (e) => {
    const roleObj = constants.roleOptions.filter((obj) => obj.label === e.target.value)[0];
    _role = roleObj.label;
    setRole(roleObj);
    filter();
  }

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
        <Select
          options={constants.ageOptions.map((obj) => obj.label)}
          onChange={handleSelectAgeChange}
          label="Select age..."
          value={age.label}
        />
        <Select
          options={constants.roleOptions.map((obj) => obj.label)}
          onChange={handleSelectRoleChange}
          label="Select role..."
          value={role.label}
        />
      </div>
      <Button variant="outlined" color="secondary" value="Reset filters" />
      <PeopleTable />
    </main>
  );
}
