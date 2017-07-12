import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Clients} from '../api/clients';
import {createContainer} from 'meteor/react-meteor-data';
import AdminTitleBar from './AdminTitleBar';


class ClientEditor extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    Meteor.call('clients.update', this.props.client, owner);
    this.refs.owner.value = '';
  }
  render() {
      return (
      <div className="container">
        <p/>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="owner" placeholder="Account Owner" />
          {/* <input type="number" ref="revenue" placeholder="0" /> */}
          <button>Update Client</button>
        </form>
      </div>
    );
  }
};

export default ClientEditor;
