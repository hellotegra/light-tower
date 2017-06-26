import React from 'react';
import Bill from './Bill';
import {Link} from 'react-router';

export default class Dashboard extends React.Component{
  render() {
      return (
        <div className="site-colors">
          <div className="container-fluid display-table">
          <div className="row display-table-row hidden-xs display-table-cell v-align box" id="navigation">
                  <div className="navi">
                      <ul>
                          <li className="active"><Link to="/dashboard"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></Link></li>
                          <li><Link to="/dashboard/bill"><i className="fa fa-briefcase" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Monthly Bill</span></Link></li>
                          <li><Link to="/dashboard/usage"><i className="fa fa-bar-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Usage Summary</span></Link></li>
                          <li><Link to="/dashboard/statistics"><i className="fa fa-line-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Statistics</span></Link></li>
                          <li><Link to="/dashboard/efficiency"><i className="fa fa-leaf" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Efficiency Steps</span></Link></li>
                          <li><Link to="/dashboard/carbonstats"><i className="fa fa-tachometer" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Carbon Stats</span></Link></li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
      );
  }
};
