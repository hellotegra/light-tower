import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Switch, browserHistory, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './containers/App';
import Splash from './components/Splash';
import Login from './containers/Login';
import AdminClients from './containers/AdminClients';
import AdminInvoices from './containers/AdminInvoices';
import ClientInvoices from './containers/ClientInvoices';
import PageNotFound from './components/PageNotFound';

class AppRouter extends React.Component {

  _renderLogin() {
    if (this.props.user.id && this.props.user.isAdmin) {
      return (<Redirect from="/login" to="/admin" />);
    } else if (this.props.user.id && !this.props.user.isAdmin) {
      return (<Redirect from="/login" to="/dashboard" />);
    }
    return (<Login/>);
  }

  _renderAdminClients() {
    if (this.props.user.id && this.props.user.isAdmin) {
      return (<AdminClients />);
    } else if (this.props.user.id && !this.props.user.isAdmin) {
      return (<Redirect to="/dashboard" />);
    } else if (this.props.user.id === ''){
      return (<Redirect to="/login" />);
    } else {
      return (null);
    }
  }

  _renderAdminInvoices({match}) {
    if (this.props.user.id && this.props.user.isAdmin) {
      return (<AdminInvoices clientId={match.params.id}/>);
    } else if (this.props.user.id && !this.props.user.isAdmin) {
      return (<Redirect to="/dashboard" />);
    } else if (this.props.user.id === ''){
      return (<Redirect to="/login" />);
    } else {
      return (null);
    }
  }

  _renderClientInvoices() {
    if (this.props.user.id && !this.props.user.isAdmin) {
      return (<ClientInvoices />);
    } else if (this.props.user.id && this.props.user.isAdmin) {
      return (<Redirect to="/admin" />);
    } else if (this.props.user.id === ''){
      return (<Redirect to="/login" />);
    } else {
      return (null);
    }
  }


  render() {
    return(
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/login" render={this._renderLogin.bind(this)} />
            <Route exact path="/admin" render={this._renderAdminClients.bind(this)} />
            <Route exact path="/admin/:id" render={this._renderAdminInvoices.bind(this)} />
            <Route exact path="/dashboard" render={this._renderClientInvoices.bind(this)} />
            <Route component={PageNotFound} />
          </Switch>
        </App>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.get('user').toJS()
  }
}

export default connect(
  mapStateToProps
)(AppRouter);
