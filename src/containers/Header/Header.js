import React from "react";

import './Header.scss';

import HeaderOptionsMenu from '../../components/HeaderOptionsMenu/HeaderOptionsMenu';
import HeaderTabPanel from "../../components/HeaderTabPanel/HeaderTabPanel";

export default function Header() {
    return (
      <header className="header">
        <div className="logo">
          <span className="logo__img" />
        </div>
        <HeaderTabPanel />
        <HeaderOptionsMenu />
      </header>
    );
}
