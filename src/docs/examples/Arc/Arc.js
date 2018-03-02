import React from 'react';
import ReactDOM from 'react-dom'
import { VictoryPie } from 'victory';
import { VictoryAnimation } from 'victory';
import { VictoryLabel } from 'victory';




class ExampleArc extends React.Component {
    constructor() {
      super();
      this.state = {
        percent: 100, data: this.getData(100)
      };
    }
  
    componentDidMount() {
        let percent = 25;
        this.setStateInterval = window.setInterval(() => {
          percent += (Math.random() * 25);
          percent = (percent > 100) ? 0 : percent;
          this.setState({
            percent, data: this.getData(percent)
          });
        }, 2000);
      }
    
      componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
      }
    
      getData(percent) {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
      }
    
      render() {
        return (
          <div>
            <svg viewBox="0 0 400 400" width="100%" height="100%">
              <VictoryPie
                standalone={false}
                startAngle={-140}
                endAngle={140}
                animate={{ duration: 1000 }}
                width={400} height={400}
                data={this.state.data}
                innerRadius={140}
                cornerRadius={25}
                labels={() => null}
                style={{
                  data: { fill: (d) => {
                    if (d.y < 50) {
                        const color = d.y = "#f34d25"
                    }

                    if (d.y > 60 && d.y< 80) {
                        const color = d.y = "#ffb500"
                    };
                    if (d.y > 80) {
                        const color = d.y = "#46b03b"
                    };

                    const color = d.y;
                    return d.x === 1 ? color : "transparent";
                  }
                  }
                }}
              />
              {/* <VictoryPie
                standalone={false}
                startAngle={-125}
                endAngle={125}
                animate={{ duration: 1000 }}
                width={400} height={400}
                data={100}
                innerRadius={140}
                cornerRadius={25}
                labels={() => null}
                style={{
                  data: { fill: (d) => {
                    const color = "grey";
                    return d.x === 1 ? color : "transparent";
                  }
                  }
                }}
              /> */}
              <VictoryAnimation duration={1000} data={this.state}>
                {(newProps) => {
                  return (
                    <VictoryLabel
                      textAnchor="middle" verticalAnchor="middle"
                      x={200} y={200}
                      text={`${Math.round(newProps.percent)}%`}
                      style={{ fontSize: 45 }}
                    />
                  );
                }}
              </VictoryAnimation>
            </svg>
          </div>
        );
      }
    }
    
  
export default ExampleArc;