import React from 'react';
import {Link} from 'react-router';

export default class Dash extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-pills">
          <li role="presentation" className="active"><Link to="dashboard">Last Month</Link></li>
          <li role="presentation"><Link to="dashboard/ytd">Year to Date</Link></li>
          <li role="presentation"><Link to="dashboard/vs">YTD vs. 2016</Link></li>
          <li role="presentation"><Link to="dashboard/efficiency">Efficiency Measures</Link></li>
        </ul>
        <p/>
      </div>
    );
  }
}

// Setup prop types. client should be a required object
// Client.propTypes = {
//   client: React.PropTypes.object.isRequired
// };
