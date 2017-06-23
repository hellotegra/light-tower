import React from 'react';

// from https://bootsnipp.com/snippets/OPvaM
export default class Home extends React.Component{
  render() {
      return (
        <div>
          <div className="container col-md-10">
            <div className="row">
            <div className="col-md-10">
        		 <table className="table table-condensed table-hover">
        			<thead>
        				<tr>
        					<th><strong>USAGE CHARGES</strong></th>
        					<th>Line Item</th>
        					<th>Amount</th>
        					<th>Cost per Unit</th>
                  <th>Total</th>
        				</tr>
        			</thead>
        			<tbody>
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
                  <td>$22.867/60</td>
                </tr>
                <tr className="divider">
                <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
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
                  <td>$22.867/60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

      );
  }
};
