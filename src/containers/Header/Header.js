import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import getHeaderStyles from './style';
import HeaderOptionsMenu from '../../components/HeaderOptionsMenu/HeaderOptionsMenu';
import HeaderTabPanel from "../../components/HeaderTabPanel/HeaderTabPanel";

const useStyles = makeStyles(getHeaderStyles);

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <div className={classes.logo}>
        <span className={classes.logoImage} />
      </div>
      <HeaderTabPanel />
      <HeaderOptionsMenu />
    </header>
  );
}
