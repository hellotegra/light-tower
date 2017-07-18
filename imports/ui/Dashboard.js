import React from 'react';
import Bill from './Bill';
import {Link} from 'react-router';

export default class Dashboard extends React.Component{
  render() {
      return (
        <div>
          <div>
            <ul className="nav nav-pills nav-stacked">
                <li className="presentation"><Link to="/dashboard"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Home</span></Link></li>
                <li className="presentation"><Link to="/dashboard/bill"><i className="fa fa-usd" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Monthly Bill</span></Link></li>
                <li className="presentation"><Link to="/dashboard/usage"><i className="fa fa-building-o" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Usage Summary</span></Link></li>
                <li className="presentation"><Link to="/dashboard/statistics"><i className="fa fa-line-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Statistics</span></Link></li>
                <li className="presentation"><Link to="/dashboard/efficiency"><i className="fa fa-leaf" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Efficiency Steps</span></Link></li>
                <li className="presentation"><Link to="/dashboard/carbonstats"><i className="fa fa-tachometer" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Carbon Stats</span></Link></li>
            </ul>
          </div>
        </div>
      );
  }
};
