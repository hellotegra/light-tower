import React from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, Table, Button, Form, Input, Icon } from 'antd';
const FormItem = Form.Item;
const { Header, Footer, Sider, Content } = Layout;
import { generatePassword } from '../utils';

import * as clientsActions from '../actions/clients';

class LoginForm extends React.Component {

  _handleSubmit(e) {
    e.preventDefault();
    const email = this.inputEmail.props.value;
    const password = this.inputPassword.props.value;
    this.props.onSubmit(email, password);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const randomPassword = generatePassword();

    return(
      <Form onSubmit={this._handleSubmit.bind(this)}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" ref={el => this.inputEmail = el} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            initialValue: randomPassword,
            rules: [{ required: true, message: 'Please input your Password!'}],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="text" placeholder="Password" ref={el => this.inputPassword = el} />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="form__button">
            Create
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const columns = [{
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
}, {
  title: 'Password',
  dataIndex: 'password',
  key: 'password',
}];

class AdminClients extends React.Component {

  componentDidMount() {
    this.props.clientsActions.fetch();
  }

  constructor() {
    super();
    this.state = {
      showForm: false
    };
  }

  _onClickAddClient(e) {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  _onAddClient(email, password) {
    this.props.clientsActions.create(email, password);
  }

  render() {
    let _form = null;
    if (this.state.showForm) {
      const WrapLoginForm = Form.create()(LoginForm);
      _form = <WrapLoginForm onSubmit={this._onAddClient.bind(this)}/>;
    }

    const clientsData = [];
    const clientsList = this.props.clients.list
    if (clientsList) {
      for (let item of clientsList) {
        clientsData.push({
          key: item.id,
          email: <Link to={'/admin/'+item.id}>{item.email}</Link>,
          password: item.password,
        });
      }
    }

    return (
      <Content className="page page-admin-clients">
        <h1>Admin Clients</h1>
        <Table className="clients__table" size="middle" pagination={false} columns={columns} dataSource={clientsData} />
        <div className="clients__add">
          <Button type="primary" onClick={this._onClickAddClient.bind(this)}>Add client</Button>
          {_form}
        </div>
      </Content>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.get('user').toJS(),
    clients: state.get('clients').toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clientsActions: bindActionCreators(clientsActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminClients);
