import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import SwipeableRoutes from "react-swipeable-routes";

import { Paper } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import getTheme from '../utils/theme';
import Context from '../utils/context';

import getAppStyles from '../styles';
import Header from './Header/Header';
import PeopleOverview from './Main/PeopleOverview/PeopleOverview';
import ChartsOverview from './Main/ChartsOverview/ChartsOverview';
import ErrorSnackbar from '../components/ErrorSnackbar/ErrorSnackbar';
import AddPersonPopup from "../components/AddPersonPopup/AddPersonPopup";

const useStyles = makeStyles(getAppStyles);

export default function App() {
  const theme = getTheme();
  const classes= useStyles();
  const isDarkMode = (theme) => theme.palette.type === 'dark';
  const [darkMode, setDarkMode] = useState(isDarkMode(theme));

  const switchMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!darkMode));
  }

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{darkMode, switchMode}}>
        <Paper square classes={classes}>
          <Header />
          <SwipeableRoutes>
            <Route exact path="/charts" component={ChartsOverview} />
            <Route exact path="/" component={PeopleOverview} />
          </SwipeableRoutes>
          <Switch>
            <Route path="/add" render={() => <AddPersonPopup />} />
          </Switch>
          <ErrorSnackbar />
        </Paper>
      </Context.Provider>
    </ThemeProvider>
  );
}
