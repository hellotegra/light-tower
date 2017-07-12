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
import Signup from '../ui/Signup';
import Login from '../ui/Login';
import ClientHome from '../ui/ClientHome';

// Database imports
import {Clients} from '../api/clients';
import AddClient from '../ui/AddClient';
import ClientList from '../ui/ClientList';
import Client from '../ui/Client';

// Browser Redirects for authentication
const unauthenticatedPages = ['/admin', '/admin/signup'];
const authenticatedPages = ['/admin/addclient'];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/admin');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/admin/signup');
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
    <Route path="/admin/login" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/admin/signup" component={Signup} onEnter={onEnterPublicPage} />
    <Route path="admin/addclient" component={AddClient} onEnter={onEnterPrivatePage}  />
    <Route path="admin/:clientName" component={ClientHome} onEnter={onEnterPrivatePage}  />
    <Route path="admin" component={Client} onEnter={onEnterPrivatePage} />
    <Route path="admin/bill" component={BillForm} />
    <Route path="*" component={NotFound} />
  </Router>
);
