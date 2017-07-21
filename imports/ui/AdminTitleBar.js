import React from 'react';
import {browserHistory, Link} from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class AdminTitleBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
  }
  // this is probably not the way to do it - I think I need a this.props.user approach
  componentDidMount() {
    // this.clientTracker = Tracker.autorun(() => {}
      // const user = Users.find().fetch();
      // this.setState ({ user });
    if (!Meteor.userId()) {
      this.setState({user: 'Not Logged In'});
    } else {
      this.setState({user: Meteor.user().emails[0].address});
    }
  }
  // This no longer has purpose; I've moved all of that to an inline function
  onLogout() {
    Accounts.logout();
    browserHistory.push('/admin/login');
  }
  render() {
    return (
      <div className="title-bar site-colors" id="site-green">
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
                <a className="navbar-brand" href="#">ADMIN Portal</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/admin">Home</Link></li>
                <li><Link to="/admin/login">Login</Link></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/dashboard"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Home</span></Link></li>
                    <li><Link to="/dashboard/bill"><i className="fa fa-book" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Monthly Bill</span></Link></li>
                    <li><Link to="/dashboard/usage"><i className="fa fa-building-o" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Usage Summary</span></Link></li>
                    <li><Link to="/dashboard/statistics"><i className="fa fa-line-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Statistics</span></Link></li>
                    <li><Link to="/dashboard/efficiency"><i className="fa fa-map-signs" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Efficiency Steps</span></Link></li>
                    <li><Link to="/dashboard/carbonstats"><i className="fa fa-leaf" aria-hidden="true"></i><span className="hidden-xs hidden-sm">  Carbon Stats</span></Link></li>

                  </ul>
                </li>
              </ul>
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><button className="btn navbar-btn" onClick={() => Accounts.logout()}>Logout</button></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle"
                    data-toggle="dropdown" role="button">
                      {this.state.user}
                      <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a onClick={() => Accounts.logout()}>Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

AdminTitleBar.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string
};

AdminTitleBar.defaultProps = {
  // title: 'Default title'
};
