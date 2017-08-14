import React from 'react';

import { Layout, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class AppHeader extends React.Component {

  render() {

    return (
      <Header className="header">
        <div className="header__left">
          <span className="header__title">{this.props.title}</span>
        </div>
        <div className="header__right">
          <Button type="primary" onClick={this.props.onLogout}>Logout</Button>
        </div>
      </Header>
    )
  }
}
