import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Clients} from '../api/clients';
import {createContainer} from 'meteor/react-meteor-data';
import AdminTitleBar from './AdminTitleBar';

class ClientEditor extends React.Component {
  onSubmit(e) {
    const clientName = this.refs.clientName.value.trim();
    const peakLoad = this.refs.peakLoad.value.trim();
    e.preventDefault();
    if (clientName) {
      Meteor.call('clients.update', clientName, peakLoad);
    };
  }
  render() {
    const client = this.props.client;
    console.log(this.props.client);
    console.log(this.props.params.clientId);
    console.log(this.props.params);
    return (
      <div className="container">
        <p>Edit {client.clientName}</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="clientName" placeholder="Name of client" />
          <input type="number" ref="peakLoad" placeholder="0" />
          <button>Insert New Client</button>
        </form>
      </div>
    );
  }
}

export default createContainer((props) => {
  const { clientId } = props.params;
  Meteor.subscribe('clients');

  return {client: Clients.findOne(clientId)};
}, ClientEditor);
