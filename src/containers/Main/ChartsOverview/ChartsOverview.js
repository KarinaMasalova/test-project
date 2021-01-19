import React from "react";
import { useSelector } from "react-redux";
import { CanvasJSChart } from 'canvasjs-react-charts';

import '../Main.scss';
// import { pieOptions } from '../../../constants/constants';
import { getAllPeople } from '../../../store/people/people.selector';
import roundNumber from '../../../utils/roundNumber';

export default function ChartsContent() {
  const allPeople = useSelector(getAllPeople);
  const allPeopleAmount = allPeople.length;
  const lawyersAmount = roundNumber(allPeople.filter((person) => person.role === 'lawyer').length * 100 / allPeopleAmount, 2);
  const clientsAmount = roundNumber(allPeople.filter((person) => person.role === 'client').length * 100 / allPeopleAmount, 2);

  const pieOptions = {
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "The Ratio of Lawyers to Clients",
    exportEnabled: true,
    title: {
        text: "The Ratio of Lawyers to Clients"
    },
    data: [{
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [
          { y: lawyersAmount, label: "Lawyers" },
          { y: clientsAmount, label: "Clients" },
        ],
    }]
  }

  return (
    <main className="main">
      <CanvasJSChart options={pieOptions} />
    </main>
  );
}
