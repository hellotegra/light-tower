import React from 'react';

import {Clients} from './../api/clients';

// const renderClients = function(clientsList) {
  // return clientsList.map(function(client) {
  //   return <p key={client._id}>{client.name} has a peak load of {client.peakLoad} kW.</p>
  // });
// };

export default class AddClient extends React.Component {
  renderClients(clientsList) {
    return clientsList.map((client) => {
      return <p key={client._id}>{client.name} has a peak load of {client.peakLoad} kW.</p>
    });
  }
  handleSubmit(e) {
    let clientName = e.target.clientName.value;

    e.preventDefault();

    if (clientName) {
      e.target.clientName.value = '';
      Clients.insert({
        name: clientName,
        peakLoad: 1000
      });
    }
  }
  render() {
    return (
      <div>
        <h1>Client List</h1>
        {/* {this.renderClients(Clients)} */}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="clientName" placeholder="Client name"/>
          <input type="number" name="peakLoad" placeholder="100"/>
          <button>Add Client</button>
        </form>
      </div>
    );
  }
};
