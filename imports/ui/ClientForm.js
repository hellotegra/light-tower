import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Link} from 'react-router';

import {Clients} from './../api/clients';
// We've got to fix the table; otherwise, we are finally mapping and passing shit through

export default class ClientForm extends React.Component {
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
        <h6>ADD CLIENT</h6>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="clientName" placeholder="Name of client" />
          <input type="number" ref="peakLoad" placeholder="0" />
          <button>Insert New Client</button>
        </form>
      </div>
    );
  }
};
