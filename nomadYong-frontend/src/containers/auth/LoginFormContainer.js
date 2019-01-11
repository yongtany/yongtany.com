import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


import LoginForm from "components/auth/LoginForm";
import * as authActions from 'store/modules/auth';

class LoginFormContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        emailValue={email}
        passwordValue={password}
        handleFacebookLogin={this._handleFacebookLogin}
      />
    );
  }
  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = async  event => {
    const { email, password } = this.state;
    const { AuthAcitons, history } = this.props;

    const post ={
      email: email,
      password: password
    }

    event.preventDefault();
    await AuthAcitons.signIn(post);
    history.push('/');
  };
  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default connect(
  null,
  (dispatch) => ({
    AuthAcitons: bindActionCreators(authActions, dispatch)
  })
)(withRouter(LoginFormContainer));
