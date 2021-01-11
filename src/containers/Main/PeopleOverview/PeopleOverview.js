import React from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import '../Main.scss';
import getPeopleOverviewStyles from './style';
import Select from '../../../components/Common/Select/Select';
import Input from '../../../components/Common/Input/Input';
import Button from '../../../components/Common/Button/Button';
import PeopleTable from '../../../components/PeopleTable/PeopleTable';

import * as filteredPeopleActions from '../../../store/filteredPeople/filteredPeople.actions';
import setValueFromSelect from '../../../store/valueFromSelect/valueFromSelect.actions';
import * as constants from '../../../constants/constants';

const useStyles = makeStyles(getPeopleOverviewStyles);

export default function PeopleOverview() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSelectAgeChange = (e) => dispatch(setValueFromSelect(constants.headCells.filter((obj) => obj.label === e.target.value)[0]));

  const handleInputNameChange = (e) => dispatch(filteredPeopleActions.setName(e.target.value));
  const handleInputLocationChange = (e) => dispatch(filteredPeopleActions.setLocation(e.target.value));

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
