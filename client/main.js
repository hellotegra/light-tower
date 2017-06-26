import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Route, Router, browserHistory} from 'react-router';
import {Players} from './../imports/api/players';
import App from './../imports/ui/App';
import Splash from './../imports/ui/Splash';
import Bill from './../imports/ui/Bill';
import Home from './../imports/ui/Home';


routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Splash} />
    <Route path="/dashboard" component={Home} />
    <Route path="/dashboard/bill" component={Bill} />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(
      routes, document.getElementById('app'));
  });
