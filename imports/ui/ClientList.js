import React from 'react';
import Client from './Client';
import {Clients} from './../api/clients';


export default class ClientList extends React.Component {
  renderClients() {
    return this.props.clients.map((client) => {
      return <Client key="client._id" client={client} />
    });
  }
  render() {
    return (
      <div>
        {this.renderClients()}
      </div>
    );
  }
};

// ClientList.propTypes = {
//   clients: React.PropTypes.array.isRequired
// }
// {renderClients(Clients)}
