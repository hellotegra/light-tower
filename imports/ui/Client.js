import React from 'react';
import ClientList from './ClientList';
import {Clients} from '../api/clients';

export default class Client extends React.Component {
  // onLogout() {
  //   Accounts.logout();
  // }
  onSubmit(e) {
    const clientName = this.refs.clientName.value.trim();
    e.preventDefault();
    if (clientName) {
      Clients.insert({ clientName });
      this.refs.clientName.value = "";
    };
  }
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Admin Section</h1>
        </div>
        {/* <button onClick={this.onLogout.bind(this)}>Logout</button> */}
        <ClientList />
        <p>Add Client</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="clientName" placeholder="Name of client" />
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
