import React from 'react';

export default class May extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <h6>Dec 30, 2016 - Jan 30, 2017</h6>
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
              <tr className="home-divider">
                <td colSpan="8"><b>USAGE <small>& MISCELLANEOUS</small></b></td>
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
                <td>19,701 kWh</td>
                <td>8.694 ¢/kWh</td>
                <td>$1,712.80</td>
              </tr>
              <tr>
                <td></td>
                <td>Systems Benefit Charge</td>
                <td>19,701 kWh</td>
                <td>0.04 ¢/kWh</td>
                <td>$7.88</td>
              </tr>
              <tr>
                <td></td>
                <td>Enviromental Recovery Rider</td>
                <td>19,701 kWh</td>
                <td>0.719 ¢/kWh</td>
                <td>$141.65</td>
              </tr>
              <tr>
                <td></td>
                <td>Subtotal, Usage</td>
                <td></td>
                <td></td>
                <td>$1,873.68</td>
              </tr>
              <tr className="home-divider">
                <td colSpan="8"><b>DEMAND</b></td>
              </tr>
              <tr>
                <td></td>
                <td>Annual Demand, ComEd</td>
                <td>140.0 kW</td>
                <td>$4.404/kW</td>
                <td>$616.56</td>
              </tr>
              <tr>
                <td></td>
                <td>PJM Capacity</td>
                <td>124.0 kW</td>
                <td>$2.99/kW</td>
                <td>$370.76</td>
              </tr>
              <tr>
                <td></td>
                <td>PJM Network Transmission</td>
                <td>114.1 kW</td>
                <td>$2.96/kW</td>
                <td>$337.74</td>
              </tr>
              <tr>
                <td></td>
                <td>Subtotal, Demand</td>
                <td></td>
                <td></td>
                <td>$1,325.06</td>
              </tr>
              <tr className="divider">
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
                <td>$3,246.83</td>
              </tr>
            </tbody>
           </table>
          </div>
        </div>
      </div>
    );
  }
};
