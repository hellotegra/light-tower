import React from 'react';
import {AreaChart, Area, linearGradient, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class SimpleAreaChart extends React.Component{
  render() {

const background = {background: '#1BC98E'};

const data = [
      {name: 'Jan', kWh: 2.81},
      {name: 'Feb', kWh: 2.54},
      {name: 'Mar', kWh: 2.56},
      {name: 'Apr', kWh: 3.04},
      {name: 'May', kWh: 2.91},
      {name: 'Jun', kWh: 3.46},
      {name: 'Jul', kWh: 4.63},
      {name: 'Aug', kWh: 4.30},
      {name: 'Sep', kWh: 3.99},
      {name: 'Oct', kWh: 3.35},
      {name: 'Nov', kWh: 2.97},
      {name: 'Dec', kWh: 3.15}
    ];
      return (
        <div>
          <div className="row">
            <div className="col-xs-12">
             <AreaChart width={360} height={200} data={data} >
               <XAxis dataKey="name"/>
               <YAxis/>
               <CartesianGrid />
               <Tooltip/>
               <Legend />
               <Area type="monotone" dataKey="kWh" fill="#60D9B0" stroke="steelblue" style={background} />
              </AreaChart>
            </div>
          </div>
        </div>
    );
  }
};
