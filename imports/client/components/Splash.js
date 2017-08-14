import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
// import bkgrnd from '../img/bg.jpg';

export default class Splash extends React.Component{
  render() {
    var headerStyle = {color: '#006600'};
    var header2Style = {color: '#006600'};
      return (
        <Content className="page page-splash">
          <a id="menu-toggle" href="#" className="btn btn-dark btn-lg toggle"><i className="fa fa-bars"></i></a>
           <nav id="sidebar-wrapper">
              <ul className="sidebar-nav">
                          <a id="menu-close" href="#" className="btn btn-light btn-lg pull-right toggle"><i className="fa fa-times"></i></a>
                          <li className="sidebar-brand">
                              <a href="#top">Start Bootstrap</a>
                          </li>
                          <li>
                              <a href="#top">Home</a>
                          </li>
                          <li>
                              <a href="#about">About</a>
                          </li>
                          <li>
                              <a href="#services">Services</a>
                          </li>
                          <li>
                              <a href="#portfolio">Portfolio</a>
                          </li>
                          <li>
                              <a href="#contact">Contact</a>
                          </li>
                      </ul>
                  </nav>

                  {/* <!-- Header --> */}
                  <header id="top" className="header">
                    <div className="row">
                          <div className="col-xs-4"></div>
                          <div className="text-vertical-center col-xs-4">
                              <p></p>
                              <img src="/logo.png" alt="LTP" />
                              <h1 style={headerStyle}>Light Tower</h1>
                              <h3 style={header2Style}>Real-Time Pricing, Real Simple</h3>
                              <p></p>
                              <p></p>
                              <p></p>
                              <br/>
                              <Link to="/login" className="btn btn-dark btn-lg">Login</Link>
                          </div>
                          <div className="col-xs-4"></div>
                    </div>
                  </header>

                  {/* <!-- About --> */}
                  <section id="about" className="about">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-12 text-center">
                                  <h2>Real-Time Pricing: the Smart Choice for Large Customers</h2>
                                  <p className="lead">Every commodity that we buy - gasoline, coffee, a loaf of bread - we buy on the real-time market. The reason is simple: it's cheaper. Fixing a price in advance is a form of insurance, and insurance comes at a premium. </p>
                                  <p className="lead">So why do so many big buildings buy electricity at a fixed price? The answer is simple: it's what they're used to. In the days before energy deregulation, all businesses would get their power at a fixed price from the utility. Now that deregulation has occurred, most big energy users have lost out on the opportunity to do things differently: they've simply swapped out the utility for the 3rd party supplier. </p>
                                  <p className="lead">In this era of abundant natural gas, electricity prices are low and stable. Real-time pricing has proven to be the cheaper option. So why pay more for the same power?</p>
                              </div>
                          </div>
                          {/* <!-- /.row --> */}
                      </div>
                      {/* <!-- /.container --> */}
                  </section>

                  {/* <!-- Services -->
                  <!-- The circle icons use Font Awesome's stacked icon classNamees. For more information, visit http://fontawesome.io/examples/ --> */}
                  <section id="services" className="services bg-primary">
                      <div className="container">
                          <div className="row text-center">
                              <div className="col-lg-10 col-lg-offset-1">
                                  <h2>Our Services</h2>
                                    <div className="row">
                                      <div className="col-md-3 col-sm-6">
                                          <div className="service-item">
                                              <span className="fa-stack fa-4x">
                                              <i className="fa fa-circle fa-stack-2x"></i>
                                              <i className="fa fa-cloud fa-stack-1x text-primary"></i>
                                          </span>
                                              <h4>
                                                  <strong>Service Name</strong>
                                              </h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                              <a href="#" className="btn btn-light">Learn More</a>
                                          </div>
                                      </div>
                                      <div className="col-md-3 col-sm-6">
                                          <div className="service-item">
                                              <span className="fa-stack fa-4x">
                                              <i className="fa fa-circle fa-stack-2x"></i>
                                              <i className="fa fa-compass fa-stack-1x text-primary"></i>
                                          </span>
                                              <h4>
                                                  <strong>Service Name</strong>
                                              </h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                              <a href="#" className="btn btn-light">Learn More</a>
                                          </div>
                                      </div>
                                      <div className="col-md-3 col-sm-6">
                                          <div className="service-item">
                                              <span className="fa-stack fa-4x">
                                              <i className="fa fa-circle fa-stack-2x"></i>
                                              <i className="fa fa-flask fa-stack-1x text-primary"></i>
                                          </span>
                                              <h4>
                                                  <strong>Service Name</strong>
                                              </h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                              <a href="#" className="btn btn-light">Learn More</a>
                                          </div>
                                      </div>
                                      <div className="col-md-3 col-sm-6">
                                          <div className="service-item">
                                              <span className="fa-stack fa-4x">
                                              <i className="fa fa-circle fa-stack-2x"></i>
                                              <i className="fa fa-shield fa-stack-1x text-primary"></i>
                                          </span>
                                              <h4>
                                                  <strong>Service Name</strong>
                                              </h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                              <a href="#" className="btn btn-light">Learn More</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/* <!-- /.container --> */}
                  </section>

                  {/* <!-- Callout --> */}
                  <aside className="callout">
                      <div className="text-vertical-center">
                          <h1>Vertically Centered Text</h1>
                      </div>
                  </aside>

                  {/* <!-- Portfolio --> */}
                  <section id="portfolio" className="portfolio">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-10 col-lg-offset-1 text-center">
                                  <h2>Our Work</h2>

                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="portfolio-item">
                                              <a href="#">
                                                  {/* <img className="img-portfolio img-responsive" src="img/portfolio-1.jpg"> */}
                                              </a>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="portfolio-item">
                                              <a href="#">
                                                  {/* <img className="img-portfolio img-responsive" src="img/portfolio-2.jpg"> */}
                                              </a>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="portfolio-item">
                                              <a href="#">
                                                  {/* <img className="img-portfolio img-responsive" src="img/portfolio-3.jpg"> */}
                                              </a>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="portfolio-item">
                                              <a href="#">
                                                  {/* <img className="img-portfolio img-responsive" src="img/portfolio-4.jpg"> */}
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              {/* <!-- /.col-lg-10 --> */}
                          </div>
                          {/* <!-- /.row --> */}
                      </div>
                      {/* <!-- /.container --> */}
                  </section>

                  {/* <!-- Call to Action --> */}
                  <aside className="call-to-action bg-primary">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-12 text-center">
                                  <h3>The buttons below are impossible to resist.</h3>
                                  <a href="#" className="btn btn-lg btn-light">Click Me!</a>
                                  <a href="#" className="btn btn-lg btn-dark">Look at Me!</a>
                              </div>
                          </div>
                      </div>
                  </aside>

                  {/* <!-- Map --> */}
                  <section id="contact" className="map">
                      <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
                      <br />
                      <small>
                          <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
                      </small>
                  </section>

                  {/* <!-- Footer --> */}
                  <footer>
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-10 col-lg-offset-1 text-center">
                                  <h4><strong>Start Bootstrap</strong></h4>
                                  <p>3481 Melrose Place</p>
                                  <p>Beverly Hills, CA 90210</p>
                                  <ul className="list-unstyled">
                                      <li><i className="fa fa-phone fa-fw"></i> (123) 456-7890</li>
                                      <li><i className="fa fa-envelope-o fa-fw"></i> <a href="mailto:name@example.com">name@example.com</a>
                                      </li>
                                  </ul>
                                  <ul className="list-inline">
                                      <li>
                                          <a href="#"><i className="fa fa-facebook fa-fw fa-3x"></i></a>
                                      </li>
                                      <li>
                                          <a href="#"><i className="fa fa-twitter fa-fw fa-3x"></i></a>
                                      </li>
                                      <li>
                                          <a href="#"><i className="fa fa-dribbble fa-fw fa-3x"></i></a>
                                      </li>
                                  </ul>

                                  <p className="text-muted">Copyright &copy; Your Website 2014</p>
                              </div>
                          </div>
                      </div>
                      <a id="to-top" href="#top" className="btn btn-dark btn-lg"><i className="fa fa-chevron-up fa-fw fa-1x"></i></a>
                  </footer>
                </Content>
      );
    }
  };
