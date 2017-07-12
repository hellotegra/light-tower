import React from 'react';
import Dashboard from './Dashboard';
import TitleBar from './TitleBar';
import StackedBar from './StackedBar';
import SimpleLine from './SimpleLine';
import SimpleAreaChart from './SimpleAreaChart';

var offsetStyle = {marginLeft: '80px'};
var offsetStyle2 = {marginLeft: '92px'};

export default class Home extends React.Component{
  render() {
      return (
        <div>
          <TitleBar />
          <div className="row">
            <div className="col-md-2 col-sm-1">
              <Dashboard />
            </div>
            <div className="container">
                <h4 style={offsetStyle}>2016 Real-Time Prices<small>  Chicago, IL</small></h4>
                <h6 style={offsetStyle2}>ALL FIGURES IN CENTS PER KWH</h6>
                <SimpleAreaChart />
            </div>
          </div>
        </div>
      );
  }
};
