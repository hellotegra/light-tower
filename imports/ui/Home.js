import React from 'react';
import Dashboard from './Dashboard';
import TitleBar from './TitleBar';
import SimplePie from './SimplePie';
import StackedBar from './StackedBar';
import SimpleAreaChart from './SimpleAreaChart';

var offsetStyle = {marginLeft: '80px'};
var offsetStyle2 = {marginLeft: '92px', color: 'grey'};
var offsetStyle2 = {marginLeft: '62px'};

export default class Home extends React.Component{
  render() {
      return (
        <div>
          <TitleBar />
          <div className="row">
            <div className="col-md-2 col-sm-1">
              <Dashboard />
            </div>
            <div className="col-md-10 col-sm-11">
              <div className="row">
                <div className="page-header">
                  <h1>Loyola High School <small>Willamette, IL</small></h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12 thumbnail">
                  <div className="center-block text-center">
                    <SimpleAreaChart />
                  </div>
                    <div className="caption">
                      <h4 className="center-block text-center">2016 Real-Time Prices<small>  Chicago, IL</small></h4>
                      <p className="center-block text-center">ALL FIGURES IN CENTS PER KWH</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 thumbnail">
                  <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="col-xs-8">
                      <SimplePie />
                    </div>
                    <div className="col-xs-2"></div>
                  </div>
                  <div className="caption">
                    <h4 className="center-block text-center">June 2016 Spend</h4>
                    <p className="center-block text-center">TOTAL COST: $2,521</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 thumbnail">
                  <div className="center-block text-center">
                    <StackedBar />
                  </div>
                  <div className="caption">
                    <h4 className="center-block text-center">2016 Electric Spend</h4>
                    <p className="center-block text-center">BY MONTH</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2"></div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="panel panel-success">
                    <div className="panel-heading">
                      <h6>ELECTRICITY CONSUMPTION</h6>
                      <h1>
                        <small><span className="glyphicon glyphicon-chevron-up"></span></small>
                        3.1%
                    </h1>
                    <span>last month vs. June 2016</span>
                    </div>
                    <div id="dashboard-panel-body" className="panel body">
                      <p><i>June 2016: 174,660 kWh</i></p>
                      <p><i>June 2015: 180,209 kWh</i></p>
                      <p><small>4.6% more efficient adjusted for weather</small></p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h6>REAL-TIME PRICE</h6>
                      <h1>
                        <small><span className="glyphicon glyphicon-chevron-down"></span></small>
                        0.1%
                    </h1>
                    <span>YTD vs. 2016td</span>
                    </div>
                    <div id="dashboard-panel-body" className="panel body">
                      <p><i>First six months: 3.71 cents</i></p>
                      <p><i>Six months 2015: 3.74 cents</i></p>
                      <p><small>Approx. 8-12% lower than fixed price (4.8-5.0 cents)</small></p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-2"></div>
                </div>
            </div>
          </div>
        </div>
      );
  }
};
