import React from 'react';
import styles from './RecentWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RecentWrapper = ({children}) => (
  <div className={cx('recent-wrapper')}>
      {children}
  </div>
);

export default RecentWrapper;
