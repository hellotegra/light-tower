import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Route, Router, browserHistory} from 'react-router';
import App from '../ui/App';
import Splash from '../ui/Splash';
import Bill from '../ui/Bill';
import Home from '../ui/Home';
import BillForm from '../ui/BillForm';
import NotFound from '../ui/NotFound';

// Database imports
import {Clients} from '../api/clients';
import AddClient from '../ui/AddClient';
import ClientList from '../ui/ClientList';

// Browser Redirects for authentication
const unauthenticatedPages = ['/'];
const authenticatedPages = ['/admin/addclient'];
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  console.log('isAuthenticated', isAuthenticated);

  if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Splash} />
    <Route path="/dashboard" component={Home} />
    <Route path="/dashboard/bill" component={Bill} />
    <Route path="admin/addclient" component={AddClient} />
    <Route path="admin/clientlist" component={ClientList} />
    <Route path="admin/bill" component={BillForm} />
    <Route path="*" component={NotFound} />
  </Router>
);
