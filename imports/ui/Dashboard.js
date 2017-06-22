import React from 'react';

export default class Dashboard extends React.Component{
  render() {
      return (
        <div>
          <div className="container-fluid display-table">
          <div className="row display-table-row">
              <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                  <div className="navi">
                      <ul>
                          <li className="active"><a href="#"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></a></li>
                          <li><a href="#"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Workflow</span></a></li>
                          <li><a href="#"><i className="fa fa-bar-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Statistics</span></a></li>
                          <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Calender</span></a></li>
                          <li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Users</span></a></li>
                          <li><a href="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-md-10 col-sm-11 display-table-cell v-align">
                  <div className="row">
                      <header>
                          <div className="col-md-7">
                              <nav className="navbar-default pull-left">
                                  <div className="navbar-header">
                                      <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#side-menu" aria-expanded="false">
                                          <span className="sr-only">Toggle navigation</span>
                                          <span className="icon-bar"></span>
                                          <span className="icon-bar"></span>
                                          <span className="icon-bar"></span>
                                      </button>
                                  </div>
                              </nav>
                              <div className="search hidden-xs hidden-sm">
                                  <input type="text" placeholder="Search" id="search" />
                              </div>
                          </div>
                          <div className="col-md-5">
                              <div className="header-rightside">
                                  <ul className="list-inline header-top pull-right">
                                      <li className="hidden-xs"><a href="#" className="add-project" data-toggle="modal" data-target="#add_project">Add Project</a></li>
                                      <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                      <li>
                                          <a href="#" className="icon-info">
                                              <i className="fa fa-bell" aria-hidden="true"></i>
                                              <span className="label label-primary">3</span>
                                          </a>
                                      </li>
                                      <li className="dropdown">
                                          <ul className="dropdown-menu">
                                              <li>
                                                  <div className="navbar-content">
                                                      <span>Evan Berger</span>
                                                      <p className="text-muted small">
                                                          evan.berger@gmail.com
                                                      </p>
                                                      <div className="divider">
                                                      </div>
                                                      <a href="#" className="view btn-sm active">View Profile</a>
                                                  </div>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </header>
                  </div>
                  <div className="user-dashboard">
                      <h1>Hello, JS</h1>
                      <div className="row">
                          <div className="col-md-5 col-sm-5 col-xs-12 gutter">

                              <div className="sales">
                                  <h2>Your Sale</h2>

                                  <div className="btn-group">
                                      <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span>Period:</span> Last Year
                                      </button>
                                      <div className="dropdown-menu">
                                          <a href="#">2013</a>
                                          <a href="#">2014</a>
                                          <a href="#">2015</a>
                                          <a href="#">2016</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-7 col-sm-7 col-xs-12 gutter">

                              <div className="sales report">
                                  <h2>Report</h2>
                                  <div className="btn-group">
                                      <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span>Period:</span> Last Year
                                      </button>
                                      <div className="dropdown-menu">
                                          <a href="#">2013</a>
                                          <a href="#">2014</a>
                                          <a href="#">2015</a>
                                          <a href="#">2016</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>



      {/*<!-- Modal -->
       <div id="add_project" className="modal fade" role="dialog">
          <div className="modal-dialog">

              <!-- Modal content-->
              <div className="modal-content">
                  <div className="modal-header login-header">
                      <button type="button" className="close" data-dismiss="modal">×</button>
                      <h4 className="modal-title">Add Project</h4>
                  </div>
                  <div className="modal-body">
                              <input type="text" placeholder="Project Title" name="name">
                              <input type="text" placeholder="Post of Post" name="mail">
                              <input type="text" placeholder="Author" name="passsword">
                              <textarea placeholder="Desicrption"></textarea>
                      </div>
                  <div className="modal-footer">
                      <button type="button" className="cancel" data-dismiss="modal">Close</button>
                      <button type="button" className="add-project" data-dismiss="modal">Save</button>
                  </div>
              </div>

          </div>
      </div> */}

        </div>
      );
  }
};
