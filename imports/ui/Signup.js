import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import AdminTitleBar from './AdminTitleBar';

export default class Signup extends React.Component {
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
    if (password.length < 6) {
      return this.setState({error: 'Password must be 6 characters or longer.'});
    }
    Accounts.createUser({email, password}, (err) => {
      if(err) {
        this.setState({error: err.reason});
      } else {
          this.setState({error:""});
        }
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
          <button>Create Account</button>
        </form>
        <button className="btn btn-primary">
          <Link style={{color:"white"}}to="/admin/login">Already have an account?</Link>
        </button>
      </div>
    );
  }
}

//  I love this: {this.state.error ? <p>{this.state.error}</p> : undefined}
