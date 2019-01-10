import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import SignupForm from "components/auth/SignupForm";
import * as authActions from 'store/modules/auth';

class SignupFormContainer extends Component {

  state = {
    email: "",
    name: "",
    username: "",
    password: ""
  };

  render() {
    const { email, name, username, password } = this.state;
    return (
      <SignupForm
        emailValue={email}
        nameValue={name}
        usernameValue={username}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
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

   _handleSubmit = async event  => {
    const { email, name, username, password } = this.state;
    const { AuthActions, history } = this.props;

    const post = {
      email: email,
      name: name,
      username: username,
      password: password
    };

    event.preventDefault();
    await AuthActions.signUp(post);
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
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(withRouter(SignupFormContainer));
