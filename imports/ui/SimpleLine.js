import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class SimpleLine extends React.Component{
  render() {
const data = [
      {name: 'J', kWh: 2.81},
      {name: 'F', kWh: 2.54},
      {name: 'M', kWh: 2.56},
      {name: 'A', kWh: 3.04},
      {name: 'M', kWh: 2.91},
      {name: 'J', kWh: 3.46},
      {name: 'J', kWh: 4.63},
      {name: 'A', kWh: 4.30},
      {name: 'S', kWh: 3.99},
      {name: 'O', kWh: 3.35},
      {name: 'N', kWh: 2.97},
      {name: 'D', kWh: 3.15}
    ];
      return (
        <div>
          <div className="row">
            <div className="col-xs-12">
              <LineChart width={400} height={200} data={data}
                          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                     <XAxis dataKey="name"/>
                     <YAxis/>
                     {/* <CartesianGrid strokeDasharray="3 3"/> */}
                     <Tooltip/>
                     <Legend />
                     <Line type="monotone" dataKey="kWh" stroke="aquamarine" activeDot={{r:3}} />
              </LineChart>
            </div>
          </div>
        </div>
    );
  }
};
