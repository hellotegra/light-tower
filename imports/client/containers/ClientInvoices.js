import React from 'react';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import AppHeader from '../components/Header';

export default class ClientInvoices extends React.Component {

  render() {

    return (
      <Content className="page page-admin-clients">
        <h1>Client invoices</h1>
      </Content>
    )
  }
}
