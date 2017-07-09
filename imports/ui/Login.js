import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import AdminTitleBar from './AdminTitleBar';
import {browserHistory} from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Meteor.loginWithPassword({email}, password, (err) =>{
        if(err) {
          this.setState({error: err.reason});
        } else {
            this.setState({error:""});
          }
    browserHistory.replace('/admin');
    });
  }
  render() {
    return (
      <div>
        <AdminTitleBar />
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" ref="email" name="email" placeholder="Enter email" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <p/>
        <button className="btn btn-info">
          <Link style={{color:'white'}} to="/admin/signup">Not signed up? Click here to do so</Link>
        </button>
      </div>
    );
  }
}
