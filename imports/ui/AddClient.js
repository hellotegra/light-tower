import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddClient extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const clientName = this.refs.clientName.value.trim();
    const peakLoad = this.refs.peakLoad.value.trim();
    if (clientName) {
      Meteor.call('clients.insert', clientName, peakLoad);
      this.refs.clientName.value = "";
      this.refs.peakLoad.value = "";
    };
  }
  render() {
    return (
      <div>
        <p>Add Client</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="clientName" placeholder="Name of client" />
          <input type="number" ref="peakLoad" placeholder="0" />
          <button>Insert New Client</button>
        </form>
      </div>
    );
  }
}
