import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';

import Select from '../Common/Select/Select';
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button';
import getPopupFormStyles from './style';
import { roleOptions, url } from '../../constants/constants';
import Service from '../../utils/service';
import setAddPersonPopup from '../../store/addPersonPopup/addPersonPopup.actions';

const useStyles = makeStyles(getPopupFormStyles);

export default function PopupForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const service = new Service();
  const [personToAdd, setPersonToAdd] = useState({
    avatar: '',
    firstName: '',
    lastName: '',
    role: '',
    lastLoggedIn: '',
    profileViews: 0,
    age: '',
    country: '',
    city: '',
    address: '',
    phone: '',
    company: '',
    connections: ''
  });

  const addPerson = () => service.post(url, personToAdd);

  const closeModal = () => dispatch(setAddPersonPopup(false));

  return (
    <form method="POST" onSubmit={addPerson}>
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
        options={roleOptions.map((obj) => obj.label)}
        label="Role..."
        onChange={(e) => setPersonToAdd({...personToAdd, role: e.target.value})}
        value={personToAdd.role}
      />
      <Typography color="textSecondary" variant="h5">Your age:</Typography>
      <Input
        className={classes.formControl}
        label="Age..."
        type="number"
        onChange={(e) => setPersonToAdd({...personToAdd, age: e.target.value})}
        value={personToAdd.age}
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
      <Input
        className={classes.formControl}
        label="Link to photo..."
        type="url"
        onChange={(e) => setPersonToAdd({...personToAdd, avatar: e.target.value})}
        value={personToAdd.avatar}
      />
      <DialogActions>
        <Button onClick={closeModal} value="cancel" variant="outlined" type="button" />
        <Button onClick={closeModal} value="add" variant="contained" type="submit" />
      </DialogActions>
    </form>
  );
}
