import React, { useContext } from 'react';

import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import { Switch as Toggle } from '@material-ui/core';

import Context from '../../utils/context';

export default function Switch() {
    const { darkMode, switchMode } = useContext(Context);

    return (
      <FormGroup>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Light</Grid>
            <Grid item>
              <Toggle
                checked={darkMode}
                onChange={switchMode}
              />
            </Grid>
            <Grid item>Dark</Grid>
          </Grid>
        </Typography>
      </FormGroup>
    );
}
