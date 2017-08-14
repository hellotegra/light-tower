import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import { withRouter } from 'react-router';
import {BrowserRouter as Router, Route, Switch, browserHistory, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store';

import App from './containers/App';
import Splash from './components/Splash';
import Login from './containers/Login';
import AdminClients from './containers/AdminClients';
import AdminInvoices from './containers/AdminInvoices';
import ClientInvoices from './containers/ClientInvoices';
import PageNotFound from './components/PageNotFound';

export const Main = () => (
  <Provider store={store}>
    <WrappedAppRouter/>
  </Provider>
);

class AppRouter extends React.Component {

  _renderLogin() {
    if (this.props.user.id && this.props.user.isAdmin) {
      return (<Redirect from="/login" to="/admin-clients" />);
    } else if (this.props.user.id && !this.props.user.isAdmin) {
      return (<Redirect from="/login" to="/client-invoices" />);
    }
    return (<Login/>);
  }

  _renderAdminClients() {
    if (this.props.user.id && this.props.user.isAdmin) {
      return (<AdminClients />);
    } else if (this.props.user.id && !this.props.user.isAdmin) {
      return (<Redirect to="/client-invoices" />);
    } else if (this.props.user.id === ''){
      return (<Redirect to="/login" />);
    } else {
      return (null);
    }
  }

  _renderAdminInvoices() {
    if (this.props.user.id && this.props.user.isAdmin) {
      return (<AdminInvoices />);
    } else if (this.props.user.id && !this.props.user.isAdmin) {
      return (<Redirect to="/client-invoices" />);
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
      return (<Redirect to="/admin-clients" />);
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
            <Route exact path="/admin-clients" render={this._renderAdminClients.bind(this)} />
            <Route exact path="/admin-clients/:id" render={this._renderAdminInvoices.bind(this)} />
            <Route exact path="/client-invoices" render={this._renderClientInvoices.bind(this)} />
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

const WrappedAppRouter = connect(
  mapStateToProps
)(AppRouter);
