import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Clients} from '../api/clients';
import {createContainer} from 'meteor/react-meteor-data';
import AdminTitleBar from './AdminTitleBar';
// import ClientEditor from './ClientEditor';

 class ClientHome extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       peakLoad: 0
     }
   }
   componentDidMount() {
     console.log("Post-cDM: " + this.props.params);
     console.log("Post-cDM: " + this.props.params.peakLoad);
     console.log("Post-cDM: " + this.props.params.clientId);
     const client = this.props.client;
     let peakLoad = this.props.client.peakLoad;
   }
   onChange(e) {
     this.setState({
       peakLoad: e.refs.peakLoad.value
     });
   }
   onSubmit(e) {
     e.preventDefault();
     const peakLoad = this.refs.peakLoad.value.trim();
     Meteor.call('clients.update', this.props.params.clientId, peakLoad);
   }
  render() {
    console.log("on entering ClientHome: "+ this.props.params);
    console.log("on entering ClientHome: "+ this.props.params.peakLoad);
    console.log("on entering ClientHome: "+ this.props.params.clientId);
    const client = this.props.client;
    // let peakLoad = this.props.client.peakLoad;
    return (
      <div>
        <div>
          <AdminTitleBar  />
          <h1>{this.props.client.clientName}</h1>
          <p>Hello! I represent change.</p>
          <p>{this.props.client.peakLoad}</p>
          <p>{this.props.client.userId}</p>
        </div>
        <div className="container">
          <h1>Edit {this.props.client.clientName}</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="number" ref="peakLoad"
              value={this.state.peakLoad}
              onChange={this.onChange.bind(this)}
             />
            <button>Update Client's Peak Load</button>
          </form>
        </div>
      </div>
    );
  }
};

export default createContainer((props) => {
  const { clientName, peakLoad, clientId } = props.params;
  Meteor.subscribe('clients');

  return {client: Clients.findOne(clientId)};
}, ClientHome);
