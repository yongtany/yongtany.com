import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from 'react-google-login';
import formStyles from 'styles/formStyles.scss'

import * as keys from 'lib/keys';

const SignupForm = (props) => (
  <div className={formStyles.formComponent}>
        <FacebookLogin
            appId={keys.FACEBOOK_CLIENT_ID}
            autoLoad={false}
            fields="name,email,picture"
            callback={props.facebookLogin}
            cssClass={formStyles.facebookLogin}
            icon="fab fa-facebook-square"
          />
        <GoogleLogin
            clientId={keys.GOOGLE_CLIENT_ID}
            render={renderProps => (
              <button className={formStyles.googleLogin} onClick={renderProps.onClick}>
                <i className={'fab fa-google'}></i>Login with Google
              </button>
            )}
            buttonText="Login with Google"
            onSuccess={props.googleLogin}
            // onFailure={responseGoogle}
          />

        <span className={formStyles.divider}>or</span>
        <form
          className={formStyles.form}
          onSubmit={props.handleSubmit }
          method="post"
        >
            <input
                type="email"
                placeholder="Email"
                className={formStyles.textInput}
                value={props.emailValue}
                onChange={props.handleInputChange}
                name="email"
            />
            <input
                type="text"
                placeholder="Name"
                className={formStyles.textInput}
                value={props.nameValue}
                onChange={props.handleInputChange}
                name="name"
            />
            <input
                type="username"
                placeholder="Username"
                className={formStyles.textInput}
                value={props.usernameValue}
                onChange={props.handleInputChange}
                name="username"
            />
            <input
                type="password"
                placeholder="Password"
                className={formStyles.textInput}
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name="password"
            />
            <input
                type="submit"
                value="Sign up"
                className={formStyles.button}
            />
        </form>
    </div>
);

export default SignupForm;
