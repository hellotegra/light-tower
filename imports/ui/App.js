import React from 'react';

import TitleBar from './TitleBar';
import AddClient from './AddClient';
import ClientList from './ClientList';
import Dashboard from './Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar />
        <Dashboard />
      </div>
    );
  }
};

App.propTypes = {
  clients: React.PropTypes.array.isRequired
};
