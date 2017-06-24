import React from 'react';
import Home from './Home';

export default class Dashboard extends React.Component{
  render() {
      return (
        <div>
          <div className="container-fluid display-table">
          <div className="row display-table-row">
              <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                  <div className="navi">
                      <ul>
                          <li className="active"><a href="#"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></a></li>
                          <li><a href="#"><i className="fa fa-briefcase" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Monthly Bill</span></a></li>
                          <li><a href="#"><i className="fa fa-bar-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Usage Summary</span></a></li>
                          <li><a href="#"><i className="fa fa-line-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Statistics</span></a></li>
                          <li><a href="#"><i className="fa fa-leaf" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Efficiency Steps</span></a></li>
                          <li><a href="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">User Settings</span></a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-md-10 col-sm-11 display-table-cell v-align">
                  <div className="user-dashboard">
                      {/* This is where the routing stuff goes */}
                      <Home />
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
