import React from "react";
import { Switch, Route } from 'react-router-dom';

import { Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import getTheme from '../utils/theme';

import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';

export default function App() {
    const theme = getTheme();
    
    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ height: "100vh" }}>
                <Header />
                <Switch>
                    <Route path="/" component={Main} />
                </Switch>
            </Paper>
        </ThemeProvider>
    );
}
