import React from 'react';
import Client from './Client';
import {Clients} from './../api/clients';

const renderClients = (clientList) => {
  if (Clients.length === 0) {
    return <p>No Clients in Database.</p>;
  } else
  {
    return clientList.map((client) => {
      return <Client key={client._id} client={client}/>;
    });
  }
}

export default class ClientList extends React.Component {

  render() {
    return (
      <div>
        {renderClients(Clients)}
      </div>
    );
  }
};

// ClientList.propTypes = {
//   clients: React.PropTypes.array.isRequired
// }
