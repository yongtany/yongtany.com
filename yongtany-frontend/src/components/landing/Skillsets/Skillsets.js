import React from 'react';
import styles from './Skillsets.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Skillsets = () => {
  return (
    <div className={cx('skill-sets')}>
      <div className={cx('skill-header')}>
        <h2 className={cx('title')}>Skill sets</h2>
      </div>
      <div className={cx('skill-contents')}>
        Skillsets
      </div>
    </div>
  )
}

export default Skillsets;
