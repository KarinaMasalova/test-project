import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import Select from '../Common/Select/Select';
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button';

import { setFilteredPeople } from '../../store/people/people.actions';
import { getAllPeople } from '../../store/people/people.selector';
import getFiltersBlockStyles from './style';
import { roleOptions, ageOptions } from '../../constants/constants';

const useStyles = makeStyles(getFiltersBlockStyles);

export default function PeopleOverview() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const allPeopleData = useSelector(getAllPeople);

    const [filters, setFilters] = useState({
        name: '',
        location: '',
        age: '',
        role: ''
    });

    useEffect(() => { filterTable() }, [filters]);

    const filterTable = () => {
      const ageMax = ageOptions.filter((obj) => obj.label === filters.age)[0];
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

    const handleResetButtonClick = () => setFilters({name: '', location: '', age: '', role: ''});

    return (
      <div className={classes.root}>
        <h1 className={classes.headline}>Our people</h1>
        <form className={classes.filters} noValidate autoComplete="off">
          <Input
            className={classes.formControl}
            onChange={(e) => handleFilterChange(e, 'name')}
            label="Name..."
            value={filters.name}
            type="text"
          />
          <Input
            className={classes.formControl}
            onChange={(e) => handleFilterChange(e, 'location')}
            label="Country / city..."
            value={filters.location}
            type="text"
          />
          <Select
            className={classes.formControl}
            options={ageOptions.map((obj) => obj.label)}
            onChange={(e) => handleFilterChange(e, 'age')}
            label="Age..."
            value={filters.age}
            type="number"
          />
          <Select
            className={classes.formControl}
            options={roleOptions.map((obj) => obj.label)}
            onChange={(e) => handleFilterChange(e, 'role')}
            label="Role..."
            value={filters.role}
            type="text"
          />
        </form>
        <Button
          variant="outlined"
          value="Reset filters"
          onClick={handleResetButtonClick}
          className={classes.resetButton}
          type="button"
        />
      </div>
    );
}
