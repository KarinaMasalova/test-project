import React from "react";

import '../Main.scss';
import PeopleTable from '../../../components/PeopleTable/PeopleTable';
import FiltersBlock from '../../../components/FiltersBlock/FiltersBlock';

export default function PeopleOverview() {
  return (
    <main className="main">
      <FiltersBlock />
      <PeopleTable />
    </main>
  );
}
