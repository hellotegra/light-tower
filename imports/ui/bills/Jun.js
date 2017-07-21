import React from 'react';

export default class Jun extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <h6>June 1 - June 30, 2017</h6>
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
                <td>24,000 kWh</td>
                <td>8.694 ¢/kWh</td>
                <td>$2,086.56</td>
              </tr>
              <tr>
                <td></td>
                <td>Systems Benefit Charge</td>
                <td>24,000 kWh</td>
                <td>0.04 ¢/kWh</td>
                <td>$9.60</td>
              </tr>
              <tr>
                <td></td>
                <td>Enviromental Recovery Rider</td>
                <td>24,000 kWh</td>
                <td>0.79 ¢/kWh</td>
                <td>$189.60</td>
              </tr>
              <tr>
                <td></td>
                <td>Subtotal, Usage</td>
                <td></td>
                <td></td>
                <td>$2,286.76</td>
              </tr>
              <tr className="home-divider">
                <td colSpan="8"><b>DEMAND</b></td>
              </tr>
              <tr>
                <td></td>
                <td>Summer Demand, ComEd</td>
                <td>178.80 kW</td>
                <td>$8.173/kW</td>
                <td>$1,347.04</td>
              </tr>
              <tr>
                <td></td>
                <td>Annual Demand, ComEd</td>
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
                <td>$6,646.84</td>
              </tr>
            </tbody>
           </table>
          </div>
        </div>
      </div>
    );
  }
};
