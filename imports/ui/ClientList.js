import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router';
import {Clients} from './../api/clients';
import ClientListItem from './ClientListItem';

// Meteor Session:
// import {Session} from 'meteor/session';
// Session.set('name', 'Evan Berger');
// const name = Session.get('name');
// console.log('Name: ', name);

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }
  renderClientListItems() {
    return this.props.clients.map((client) => {
      const url = Meteor.absoluteUrl("admin/" + client._id);
      return <ClientListItem key={client._id} url={url} {...client}/>;
    });
  }
  render() {
    console.log(this.props.clients);
    return (
      <div>
        <div className="container">
          <h3>Client List</h3>
          <table className="table table-bordered table-hover">
             <thead>
               <tr>
                 <td><strong>Name</strong></td>
                 <td><strong>Peak Load</strong></td>
                 <td><strong>RTP User</strong></td>
                 <td></td>
                 <td><strong>Supply Contract</strong></td>
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

export default createContainer(() => {
  Meteor.subscribe('clientsPub');
  // whatever we return from the function will show up as props
  return { clients: Clients.find({}).fetch() };
}, ClientList);

// ClientList.propTypes = {
//   clients: React.PropTypes.array.isRequired
// }
