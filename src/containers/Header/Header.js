import React from "react";

import './Header.scss';

import Menu from '../../components/Menu/Menu';

import Tabs from "../../components/TabPanel/TabPanel";

export default function Header() {
    return (
      <header className="header">
        <div className="logo">
          <span className="logo__img" />
        </div>
        <Tabs />
        <Menu />
      </header>
    );
}
