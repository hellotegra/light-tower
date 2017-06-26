import React from 'react';
import Dashboard from './Dashboard';
import TitleBar from './TitleBar';

// from https://bootsnipp.com/snippets/OPvaM
export default class Bill extends React.Component{
  render() {
      return (
        <div>
          <TitleBar />
          <div className="row">
          <div className="col-md-2 col-sm-1">
            <Dashboard />
          </div>
          <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <div className="user-dashboard">
                <div className="row">
                  <div className="page-header">
                    <h1>Electric Bill Summary <small>PSE&G Large Power & Light rate</small></h1>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    May 28 - July 1, 2017   <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">April 2017</a></li>
                    <li><a href="#">March 2017</a></li>
                    <li><a href="#">Feb 2017</a></li>
                    <li><a href="#">Jan 2017</a></li>
                    <li><a href="#">Dec 2016</a></li>
                    <li><a href="#">Nov 2016</a></li>
                    <li><a href="#">Oct 2016</a></li>
                    <li><a href="#">Sept 2016</a></li>
                    <li><a href="#">Aug 2016</a></li>
                    <li><a href="#">July 2016</a></li>
                    <li><a href="#">June 2016</a></li>
                  </ul>
                </div>
                <div className="row">
                <div className="col-md-10">
            		 <table className="table table-condensed table-hover">
            			<thead>
            				<tr>
            					<th></th>
            					<th>Line Item</th>
            					<th>Amount</th>
            					<th>Cost per Unit</th>
                      <th>Total</th>
            				</tr>
            			</thead>
            			<tbody>
                    <tr class="home-divider">
            				  <td colspan="8"><b>USAGE <small>& MISCELLANEOUS</small></b></td>
        				    </tr>
            				<tr>
                      <td></td>
                      <td>Service Charge</td>
            					<td></td>
            					<td></td>
            					<td>$59.24</td>
            				</tr>
                    <tr>
                      <td></td>
                      <td>Fuel Charge</td>
                      <td>240,000 kWh</td>
                      <td>8.694 cents/kWh</td>
                      <td>$20,865.60</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Systems Benefit Charge</td>
                      <td>240,000 kWh</td>
                      <td>0.04 cents/kWh</td>
                      <td>$96.00</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Enviromental Recovery Rider</td>
                      <td>240,000 kWh</td>
                      <td>0.79 cents/kWh</td>
                      <td>$1,896.00</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Subtotal, Usage</td>
                      <td></td>
                      <td></td>
                      <td>$22.867.60</td>
                    </tr>
                    <tr class="divider">
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr class="home-divider">
            				  <td colspan="8"><b>DEMAND</b></td>
        				    </tr>
                    <tr>
                      <td></td>
                      <td>Summer Demand, PSE&G</td>
                      <td>178.80 kW</td>
                      <td>$8.173/kW</td>
                      <td>$1,347.04</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Annual Demand, PSE&G</td>
                      <td>178.80 kW</td>
                      <td>$4.404/kW</td>
                      <td>$644.08</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>PJM Capacity</td>
                      <td>118.20 kW</td>
                      <td>$5.39/kW</td>
                      <td>$671.27</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>PJM Network Transmission</td>
                      <td>114.00 kW</td>
                      <td>$7.16/kW</td>
                      <td>$899.61</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Subtotal, Demand</td>
                      <td></td>
                      <td></td>
                      <td>$4,360.28</td>
                    </tr>
                    <tr class="divider">
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Total</td>
                      <td></td>
                      <td></td>
                      <td>$27,128.88</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
      );
  }
};
