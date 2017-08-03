import React from 'react';
import Dashboard from './Dashboard';
import TitleBar from './TitleBar';
import SimpleLine from './charts/SimpleLine';

export default class BillForm extends React.Component {

  _onSubmit(e) {

  }

  render() {
    return (
      <div>
        <TitleBar />
          <div className="row">
            <div className="col-md-2 col-sm-1">
              <Dashboard />
            </div>
            <div className="container">
              <div className="col-md-10 col-sm-11">
                <div className="dashhead">
                  <div className="dashhead-titles">
                    <h6 className="dashhead-subtitle">Admin</h6>
                    <h3 className="dashhead-title">Bill Input</h3>
                  </div>
                </div>
                <form onSubmit={this._onSubmit.bind(this)}>
                  <table className="table table-bordered table-hover table-condensed">
                    <thead>
                      <tr>
                        <th className="text-center">Line Item</th>
                        <th className="text-center">Amount</th>
                        <th className="text-center">Cost per Unit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="info">
                        <td></td>
                        <td className="text-center"><strong>USAGE</strong></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Real-Time kWh</td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="kWh" />
                          </div>
                        </td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="cents per kWh" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Distribution Charge</td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="kWh" />
                          </div>
                        </td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="cents per kWh" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Societal Benefits Charge</td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="kWh" />
                          </div>
                        </td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="cents per kWh" />
                          </div>
                        </td>
                      </tr>
                      <tr className="info">
                        <td></td>
                        <td className="text-center"><strong>DEMAND</strong></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Facilities Demand (Max)</td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="kW" />
                          </div>
                        </td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="$ per kW" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>On-Peak Demand</td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="kW" />
                          </div>
                        </td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="$ per kW" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Excess Off-Peak Demand</td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="kW" />
                          </div>
                        </td>
                        <td>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="$ per kW" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
            </div>
            <SimpleLine />
         </div>
       </div>
    </div>
    );
  }
};
