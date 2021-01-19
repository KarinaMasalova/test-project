import React from "react";
import { useSelector } from "react-redux";
import { CanvasJSChart } from 'canvasjs-react-charts';

import { getAllPeople } from '../../store/people/people.selector';

export default function BarChart() {
  const allPeople = useSelector(getAllPeople);

  const set = new Set();
  const mapCollection = new Map();

  allPeople.map((person) => {
    set.add(person.country);
    mapCollection.set(`${person.country}`, [{
        id: person.id,
        firstName: person.firstName,
        lastName: person.lastName
    }]);
  });

  console.log(mapCollection);

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
        dataPoints: [
            { y:  2200000000, label: "Facebook" },
            { y:  1800000000, label: "YouTube" },
            { y:  800000000, label: "Instagram" },
            { y:  563000000, label: "Qzone" },
            { y:  376000000, label: "Weibo" },
            { y:  336000000, label: "Twitter" },
            { y:  330000000, label: "Reddit" }
        ]
    }]
}

  return (
    <div>
      <CanvasJSChart options={barOptions} />
    </div>
  );
}
