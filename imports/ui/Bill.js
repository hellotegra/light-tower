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
export default class Bill extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      month: 'Jun'
    }
  }
  onSelect(e) {
    let month = 'Jun';
    this.setState({month});
    if (this.state.month = 'Jan') {
      return <Jan />
    } else if (this.state.month = 'Feb') {
        return <Feb />
    } else if (this.state.month = 'Mar') {
        return <Mar />
    } else if (this.state.month = 'Apr') {
        return <Apr />
    } else if (this.state.month = 'May') {
        return <May />
    } else if (this.state.month = 'Jun') {
        return <Jun />
    } else if (this.state.month = 'Jun1') {
        return <Jun1 />
    } else if (this.state.month = 'Jul') {
        return <Jul />
    } else if (this.state.month = 'Aug') {
        return <Aug />
    } else if (this.state.month = 'May') {
        return <Sep />
    } else if (this.state.month = 'Sep') {
        return <Jun />
    } else if (this.state.month = 'Oct') {
        return <Oct />
    } else if (this.state.month = 'Nov') {
        return <Nov />
    } else if (this.state.month = 'Dec') {
        return <Dec />
    }
  }
  render() {
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
                  <button className="btn btn-default dropdown-toggle"
                    type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="true" ref="month"
                    onChange={this.onSelect.bind(this)}>
                    <span>{this.state.month}  </span>
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li value="May">May 2017</li>
                    <li value="Apr">April 2017</li>
                    <li value="Mar">March 2017</li>
                    <li value="Feb">Feb 2017</li>
                    <li value="Jan">Jan 2017</li>
                    <li value="Dec">Dec 2016</li>
                    <li value="Nov">Nov 2016</li>
                    <li value="Oct">Oct 2016</li>
                    <li value="Sep">Sept 2016</li>
                    <li value="Aug">Aug 2016</li>
                    <li value="Jul">July 2016</li>
                    <li value="Jun1">June 2016</li>
                  </ul>
                </div>
                <Jun />
          </div>
        </div>
    </div>
</div>
      );
  }
};
