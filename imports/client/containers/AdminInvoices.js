import React from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, Select } from 'antd';
const { Content } = Layout;
const { Option } = Select;

const columns = [{
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
}, {
  title: 'Password',
  dataIndex: 'password',
  key: 'password',
}];

export default class AdminInvoices extends React.Component {

  _onChangeMonth(e) {

  }

  render() {
    console.log(this.props);
    return(
      <Content className="page page-admin-invoices">
        <h1>Invoices</h1>
        <div className="invoices__head">
          <Select defaultValue="1" style={{ width: 120 }} onChange={this._onChangeMonth.bind(this)}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
          </Select>
        </div>
      </Content>
    )
  }
}
