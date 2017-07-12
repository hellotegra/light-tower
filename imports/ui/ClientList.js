import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Link} from 'react-router';


import {Clients} from './../api/clients';
import ClientListItem from './ClientListItem';

export default class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }
  componentDidMount() {
    console.log('hi clientList');
    // How are you able to make a "this.ClientTracker"? I'm simply unsure, July 7th
    // First, you pull down the Clients collection; then, you transfer to a const;
    // Finally, you populate state.clients as an array of the entire collection
    this.clientTracker = Tracker.autorun(() => {
      Meteor.subscribe('clientsPub');
      const clients = Clients.find().fetch();
      this.setState ({ clients });
    });
  }
  componentWillUnmount() {
    // Cleans stuff up on the way out; you're closing the ClientList component and the Tracker run
    console.log('bye bye clientList');
    this.clientTracker.stop();
  }
  onRtpClick() {
    this.setState({ rtpUser: !rtpUser });
    Meteor.call('clients.rtpUpdateupdate', this.props.client._id, this.props.client.rtpUser);
  }
  renderClientListItems() {
    return this.state.clients.map((client) => {
      const url = Meteor.absoluteUrl(client._id);
      return <ClientListItem key={client._id} url={url} {...client}/>;
    });
      // if (!client.rtpUser) {
      //   let rtpUser = false;
      // } else {
      //   let rtpUser = true;
      // }
    // });
    }
  render() {
    return (
      <div>
        <div className="container">
          <h3>Client List</h3>
          <table className="table table-bordered table-hover">
             <thead>
               <tr>
                 <td><strong>Name</strong></td>
                 <td><strong>Peak Load</strong></td>
                 <td><strong></strong></td>
                 {/* <td><strong>RTP User</strong></td> */}
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


//       {this.renderClientListItems()}

// </div> */}
