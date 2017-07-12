import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Clients} from '../api/clients';
import AdminTitleBar from './AdminTitleBar';
import ClientList from './ClientList';
import AddClient from './AddClient';

export default () => {
    return (
      <div>
        <AdminTitleBar  />
        <ClientList />
        <AddClient />
      </div>
    );
  }


// Setup prop types. client should be a required object
// Client.propTypes = {
//   client: React.PropTypes.object.isRequired
// };
