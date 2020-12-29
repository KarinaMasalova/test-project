import React, { useState, useEffect } from 'react';

import getTheme from '../../utils/theme';

import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import { Switch as Toggle } from '@material-ui/core';

export default function Switch() {
    const theme = getTheme();
    const machineMode = (theme.palette.type === 'dark') ? true : false;

    const [darkMode, setDarkMode] = useState(machineMode);
    
    console.log('machineMode '+ machineMode);
    console.log('darkMode ' + darkMode);
    
    useEffect(() => {
        const mode = localStorage.getItem('isDarkMode');
        if (mode) {
            mode ? setDarkMode(true) : setDarkMode(false);
        } else {
            localStorage.setItem('isDarkMode', machineMode);
            setDarkMode(machineMode);
        }
    }, [machineMode]);

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('isDarkMode', !darkMode);
    };

    return (
        <FormGroup>
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>Light</Grid>
                    <Grid item>
                        <Toggle
                            checked={darkMode}
                            onChange={handleThemeChange}
                        />
                    </Grid>
                    <Grid item>Dark</Grid>
                </Grid>
            </Typography>
        </FormGroup>
    );
}
