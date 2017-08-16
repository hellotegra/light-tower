import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, Table, DatePicker } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { MonthPicker } = DatePicker;
import { Invoice } from '../components/Invoice';
import moment from 'moment';
import * as invoicesActions from '../actions/invoices';

class ClientInvoices extends React.Component {

  componentDidMount() {
    this.props.invoicesActions.fetch(this.props.user.id);
  }

  _onChangeMonth(month, monthString) {
    this.props.invoicesActions.changeMonth(monthString);
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
      invoice = <Invoice dataSource={invoiceData} />
    } else if (month){
      invoice = <div className="invoices__empty">
        <div className="empty__text">invoice not found</div>
      </div>
    }
    return invoice;
  }

  render() {
    let monthMoment = '';
    if (this.props.invoices.month) {
      monthMoment = moment(this.props.invoices.month, 'YYYY-MM');
    }
    let invoice = this._renderInvoice(this.props.invoices.month, this.props.invoices.list);
    return (
      <Content className="page page-client-invoices">
        <h1>Client invoices</h1>
        <div className="invoices__head">
          <MonthPicker value={monthMoment} onChange={this._onChangeMonth.bind(this)} placeholder="Select month" />
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
)(ClientInvoices);
