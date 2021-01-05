import React from "react";

import '../Main.scss';
import LawyersTable from '../../../components/LawyersTable/LawyersTable';

export default function LawyersOverview() {
    return (
      <main className="main">
        <LawyersTable />
      </main>
    );
}
