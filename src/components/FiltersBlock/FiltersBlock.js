import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import Select from '../Common/Select/Select';
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button';

import { setFilteredPeople } from '../../store/people/people.actions';
import { getAllPeople } from '../../store/people/people.selector';
import getFiltersBlockStyles from './style';
import * as constants from '../../constants/constants';

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

    const handleResetButtonClick = () => setFilters({name: '', location: '', age: '', role: ''});

    return (
      <div className={classes.root}>
        <h1 className={classes.headline}>Table filters</h1>
        <form className={classes.filters} noValidate autoComplete="off">
          <Input
            className={classes.formControl}
            onChange={(e) => handleFilterChange(e, 'name')}
            label="Enter firstname / lastname..."
            value={filters.name}
          />
          <Input
            className={classes.formControl}
            onChange={(e) => handleFilterChange(e, 'location')}
            label="Enter country / city..."
            value={filters.location}
          />
          <Select
            className={classes.formControl}
            options={constants.ageOptions.map((obj) => obj.label)}
            onChange={(e) => handleFilterChange(e, 'age')}
            label="Select age..."
            value={filters.age}
          />
          <Select
            className={classes.formControl}
            options={constants.roleOptions.map((obj) => obj.label)}
            onChange={(e) => handleFilterChange(e, 'role')}
            label="Select role..."
            value={filters.role}
          />
        </form>
        <Button variant="outlined" color="secondary" value="Reset filters" onClick={handleResetButtonClick} className={classes.resetButton} />
      </div>
    );
}
