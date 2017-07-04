import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class StackedBar extends React.Component{
  render() {
const data = [
      {name: 'Jan', kWh: 1200, Demand: 2200},
      {name: 'Feb', kWh: 1200, Demand: 2200},
      {name: 'March', kWh: 1420, Demand: 2200},
      {name: 'April', kWh: 1620, Demand: 2200},
      {name: 'May', kWh: 1820, Demand: 2200},
      {name: 'June', kWh: 2220, Demand: 2200},
      {name: 'July', kWh: 2420, Demand: 2200},
      {name: 'Aug', kWh: 2120, Demand: 2200},
      {name: 'Sept', kWh: 1620, Demand: 2200},
      {name: 'Oct', kWh: 1400, Demand: 2200},
      {name: 'Nov', kWh: 1200, Demand: 2200},
      {name: 'Dec', kWh: 1200, Demand: 2200}
    ];
      return (
        <div>
          <div className="row">
            <div className="col-xs-12">
              <BarChart width={600} height={300} data={data}
                          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                     <XAxis dataKey="name"/>
                     <YAxis/>
                     <CartesianGrid strokeDasharray="3 3"/>
                     <Tooltip/>
                     <Legend />
                     <Bar dataKey="kWh" stackId="a" fill="aquamarine" />
                     <Bar dataKey="Demand" stackId="a" fill="steelblue" />
              </BarChart>
            </div>
          </div>
        </div>
    );
  }
};
