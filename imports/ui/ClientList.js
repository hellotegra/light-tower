import React from 'react';
import {Clients} from './../api/clients';
import {Tracker} from 'meteor/tracker';

// We've got to fix the table, otherwise we are finally mapping and passing shit through

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
      return <p key={client._id}>{client.clientName}</p>
    });
  }
  render() {
    return (
      <div>
        <h3>Client List</h3>
        <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <td>Client #</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{this.renderClientListItems()}</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
};

// ClientList.propTypes = {
//   clients: React.PropTypes.array.isRequired
// }
// {renderClients(Clients)}
