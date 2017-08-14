import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
const { Content } = Layout;
const FormItem = Form.Item;

import * as userActions from '../actions/user';

class LoginForm extends React.Component {

  _handleSubmit(e) {
    e.preventDefault();
    const email = this.inputEmail.props.value;
    const password = this.inputPassword.props.value;
    this.props.onLogin(email, password);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <Form className="login__form" onSubmit={this._handleSubmit.bind(this)}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" ref={el => this.inputEmail = el} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" ref={el => this.inputPassword = el} />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="form__button">
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
}

class Login extends React.Component {

  _onLogin(email, password) {
    this.props.userActions.login(email, password);
  }

  render() {
    const WrapLoginForm = Form.create()(LoginForm);
    return (
      <Content className="page page-login">
        <WrapLoginForm onLogin={this._onLogin.bind(this)}/>
      </Content>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.get('user').toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
