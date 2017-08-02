import React from 'react';
import { Meteor } from 'meteor/meteor';
import {browserHistory} from 'react-router';
import AdminTitleBar from './AdminTitleBar';

export default class AddInvoice extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const _id = this.props.params.clientId;
    console.log("Client's ID", _id);
    const clientHomeRoute = '/admin/' + this.props.params.clientId;
    const d1 = this.refs.d1.value.trim();
    const d2 = this.refs.d2.value.trim();
    const d1name = this.refs.d1name.value;
    const d2name = this.refs.d2name.value;
    const u1 = this.refs.u1.value.trim();
    const u2 = this.refs.u2.value.trim();
    const u1name = this.refs.u1name.value;
    const u2name = this.refs.u2name.value;
    const object = {
      d1: this.refs.d1.value.trim(),
      d2: this.refs.d2.value.trim(),
      d1name: this.refs.d1name.value,
      d2name: this.refs.d2name.value,
      u1: this.refs.u1.value.trim(),
      u2: this.refs.u2.value.trim(),
      u1name: this.refs.u1name.value,
      u2name: this.refs.u2name.value
    }
    console.log(object);
    if (object) {
      // 7/21, 9pm: the issue here is defining updates, and perhaps passing that spread operator stuff
      // from the Meteor method 'clients.addInvoice' in clients.js
      Meteor.call('clients.addInvoice', _id, d1, d2, u1, u2, d1name, d1name, u1name, u2name, (err, res) =>{
        console.log('error', err);
        console.log('response', res);
      });
      this.refs.d1.value = "";
      this.refs.d2.value = "";
      this.refs.d1name.value = "";
      this.refs.d2name.value = "";
      this.refs.u1.value = "";
      this.refs.u2.value = "";
      this.refs.u1name.value = "";
      this.refs.u2name.value = "";
      // browserHistory.push(clientHomeRoute);
    };
  }
  render() {
    // console.log("Params: ", this.props.params);
    // console.log("ClientId: ", this.props.params.clientId);
        return (
          <div>
            <AdminTitleBar />
            <div className="container">
              <h2>Add Invoice</h2>
              <h6>Next up: put Mobx in to pass through the customer name</h6>
              <h6>Wire this up to a 'clients.update' Meteor method</h6>
              <h6>Figure out the whole database thing</h6>
              <form onSubmit={this.onSubmit.bind(this)}>
                <div className="row">
                  <div className="form-group">
                    <div className="col-xs-2">Demand Charge 1 name</div>
                    <div className="col-xs-2">
                      <input type="text" ref="d1name" defaultValue="Utility Demand" />
                    </div>
                    <div className="col-xs-2">Demand Charge 1 value</div>
                    <div className="col-xs-2">
                      <input type="number" ref="d1" defaultValue="10" step="0.01"  />
                    </div>
                  </div>
                  </div>
                  <div className="row">
                    <div className="form-group">
                      <div className="col-xs-2">Demand Charge 2 name</div>
                      <div className="col-xs-2">
                        <input type="text" ref="d2name" defaultValue="On-Peak Demand" />
                      </div>
                      <div className="col-xs-2">Demand Charge 2 value</div>
                      <div className="col-xs-2">
                        <input type="number" ref="d2" defaultValue="5" step="0.01" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group">
                      <div className="col-xs-2">Usage Charge 1 name</div>
                      <div className="col-xs-2">
                        <input type="text" ref="u1name" defaultValue="kWh" />
                      </div>
                      <div className="col-xs-2">Usage Charge 1 value</div>
                      <div className="col-xs-2">
                        <input type="number" ref="u1" defaultValue="0.05" step="0.001" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group">
                      <div className="col-xs-2">Usage Charge 2 name</div>
                      <div className="col-xs-2">
                        <input type="text" ref="u2name" defaultValue="Fuel Cost Adjustment" />
                      </div>
                      <div className="col-xs-2">Usage Charge 2 value</div>
                      <div className="col-xs-2">
                        <input type="number" ref="u2" defaultValue="0.02" step="0.001" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <button className="btn btn-default">Submit Invoice</button>
                  </div>
              </form>
            </div>
      </div>
    );
  }
}
