import React from 'react';
import Dashboard from './Dashboard';
import TitleBar from './TitleBar';
import Jan from './bills/Jan';
import Feb from './bills/Feb';
import Mar from './bills/Mar';
import Apr from './bills/Apr';
import May from './bills/May';
import Jun from './bills/Jun';
import Jul from './bills/Jul';
import Aug from './bills/Aug';
import Sep from './bills/Sep';
import Oct from './bills/Oct';
import Nov from './bills/Nov';
import Dec from './bills/Dec';
import Jun1 from './bills/Jun1';

// from https://bootsnipp.com/snippets/OPvaM
export default class Bill extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      month: 'Jun'
    }
  }

  changeMonth(month) {
    console.log('on select month', month);
    if (month) {
      this.setState({month});
    }
  }

  render() {
    let month = null;
    if (this.state.month === 'Jan') {
      month =  <Jan />;
    } else if (this.state.month === 'Feb') {
        month = <Feb />;
    } else if (this.state.month === 'Mar') {
        month = <Mar />;
    } else if (this.state.month === 'Apr') {
        month = <Apr />;
    } else if (this.state.month === 'May') {
        month = <May />;
    } else if (this.state.month === 'Jun') {
        month = <Jun />;
    } else if (this.state.month === 'Jun1') {
        month = <Jun1 />;
    } else if (this.state.month === 'Jul') {
        month = <Jul />;
    } else if (this.state.month === 'Aug') {
        month = <Aug />;
    } else if (this.state.month === 'May') {
        month = <Sep />;
    } else if (this.state.month === 'Sep') {
        month = <Jun />;
    } else if (this.state.month === 'Oct') {
        month = <Oct />;
    } else if (this.state.month === 'Nov') {
        month = <Nov />;
    } else if (this.state.month === 'Dec') {
        month = <Dec />;
    }
    console.log('month', month);


      return (
        <div>
          <TitleBar />
          <div className="row">
          <div className="col-md-2 col-sm-1">
            <Dashboard />
          </div>
          <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <div className="user-dashboard">
                <div className="row">
                  <div className="page-header">
                    <h1>Electric Bill Summary <small>ComEd Large Load Delivery Class</small></h1>
                  </div>
                </div>
                <div className="dropdown">
                  <span className="btn btn-default dropdown-toggle"
                    data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="true">
                      <span> {this.state.month}  </span>
                      <span className="caret"></span>
                  </span>
                  <ul className="dropdown-menu">
                    <li onClick={this.changeMonth.bind(this, 'May')}>May 2017</li>
                    <li onClick={this.changeMonth.bind(this, 'Apr')}>April 2017</li>
                    <li onClick={this.changeMonth.bind(this, 'Mar')}>March 2017</li>
                    <li onClick={this.changeMonth.bind(this, 'Feb')}>Feb 2017</li>
                    <li onClick={this.changeMonth.bind(this, 'Jan')}>Jan 2017</li>
                    <li onClick={this.changeMonth.bind(this, 'Dec')}>Dec 2016</li>
                    <li onClick={this.changeMonth.bind(this, 'Nov')}>Nov 2016</li>
                    <li onClick={this.changeMonth.bind(this, 'Oct')}>Oct 2016</li>
                    <li onClick={this.changeMonth.bind(this, 'Sep')}>Sept 2016</li>
                    <li onClick={this.changeMonth.bind(this, 'Aug')}>Aug 2016</li>
                    <li onClick={this.changeMonth.bind(this, 'Jul')}>July 2016</li>
                    <li onClick={this.changeMonth.bind(this, 'Jun1')}>June 2016</li>
                  </ul>
                </div>
                <div>{month}</div>
          </div>
        </div>
    </div>
</div>
      );
  }
};
