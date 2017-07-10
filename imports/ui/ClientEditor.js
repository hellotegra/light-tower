import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Clients} from '../api/clients';
import {createContainer} from 'meteor/react-meteor-data';
import AdminTitleBar from './AdminTitleBar';


 class ClientEditor extends React.Component {
   onSubmit(e) {
     const owner = this.refs.owner.value.trim();
     const revenue = this.refs.revenue.value.trim();
     e.preventDefault();
     if (owner || revenue) {
       Meteor.call('clients.insert', owner, revenue);
     };
   }
  render() {
      return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="owner" placeholder="Account Owner" />
          <input type="number" ref="revenue" placeholder="0" />
          <button>Update Client</button>
        </form>
      </div>
    );
  }
};

export default ClientEditor;
