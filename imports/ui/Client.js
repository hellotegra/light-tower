import React from 'react';

import {Clients} from './../api/clients';

export default class Client extends React.Component {
  render() {
    return (
      <p key={this.props.client._id}>
        Dummy Text
      </p>
    );
  }
};

// Setup prop types. client should be a required object
// Client.propTypes = {
//   client: React.PropTypes.object.isRequired
// };
