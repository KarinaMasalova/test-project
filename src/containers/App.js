import React, { useState, useMemo } from "react";
import { Paper, Switch } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.scss';

export default function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useState(prefersDarkMode);

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
                <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
            </Paper>
        </ThemeProvider>
    );
}