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
              <div className="centered-graph">
                <BarChart width={300} height={200} data={data}
                            margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                       <XAxis dataKey="name"/>
                       <YAxis/>
                       <CartesianGrid />
                       <Tooltip/>
                       <Legend />
                       <Bar dataKey="kWh" stackId="a" fill="#5FD7AE" />
                       <Bar dataKey="Demand" stackId="a" fill="steelblue" />
                </BarChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
