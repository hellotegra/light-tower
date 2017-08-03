import React from 'react';
import Dashboard from './Dashboard';
import TitleBar from './TitleBar';
import {createContainer} from 'meteor/react-meteor-data';
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
import CurrentBill from './bills/CurrentBill';
import {Invoices} from './../api/invoices';
import _ from 'lodash';

const monthMap = {
  '1': 'Janaury',
  '2': 'February',
  '3': 'March',
  '4': 'April',
  '5': 'May',
  '6': 'June',
  '7': 'July',
  '8': 'August',
  '9': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};


// from https://bootsnipp.com/snippets/OPvaM
class Bill extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      month: null,
      year: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.invoices, nextProps.invoices) & nextProps.invoices.length > 0) {
      console.log('update');
      let _invoices = _.orderBy(nextProps.invoices, ['year', 'month']);
      this.setState({month: _invoices[0].month, year: _invoices[0].year});
    }
  }

  changeMonth(month, year) {
    console.log('on select month', month, year);
    this.setState({month, year});
  }

  render() {
    console.log(this.props.invoices);
    let _invoices = _.orderBy(this.props.invoices, ['year', 'month']);
    console.log(_invoices);
    let dropdownLinks = [];
    for (let idx in _invoices) {
      let invoice = _invoices[idx];
      dropdownLinks.push(
        <li key={_.uniqueId('month-year_')}
          onClick={this.changeMonth.bind(this, invoice.month, invoice.year)}
        >{monthMap[invoice.month]+'-'+invoice.year}</li>
      );
    }

    let currentInvoice = _.find(this.props.invoices, {'month': this.state.month, 'year': this.state.year});
    console.log('currentInvoice', currentInvoice);


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
                      <span> {monthMap[this.state.month]+'-'+this.state.year}  </span>
                      <span className="caret"></span>
                  </span>
                  <ul className="dropdown-menu">
                    {dropdownLinks}
                  </ul>
                </div>
                {currentInvoice ? <CurrentBill invoice={currentInvoice}/> : ''}
          </div>
        </div>
    </div>
</div>
      );
  }
};

export default createContainer(() => {
  Meteor.subscribe('clientInvoices');
  // whatever we return from the function will show up as props
  return { invoices: Invoices.find({clientName: 'test_client'}).fetch() };
}, Bill);
