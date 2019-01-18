import React from 'react';
import styles from './AuthWrapper.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const AuthWrapper = ({children}) => {
  return (
    <div className={cx('auth-wrapper')}>
      <main>
        {children}
      </main>
    </div>
  )
};

export default AuthWrapper;
