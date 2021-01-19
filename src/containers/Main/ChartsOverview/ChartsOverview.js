import React from "react";

import '../Main.scss';
import PieChart from '../../../components/PieChart/PieChart';
import BarChart from "../../../components/BarChart/BarChart";

export default function ChartsContent() {
  return (
    <main className="main">
      <div className="charts">
        <div className="charts_pie">
          <PieChart />
        </div>
        <div className="charts_bar">
          <BarChart />
        </div>
      </div>
    </main>
  );
}
