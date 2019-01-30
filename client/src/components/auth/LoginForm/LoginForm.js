import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import styles from 'styles/formStyles.scss'

import classNames from 'classnames/bind';

import * as keys from 'librarys/provider';


const cx = classNames.bind(styles);


const LoginForm = (props) => (
  <div className={cx('formComponent')}>
        <form className={cx('form')} onSubmit={props.handleSubmit} >
            <input
                type="text"
                className={cx('textInput')}
                placeholder="Email"
                value={props.emailValue}
                onChange={props.handleInputChange}
                name="email"
            />
            <input
                type="password"
                className={cx('textInput')}
                placeholder="Password"
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name="password"
            />
            <input
                type="submit"
                value="Log in"
                className={cx('button')}
            />
        </form>
        <span className={cx('divider')}>or</span>
        <span>
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
        </span>
        <br />
        <span className={cx('forgotLink')}>
            Forgot password?
        </span>
    </div>
);

export default LoginForm;
