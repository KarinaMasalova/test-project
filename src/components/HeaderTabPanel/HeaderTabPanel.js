/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import getTabPanelStyles from './styles';
import tabProps from '../../utils/headerTabs/tabProps';
import { PEOPLE_KEY, CHARTS_KEY } from '../../constants/constants';

export default function HeaderTabPanel() {
  const useStyles = makeStyles(getTabPanelStyles);
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(0);

  const changePath = (path) => history.push(path);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch(newValue) {
      case 0:
        changePath('/');
        break;
      case 1:
        changePath('/charts');
        break;
      default: break;
    }
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="people" {...tabProps(PEOPLE_KEY)} />
        <Tab label="charts" {...tabProps(CHARTS_KEY)} />
      </Tabs>
    </div>
  );
}
