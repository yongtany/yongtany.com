import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from 'react-google-login';
import styles from 'styles/formStyles.scss'

import classNames from 'classnames/bind';

import * as keys from 'config/provider';


const cx = classNames.bind(styles);

const SignupForm = (props) => (
  <div className={cx('formComponent')}>
        <FacebookLogin
            appId={keys.FACEBOOK_CLIENT_ID}
            autoLoad={false}
            fields="name,email,picture"
            callback={props.facebookLogin}
            cssClass={cx('facebookLogin')}
            icon="fab fa-facebook-square"
          />
        <GoogleLogin
            clientId={keys.GOOGLE_CLIENT_ID}
            render={renderProps => (
              <button className={cx('googleLogin')} onClick={renderProps.onClick}>
                <i className={cx('fab fa-google')}></i>Login with Google
              </button>
            )}
            buttonText="Login with Google"
            onSuccess={props.googleLogin}
            // onFailure={responseGoogle}
          />

        <span className={cx('divider')}>or</span>
        <form
          className={cx('form')}
          onSubmit={props.handleSubmit }
          method="post"
        >
            <input
                type="email"
                placeholder="Email"
                className={cx('textInput')}
                value={props.emailValue}
                onChange={props.handleInputChange}
                name="email"
            />
            <input
                type="text"
                placeholder="Name"
                className={cx('textInput')}
                value={props.nameValue}
                onChange={props.handleInputChange}
                name="name"
            />
            <input
                type="username"
                placeholder="Username"
                className={cx('textInput')}
                value={props.usernameValue}
                onChange={props.handleInputChange}
                name="username"
            />
            <input
                type="password"
                placeholder="Password"
                className={cx('textInput')}
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name="password"
            />
            <input
                type="submit"
                value="Sign up"
                className={cx('button')}
            />
        </form>
    </div>
);

export default SignupForm;
