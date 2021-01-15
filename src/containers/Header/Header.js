import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import getHeaderStyles from './style';
import HeaderOptionsMenu from '../../components/HeaderOptionsMenu/HeaderOptionsMenu';
import HeaderTabPanel from "../../components/HeaderTabPanel/HeaderTabPanel";

const useStyles = makeStyles(getHeaderStyles);

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Link to="/" className={classes.logo}>
        <span className={classes.logoImage} />
      </Link>
      <HeaderTabPanel />
      <HeaderOptionsMenu />
    </header>
  );
}
