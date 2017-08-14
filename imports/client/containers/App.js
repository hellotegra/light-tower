import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import AppHeader from '../components/Header';

import * as userActions from '../actions/user';

class App extends React.Component {

  componentDidMount() {
    this.props.userActions.fetch();
    console.log(this.props);
  }

  _onLogout() {
    this.props.userActions.logout();
  }

  render() {
    let _header = null;
    if (this.props.location.pathname === '/') {
      _header = null;
    } else if (this.props.location.pathname === '/login') {
      _header = null;
    } else if (this.props.user.id && this.props.user.isAdmin) {
      _header = <AppHeader title="Admin" onLogout={this._onLogout.bind(this)}/>
    } else if (this.props.user.id && !this.props.user.isAdmin) {
      _header = <AppHeader title="Client" onLogout={this._onLogout.bind(this)}/>
    }

    return (
      <Layout className="app-layout">
        {_header}
        {this.props.children}
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.get('user').toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}
// withRouter fix redirect bug
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
