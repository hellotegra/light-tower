import React from 'react';
import {Link} from 'react-router';



export default class TitleBar extends React.Component {
  render() {
    var style = {color: '#5FD7AE'}
    return (
      <div>
        <nav className="navbar navbar-light" style={style}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
                <a className="navbar-brand" href="#">Customer Portal</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link to="/admin/login">Login</Link></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu <span className="caret"></span></a>
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
              <ul className="nav navbar-nav navbar-right">
                {/* <li><a href="#">Link</a></li> */}
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">jbusby@ge.com <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
      </div>
    );
  }
}

// TitleBar.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   subtitle: React.PropTypes.string
// };
//
// TitleBar.defaultProps = {
//   // title: 'Default title'
// };
