import React, { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import Switch from '../Common/Switch/Switch';

import Context from '../../utils/context';

export default function SwitchTheme() {
  const { darkMode, switchMode } = useContext(Context);

  return (
    <Grid component="label" container alignItems="center" spacing={1}>
      <Grid item>Light</Grid>
      <Grid item>
        <Switch
          checked={darkMode}
          onChange={switchMode}
        />
      </Grid>
      <Grid item>Dark</Grid>
    </Grid>
  );
}
