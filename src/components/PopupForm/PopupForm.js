import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';

import Select from '../Common/Select/Select';
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button';
import getPopupFormStyles from './style';
import { roleOptions, url } from '../../constants/constants';
import  { service } from '../../services/Service';
import setAddPersonPopup from '../../store/addPersonPopup/addPersonPopup.actions';
import { getAllPeople } from '../../store/people/people.selector';

const useStyles = makeStyles(getPopupFormStyles);

export default function PopupForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [personToAdd, setPersonToAdd] = useState({
    avatar: '',
    firstName: '',
    lastName: '',
    role: '',
    lastLoggedIn: new Date().toDateString(),
    profileViews: 0,
    age: '',
    country: '',
    city: '',
    address: '',
    phone: '',
    company: '',
    connections: []
  });

  const addPerson = (e) => {
    e.preventDefault();
    service.post(url, personToAdd);
  }

  const closeModal = () => dispatch(setAddPersonPopup(false));

  const allPeople = useSelector(getAllPeople);

  const handleChangeConnectionsSelect = (value) => {
    setPersonToAdd({...personToAdd, connections: value});
  }

  const handleChangeRoleSelect = (value) => {
    setPersonToAdd({...personToAdd, role: value.label})
  }

  return (
    <form method="POST" action="/" onSubmit={addPerson}>
      <Typography color="textSecondary" variant="h5">Your firstname:</Typography>
      <Input
        className={classes.formControl}
        label="Firstname..."
        type="text"
        onChange={(e) => setPersonToAdd({...personToAdd, firstName: e.target.value})}
        value={personToAdd.firstName}
      />
      <Typography color="textSecondary" variant="h5">Your lastname:</Typography>
      <Input
        className={classes.formControl}
        label="Lastname..."
        type="text"
        onChange={(e) => setPersonToAdd({...personToAdd, lastName: e.target.value})}
        value={personToAdd.lastName}
      />
      <Typography color="textSecondary" variant="h5">Your role:</Typography>
      <Select
        className={classes.formControl}
        options={roleOptions.map((obj) => ({
          id: obj.id,
          label: obj.label,
          content: obj.label
        }))}
        label="Role..."
        onChange={handleChangeRoleSelect}
        value={personToAdd.role.id}
      />
      <Typography color="textSecondary" variant="h5">Your age:</Typography>
      <Input
        className={classes.formControl}
        label="Age..."
        type="number"
        onChange={(e) => setPersonToAdd({...personToAdd, age: +e.target.value})}
        value={personToAdd.age.toString()}
      />
      <Typography color="textSecondary" variant="h5">Your country:</Typography>
      <Input
        className={classes.formControl}
        label="Country..."
        type="text"
        onChange={(e) => setPersonToAdd({...personToAdd, country: e.target.value})}
        value={personToAdd.country}
      />
      <Typography color="textSecondary" variant="h5">Your city:</Typography>
      <Input
        className={classes.formControl}
        label="City..."
        type="text"
        onChange={(e) => setPersonToAdd({...personToAdd, city: e.target.value})}
        value={personToAdd.city}
      />
      <Typography color="textSecondary" variant="h5">Your address:</Typography>
      <Input
        className={classes.formControl}
        label="Address..."
        type="text"
        onChange={(e) => setPersonToAdd({...personToAdd, address: e.target.value})}
        value={personToAdd.address}
      />
      <Typography color="textSecondary" variant="h5">Your phone number:</Typography>
      <Input
        className={classes.formControl}
        label="Phone number..."
        type="text"
        onChange={(e) => setPersonToAdd({...personToAdd, phone: e.target.value})}
        value={personToAdd.phone}
      />
      <Typography color="textSecondary" variant="h5">Your company:</Typography>
      <Input
        className={classes.formControl}
        label="Company..."
        type="text"
        onChange={(e) => setPersonToAdd({...personToAdd, company: e.target.value})}
        value={personToAdd.company}
      />
      <Typography color="textSecondary" variant="h5">Your photo:</Typography>
      <Input
        className={classes.formControl}
        label="Link to photo..."
        type="url"
        onChange={(e) => setPersonToAdd({...personToAdd, avatar: e.target.value})}
        value={personToAdd.avatar}
      />
      <Typography color="textSecondary" variant="h5">Your connections:</Typography>
      <Select
        className={classes.formControl}
        options={allPeople.map((obj) => ({
          id: obj.id,
          fullName: obj.firstName + ' ' + obj.lastName,
          content: obj.firstName + ' ' + obj.lastName
        }))}
        label="Connections..."
        onChange={handleChangeConnectionsSelect}
        value={personToAdd.connections.map((obj) => obj.id)}
        multiple
      />
      <DialogActions>
        <Button onClick={closeModal} value="cancel" variant="outlined" type="button" />
        <Button onClick={closeModal} value="add" variant="contained" type="submit" />
      </DialogActions>
    </form>
  );
}
