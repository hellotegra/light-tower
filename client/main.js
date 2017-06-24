import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Route, Router, browserHistory} from 'react-router';
import {Players} from './../imports/api/players';
import App from './../imports/ui/App';
import Splash from './../imports/ui/Splash';
import Dashboard from './../imports/ui/Dashboard';
import Test from './../imports/ui/Test';

routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Splash} />
    <Route path="/dashboard" component={App} />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(
      routes, document.getElementById('app'));
  });
