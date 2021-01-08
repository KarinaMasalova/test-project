import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import SwipeableRoutes from "react-swipeable-routes";

import { Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import getTheme from '../utils/theme';
import Context from '../utils/context';

import './App.scss';
import Header from './Header/Header';
import LawyersOverview from './Main/LawyersOverview/LawyersOverview';
import ChartsOverview from './Main/ChartsOverview/ChartsOverview';
import ErrorSnackbar from '../components/ErrorSnackbar/ErrorSnackbar';

export default function App() {
  const theme = getTheme();
  const isDarkMode = (theme) => theme.palette.type === 'dark';
  const [darkMode, setDarkMode] = useState(isDarkMode(theme));

  useEffect(() => {
    const mode =  JSON.parse(localStorage.getItem('isDarkMode'));
    if (mode === null || mode === undefined) {
      setDarkMode(isDarkMode(theme));
    } else {
      if (mode !== darkMode) {
        setDarkMode(mode);
      }
    }
  }, [theme]);

  const switchMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!darkMode));
  }

  return (
    <ThemeProvider theme={{...theme, palette: {...theme.palette, type:  darkMode ? 'dark' : 'light' } }}>
      <Context.Provider value={{darkMode, switchMode}}>
        <Paper square>
          <Header />
          <SwipeableRoutes>
            <Route exact path="/charts" component={ChartsOverview} />
            <Route exact path="/" component={LawyersOverview} />
          </SwipeableRoutes>
          <ErrorSnackbar />
        </Paper>
      </Context.Provider>
    </ThemeProvider>
  );
}
