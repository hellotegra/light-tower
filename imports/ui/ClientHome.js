import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Clients} from '../api/clients';
import {createContainer} from 'meteor/react-meteor-data';
import AdminTitleBar from './AdminTitleBar';
import ClientEditor from './ClientEditor';

// You need to
 class ClientHome extends React.Component {
  render() {
    console.log(this.props.client);
    console.log(this.props.params.clientName);
    return (
      <div>
        <AdminTitleBar  />
        <ClientEditor client={this.props.client} />

{/* This is the part where you need to subscribe to the specific Client */}
        <div>
          <p>This is where you subscribe and show the individual markdown</p>
          <p>You may need to do some digging on react-meteor-data to figure this out; I'm not sure.</p>
        </div>
      </div>
    );
  }
};

export default createContainer((props) => {
  const { clientName } = props.params;
  Meteor.subscribe('clients');

  return {client: Clients.findOne(clientName)};
}, ClientHome);
