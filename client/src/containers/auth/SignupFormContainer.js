import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { toast } from "react-toastify";
import { validateEmail } from 'librarys/validations'

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
        facebookLogin={this._handleFacebookLogin}
        googleLogin={this._handleGoogleLogin}
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

    const user = {
      email: email,
      name: name,
      username: username,
      password: password
    };

    try {
      event.preventDefault();
      if (
        email !== "" &&
        name !== "" &&
        username !== "" &&
        password !== ""
      ) {
        if(!validateEmail(email)) {
          toast.error('Not a valid Email');
        } else {
          await AuthActions.signUp(user);
          history.push('/');
        }
      } else {
        toast.error('Fill in the input fields.');
      }
    } catch(e) {
      console.log(e);
    }
  };

  _handleGoogleLogin = async res => {
    const { AuthActions, history } = this.props;
    const accessToken = {
      access_token : res.accessToken
    }

    await AuthActions.googleLogin(accessToken);
    history.push('/');
  };

  _handlefacebookLogin = async res => {
    const { AuthActions, history } = this.props;
    const accessToken = {
      access_token : res.accessToken
    }

    await AuthActions.facebookLogin(accessToken);
    history.push('/');
  };
}


export default connect(
  null,
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(withRouter(SignupFormContainer));
