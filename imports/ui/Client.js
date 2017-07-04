import React from 'react';

import {Clients} from './../api/clients';

export default class Client extends React.Component {
  render() {
    return (
      <p key={this.props.client._id}>
        {this.props.client.name} has a peak load of {this.props.client.peakLoad} kW.
        <button onClick={() => Clients.remove(this.props.client._id)}>X</button>
      </p>
    );
  }
};

// Setup prop types. client should be a required object
// Client.propTypes = {
//   client: React.PropTypes.object.isRequired
// };
