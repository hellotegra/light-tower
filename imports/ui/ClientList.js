import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Link} from 'react-router';

import {Clients} from './../api/clients';
// We've got to fix the table; otherwise, we are finally mapping and passing shit through

export default class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }
  componentDidMount() {
    console.log('hi clientList');
    // How are you able to make a "this.linksTracker"? I'm simply unsure, July 7th
    this.clientTracker = Tracker.autorun(() => {
      Meteor.subscribe('clientsPub');
      const clients = Clients.find().fetch();
      this.setState ({ clients });
    });
  }
  componentWillUnmount() {
    // Cleans stuff up on the way out; you're closing the LinksList component and the Tracker run
    this.clientTracker.stop();
    console.log('bye bye clientList');
  }
  renderClientListItems() {
    return this.state.clients.map((client) => {
      return (
        <tr key={client._id}>
          <td>#</td>
          <td>{client.clientName}</td>
          <td>{client.peakLoad}</td>
          <td><Link to="/">View</Link></td>
          <td><Link to="/">Edit</Link></td>
        </tr>
        );
    });
  }
  render() {
    return (
      <div>
        <h3>Client List</h3>
        <div className="container">
          <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <td><strong>Client #</strong></td>
              <td><strong>Name</strong></td>
              <td><strong>Peak Load</strong></td>
              <td></td>
              <td></td>

            </tr>
          </thead>
          <tbody>
              {this.renderClientListItems()}
          </tbody>
          </table>
        </div>
      </div>
    );
  }
};

// ClientList.propTypes = {
//   clients: React.PropTypes.array.isRequired
// }
// {renderClients(Clients)}
