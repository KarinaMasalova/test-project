import React, { useState, useEffect } from "react";
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

export default function PeopleOverview() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allPeopleData = useSelector(getAllPeople);
  const [filters, setFilters] = useState({
    name: '',
    location: '',
    age: '',
    role: ''
  });

  useEffect(() => filterTable(), [filters]);

  const filterTable = () => {
    const ageMax = constants.ageOptions.filter((obj) => obj.label === filters.age)[0];
    const filteredData = allPeopleData.filter((obj) => {
      return (obj.firstName.toLowerCase().includes(filters.name.toLowerCase()) ||
          obj.lastName.toLowerCase().includes(filters.name.toLowerCase())) &&
        (obj.city.toLowerCase().includes(filters.location.toLowerCase()) ||
          obj.country.toLowerCase().includes(filters.location.toLowerCase())) &&
        (ageMax === undefined || obj.age < ageMax.maxValue) &&
        (filters.role === '' || obj.role === filters.role)
    });
    dispatch(setFilteredPeople(filteredData));
  }

  const handleFilterChange = (e, filter) => {
    const obj = { ...filters };
    obj[filter] = e.target.value;
    setFilters(obj);
  }

  return (
    <main className="main">
      <Input onChange={(e) => handleFilterChange(e, 'name')} label="Enter firstname / lastname..." />
      <Input onChange={(e) => handleFilterChange(e, 'location')} label="Enter country / city..." />
      <div className={classes.root}>
        <Select
          options={constants.ageOptions.map((obj) => obj.label)}
          onChange={(e) => handleFilterChange(e, 'age')}
          label="Select age..."
          value={filters.age}
        />
        <Select
          options={constants.roleOptions.map((obj) => obj.label)}
          onChange={(e) => handleFilterChange(e, 'role')}
          label="Select role..."
          value={filters.role}
        />
      </div>
      <Button variant="outlined" color="secondary" value="Reset filters" />
      <PeopleTable />
    </main>
  );
}
