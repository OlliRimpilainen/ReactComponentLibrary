import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';



function LineGraph () {
    return <VictoryChart>
    <VictoryLine
    style={{
        data: { stroke: "#c43a31" },
        parent: { border: "1px solid #ccc"}
      }}
    />
  </VictoryChart>
}



export default LineGraph;

  