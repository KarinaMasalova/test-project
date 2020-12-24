import React, { useState, useMemo, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';

import { Paper, Switch as Toggle } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';

export default function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useState(prefersDarkMode);

    useEffect(() => setDarkMode(prefersDarkMode), [prefersDarkMode]);

    const theme = useMemo(() =>
        createMuiTheme({
            palette: {
                type: darkMode ? 'dark' : 'light',
            },
        }),
        [darkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ height: "100vh" }}>
                <Header/>
                <Toggle
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <Switch>
                    <Route exact path="/" component={Main}/>
                    {/* <Route path="/planets" component={MainPlanets}/> */}
                    {/* <Route path="/charts" component={MainCharts}/> */}
                </Switch>
            </Paper>
        </ThemeProvider>
    );
}