import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class SimpleLine extends React.Component{
  render() {
const data = [
      {name: 'Jan', kWh: 2.81},
      {name: 'Feb', kWh: 2.54},
      {name: 'March', kWh: 2.56},
      {name: 'April', kWh: 3.04},
      {name: 'May', kWh: 2.91},
      {name: 'June', kWh: 3.46},
      {name: 'July', kWh: 4.63},
      {name: 'Aug', kWh: 4.30},
      {name: 'Sept', kWh: 3.99},
      {name: 'Oct', kWh: 3.35},
      {name: 'Nov', kWh: 2.97},
      {name: 'Dec', kWh: 3.15}
    ];
      return (
        <div>
          <div className="row">
            <div className="col-xs-12">
              <LineChart width={200} height={100} data={data}
                          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                     <XAxis dataKey="name"/>
                     <YAxis/>
                     <CartesianGrid strokeDasharray="3 3"/>
                     <Tooltip/>
                     <Legend />
                     <Line type="monotone" dataKey="kWh" stroke="aquamarine" activeDot={{r:6}} />
              </LineChart>
            </div>
          </div>
        </div>
    );
  }
};
