import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { toast } from "react-toastify";
import { validateEmail } from 'librarys/validations'


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
        googleLogin={this._handleGoogleLogin}
        facebookLogin={this._handlefacebookLogin}
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
    const { AuthActions, history } = this.props;

    const post ={
      email: email,
      password: password
    }

    try {
      event.preventDefault();
      if (
        email !== "" &&
        password !== ""
      ) {
        if(!validateEmail(email)) {
          toast.error('Not a valid Email');
        } else {
          await AuthActions.signIn(post);
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
)(withRouter(LoginFormContainer));
