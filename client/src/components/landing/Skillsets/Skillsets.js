import React from 'react';
import styles from './Skillsets.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Skillsets = () => {
  return (
    <div className={cx('exper-sets')}>
      <div className={cx('exper-header')}>
        <h2 className={cx('title')}>Experieces</h2>
      </div>
      <div className={cx('exper-contents')}>
        Experieces
      </div>
    </div>
  )
}

export default Skillsets;
