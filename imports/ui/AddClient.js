import React from 'react';
import {Tracker} from 'meteor/tracker';
import {Clients} from './../api/clients';
import Client from './Client';
import ClientList from './ClientList';

export default class AddClient extends React.Component {
  handleSubmit(e) {
    let clientName = e.target.clientName.value;
    e.preventDefault();
    if (clientName) {
      e.target.clientName.value = '';
      Clients.insert({
        name: clientName,
        peakLoad: 650
      });
    }
  }
  render() {
    return (
      <div>
        <h1>Client List</h1>
        <ClientList clients={clients} />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="clientName" placeholder="Client name"/>
          <input type="number" name="peakLoad" placeholder="100"/>
          <button>Add Client</button>
        </form>
      </div>
    );
  }
};
