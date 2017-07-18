import React from 'react';
import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';

export default class StackedBar extends React.Component{
  render() {
    const data = [
      {name: "kWh", value: 1200},
      {name: "Utility Demand", value: 720},
      {name: "PJM Demand", value: 601}
    ];
    const COLORS = ['#21A8E9', '#13CD8E', '#ED838E'];
      return (
        <div>
          <div className="row">
            <div className="col-xs-12">
              <PieChart width={200} height={200} data={data}
                margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Pie data={data} cx={80} cy={80} innerRadius={40} outerRadius={60} fill="aquamarine">
                  {
          	        data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <Tooltip/>
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
    );
  }
};
