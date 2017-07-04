import React from 'react';
import Chart, {Line, Bar, Radar, PolarArea, Pie, Doughnut} from 'react-chartjs';

// from: https://ledsun.github.io/react-chartjs-example/bar/


export default class BarChart extends React.Component {
  render() {
    var data = [10, 25, 30, 25, 30, 10];
    return (
      <div>
        <Bar data={data} width="600" height="250" />
      </div>
    );
  }
};
