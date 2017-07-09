import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Clients} from '../api/clients';
import AdminTitleBar from './AdminTitleBar';
import ClientList from './ClientList';

export default class Client extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  onSubmit(e) {
    const clientName = this.refs.clientName.value.trim();
    const peakLoad = this.refs.peakLoad.value.trim();
    e.preventDefault();
    if (clientName) {
      Meteor.call('clients.insert', clientName, peakLoad);
      this.refs.clientName.value = "";
      this.refs.peakLoad.value = "";
    };
  }
  render() {
    return (
      <div>
        <AdminTitleBar  />
        {/* <button onClick={this.onLogout.bind(this)}>Logout</button> */}
        <ClientList />
        <p>Add Client</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="clientName" placeholder="Name of client" />
          <input type="number" ref="peakLoad" placeholder="0" />
          <button>Insert New Client</button>
        </form>
      </div>
    );
  }
};

// Setup prop types. client should be a required object
// Client.propTypes = {
//   client: React.PropTypes.object.isRequired
// };
