import React from 'react';
import Dashboard from './Dashboard';
import TitleBar from './TitleBar';
import StackedBar from './StackedBar';

export default class Home extends React.Component{
  render() {
      return (
        <div>
          <TitleBar />
          <div className="row">
          <div className="col-md-2 col-sm-1">
            <Dashboard />
          </div>
          <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <StackedBar />
          </div>
        </div>
    </div>
      );
  }
};
