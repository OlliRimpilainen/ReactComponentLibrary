import React from 'react';

import { VictoryChart, VictoryArea } from 'victory';







const data=[
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 6 }
  ];


  
  export default function ExampleVictoryLine () {
    return <VictoryChart
    height={200}>
    <VictoryArea     
    data={data}
    style={{
        data: {fill: "green", fillOpacity: 0.3, strokeWidth: 0.3},
        parent: { border: "1px solid #ccc"},
      }}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}


    />
  </VictoryChart>
}

