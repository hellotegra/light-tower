import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router';
import Clipboard from 'clipboard';

// This is the child component to ClientList. For each Item, you're passing in the props.
export default class ClientListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      justCopied: false
    };
  }
  componentDidMount(){
    this.clipboard = new Clipboard(this.refs.copy);
    this.clipboard.on('success', () => {
      this.setState({justCopied: true});
      setTimeout(() => this.setState({justCopied: false}), 1000);
    }).on('error', () => {
      alert('Unable to copy. Please manually copy the link.');
    })
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    // console.log("Client: " + this.props.clientName + "; Peak Load: " + this.props.peakLoad + ". Created at: " + this.props.createdAt );
    return (
     <tr>
       <td>{this.props.clientName}</td>
       <td>{this.props.peakLoad}</td>
       <td>{this.props.acctOwner ? this.props.acctOwner : 'no owner'}</td>
       <td>{this.props.rtpUser.toString()}</td>
       <td>
         <Link to={this.props.url}><small>VIEW </small></Link>
          //
         <Link to={this.props.url}><small> EDIT</small></Link>
     </td>
       <td>
         {/* Next up - input for rtpUser */}
         <button className="btn btn-default" onClick={() => {
           Meteor.call('clients.rtpUpdate', this.props._id, !this.props.rtpUser);
         }}>
           {this.props.rtpUser ? 'RTP' : 'Fixed Price'}
         </button>
       </td>
       <td>
         <button className="btn btn-default" ref="copy" data-clipboard-text={this.props.url}>
           {this.state.justCopied ? 'Copied' : 'Copy'}
         </button>
       </td>
     </tr>
    );
  }
};
