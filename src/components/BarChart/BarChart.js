import React from "react";
import { useSelector } from "react-redux";
import { CanvasJSChart } from 'canvasjs-react-charts';

import { getAllPeople } from '../../store/people/people.selector';

export default function BarChart() {
  const allPeople = useSelector(getAllPeople);
  const mapCollection = new Map();
  const pointsArray = [];

  allPeople.forEach((person) => {
    const countryPeople = mapCollection.get(person.country) || []; // [] if undefined
    mapCollection.set(person.country, [...countryPeople, {
        id: person.id,
        firstName: person.firstName,
        lastName: person.lastName
    }]);
  });

  for (const [key, value] of mapCollection) {
    pointsArray.push({ y: value.length, label: key });
  }

  const barOptions = {
    animationEnabled: true,
    theme: "dark2",
    title:{
        text: "People from Different Countries"
    },
    axisX: {
        title: "Countries",
        reversed: true,
    },
    axisY: {
        title: "People Amount",
        includeZero: true,
    },
    data: [{
        type: "bar",
        dataPoints: pointsArray
    }]
}

  return (
    <div>
      <CanvasJSChart options={barOptions} />
    </div>
  );
}
