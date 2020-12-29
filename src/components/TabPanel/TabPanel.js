import React, { useState } from "react";

import getTabPanelStyles from './styles';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useHistory } from 'react-router-dom';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const useStyles = makeStyles(getTabPanelStyles);
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch(newValue) {
      case 0:
        changePath('/');
        break;
      case 1:
        changePath('/planets');
        break;
      case 2:
        changePath('/charts');
        break;
      default: break;
    }
  }

  const handleChangeIndex = (index) => setValue(index);
  const changePath = (path) => history.push(path);

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
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Planets" {...a11yProps(1)} />
          <Tab label="Charts" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>Home</TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>Planets</TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>Charts</TabPanel>
      </SwipeableViews>
    </div>
  );
}
