import React from 'react';
import ClickableBar from 'ps-react/ClickableBar';
import { VictoryBar } from 'victory';

const data=[
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 6 }
];

class ExampleClickableBar extends React.Component {
  render() {
    return (
      <div>
      <h1>Click Me</h1>
      <VictoryBar
        style={{
          data: { fill: "green", fillOpacity: 0.3 }
        }}
        events={[{
          target: "data",
          eventHandlers: {
            onClick: () => {
              return [
                {
                  target: "data",
                  mutation: (props) => {
                    const fill = props.style && props.style.fill;
                    return fill === "black" ? null : { style: { fill: "black" } };
                  }
                }, {
                  target: "labels",
                  mutation: (props) => {
                    return props.text ? null : { text: "clicked" };
                  }
                }
              ];
            }
          }
        }]}
        data={data}
      />
</div>
    );
  }
}



export default ExampleClickableBar;