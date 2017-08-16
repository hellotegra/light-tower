import React from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, Button, DatePicker } from 'antd';
const { MonthPicker } = DatePicker;
const { Content } = Layout;
import moment from 'moment';
import { EditableInvoice } from '../components/EditableInvoice';

import * as invoicesActions from '../actions/invoices';

const data = [{
  key: '0',
  title: 'Edward King 0',
  amount: '32',
  cost: '30',
}, {
  key: '1',
  title: 'Edward King 0',
  amount: '32',
  cost: '30',
}];

class AdminInvoices extends React.Component {

  constructor() {
    super();
    this.invoiceId = null;
  }

  componentDidMount() {
    this.props.invoicesActions.fetch(this.props.clientId);
  }

  _onChangeMonth(month, monthString) {
    this.props.invoicesActions.changeMonth(monthString);
  }

  _onSave(dataSource) {
    const rows = dataSource;
    const month = this.props.invoices.month;
    const ownerId = this.props.user.id;
    const clientId = this.props.clientId;
    const id = this.invoiceId;
    console.log('--id', id);
    if (!month) return;
    if (id) {
      console.log('invoice update');
      this.props.invoicesActions.update(id, rows, clientId);
    } else {
      console.log('invoice insert');
      this.props.invoicesActions.add({
        clientId: clientId,
        ownerId: ownerId,
        month: month,
        rows: rows
      });
    }
  }

  _onAdd() {
    this.props.invoicesActions.addEmpty();
  }

  _renderInvoice(month, invoices) {
    let invoice = null;
    let invoiceData = null;
    if (month && invoices) {
      for (let item of invoices) {
        console.log(item);
        if (item.month === month) {
          invoiceData = item.rows;
          this.invoiceId = item.id;
        }
      }
    }
    if (invoiceData !== null) {
      invoice = <EditableInvoice dataSource={invoiceData} onSave={this._onSave.bind(this)}/>
    } else if (month){
      invoice = <div className="invoices__empty">
        <div className="empty__text">invoice not found</div>
        <Button type="primary" onClick={this._onAdd.bind(this)}>Create invoice</Button>
      </div>
    }
    return invoice;
  }

  render() {
    console.log('render', this.props.invoices.month);
    let monthMoment = '';
    if (this.props.invoices.month) {
      monthMoment = moment(this.props.invoices.month, 'YYYY-MM');
    }
    let invoice = this._renderInvoice(this.props.invoices.month, this.props.invoices.list);
    console.log(this);
    return(
      <Content className="page page-admin-invoices">
        <h1>Invoices</h1>
        <div className="invoices__head">
          <MonthPicker value={monthMoment} onChange={this._onChangeMonth.bind(this)} placeholder="Select month" ref={el => this.MonthPicker = el}/>
        </div>
        <div className="invoices__body">
          {invoice}
        </div>

      </Content>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.get('user').toJS(),
    clients: state.get('clients').toJS(),
    invoices: state.get('invoices').toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    invoicesActions: bindActionCreators(invoicesActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminInvoices);
