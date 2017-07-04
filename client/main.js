import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Route, Router, browserHistory} from 'react-router';
import App from './../imports/ui/App';
import Splash from './../imports/ui/Splash';
import Bill from './../imports/ui/Bill';
import Home from './../imports/ui/Home';
import BillForm from './../imports/ui/BillForm';

// Database imports
import {Clients} from './../imports/api/clients';
import AddClient from './../imports/ui/AddClient';
import ClientList from './../imports/ui/ClientList';

routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Splash} />
    <Route path="/dashboard" component={Home} />
    <Route path="/dashboard/bill" component={Bill} />
    <Route path="admin/addclient" component={AddClient} />
    <Route path="admin/clientlist" component={ClientList} />
    <Route path="admin/bill" component={BillForm} />
  </Router>
);

Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDOM.render(
        routes, document.getElementById('app'));
  });
  Clients.insert({
    name: "Harley Davidson",
    peakLoad: 775
  });
});
