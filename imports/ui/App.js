import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import Dashboard from './Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title}/>
        <Dashboard />
      </div>
    );
  }
};

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};
