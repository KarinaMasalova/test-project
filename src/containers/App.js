import React from "react";
import { Switch, Route } from 'react-router-dom';
import SwipeableRoutes from "react-swipeable-routes";

import { Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import getTheme from '../utils/theme';

import './App.scss';
import Header from './Header/Header';
import LawyersOverview from './Main/LawyersOverview/LawyersOverview';
import ChartsOverview from './Main/ChartsOverview/ChartsOverview';

export default function App() {
    const theme = getTheme();

    return (
      <ThemeProvider theme={theme}>
        <Paper square>
          <Header />
          <SwipeableRoutes>
            {/* <Switch> */}
            <Route path="/charts" component={ChartsOverview} />
            <Route path="/" component={LawyersOverview} />
            {/* </Switch> */}
          </SwipeableRoutes>
        </Paper>
      </ThemeProvider>
    );
}
