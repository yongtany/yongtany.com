import React from 'react';
import styles from './SubWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SubWrapper = ({children}) => (
  <div className={cx('sub-wrapper')}>
      {children}
  </div>
);

export default SubWrapper;
