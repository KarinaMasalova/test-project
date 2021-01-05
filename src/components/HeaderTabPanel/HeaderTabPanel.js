/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from "react";
import { Link , useHistory } from "react-router-dom";

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import getTabPanelStyles from './styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

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
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={<Link to="/">Lawyers</Link>} {...a11yProps(0)} />
          <Tab label={<Link to="/charts">Charts</Link>} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
    </div>
  );
}
