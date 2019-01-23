import React from 'react';
import styles from './AuthBoard.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import LoginFormContainer from 'containers/auth/LoginFormContainer';
import SignFormContainer from 'containers/auth/SignupFormContainer';

const cx = classNames.bind(styles);

const AuthBoard = (props) => (
  <div className={cx('auth-board')}>
    <div className={cx('auth-header')}>
      <Link to='/'>
        <img src={require('images/logo.png')} alt="welome" />
      </Link>
      <p className={cx('auth-title')}>
        Join with Yongtany
      </p>
    </div>
    <div className={cx('auth-content')}>
      <div className={cx('white-box', 'form-box')}>
        {props.action ==='login' && <LoginFormContainer />}
        {props.action ==='signup' && <SignFormContainer />}
      </div>
      <div className={cx('white-box')}>
        {props.action === "login" && (
        <p>Don't have an account?{" "}
          <span onClick={props.changeAction} className={cx('change-link')}>
            Sign up
          </span>
        </p>
        )}
        {props.action === "signup" && (
          <p>Have an account?{" "}
            <span onClick={props.changeAction} className={cx('change-link')}>
              Log in
            </span>
          </p>
        )}
      </div>
    </div>
  </div>
);

export default AuthBoard;
