import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Clients} from '../api/clients';
import {createContainer} from 'meteor/react-meteor-data';
import AdminTitleBar from './AdminTitleBar';
import {browserHistory, Link} from 'react-router';
// import ClientEditor from './ClientEditor';

 class ClientHome extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       peakLoad: 0
     }
   }
   componentDidMount() {
     console.log("Post-cDM: " + this.props.params);
     console.log("Post-cDM: " + this.props.params.peakLoad);
     console.log("Post-cDM: " + this.props.params.clientId);
     const client = this.props.client;
     let peakLoad = this.props.client.peakLoad;
   }
   onChange(e) {
     this.setState({
       peakLoad: e.refs.peakLoad.value
     });
   }
   onSubmit(e) {
     e.preventDefault();
     const peakLoad = this.refs.peakLoad.value.trim();
     Meteor.call('clients.update', this.props.params.clientId, peakLoad);
     browserHistory.push('/admin');
   }
  render() {
    let utility = 'ComEd';
    let acctOwner = 'Kyle Barrough';
    let address1 = '1922 Whitehall Rd';
    let address2 = '';
    let city = 'Wilmette';
    let USstate = 'IL';
    let zip = '60091';
    const client = this.props.client;
    const addInvoiceRoute = '/admin/' + this.props.params.clientId + '/addInvoice';
    // let peakLoad = this.props.client.peakLoad;
    return (
      <div>
        <AdminTitleBar  />
        <div className="row">
          <div className="col-xs-3">
            <h3>{this.props.client.clientName}</h3>
            <p>{acctOwner}</p>
            <p>{address1}</p>
            {address2 ? <p>{address2}</p> : null}
            <p>{city}, {USstate} {zip}</p>
          </div>
          <div className="col-xs-6">
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">Last Month's Bill</a></li>
              <li role="presentation"><a href="#">Profile</a></li>
              <li role="presentation"><a href="#">Messages</a></li>
            </ul>
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
                 <tr className="home-divider">
                   <td colSpan="8"><b>DEMAND</b></td>
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
                   <td>$27,128.88</td>
                 </tr>
               </tbody>
              </table>
          </div>
        </div>
          <div className="container">
            <h1>Edit {this.props.client.clientName}</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
              <input type="number" ref="peakLoad"
                value={this.state.peakLoad}
                onChange={this.onChange.bind(this)}
               />
              <button>Update Client's Peak Load</button>
            </form>
            <div className="row">
              <div className="container">
                <p />
                <Link to={addInvoiceRoute}>Add Invoice</Link>
              </div>
            </div>
          </div>

      </div>
    );
  }
};

export default createContainer((props) => {
  const { clientName, peakLoad, clientId } = props.params;
  Meteor.subscribe('clients');

  return {client: Clients.findOne(clientId)};
}, ClientHome);
