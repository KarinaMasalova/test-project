import React, { useState } from "react";
import { Paper, Switch } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.scss';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

    const darkTheme = createMuiTheme({
        palette: {
            type: "dark"
        }
    });

    const lightTheme = createMuiTheme({
        palette: {
            type: "light"
        }
    });

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Paper style={{ height: "100vh" }}>
                <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
            </Paper>
        </ThemeProvider>
    );
}