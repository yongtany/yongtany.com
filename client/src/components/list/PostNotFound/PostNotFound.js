import React from 'react';
import styles from './PostNotFound.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PostNotFound = ({ search }) => (
  <div className={cx('not-found')}>
    <div className={cx('content')}>
      <div className={cx('text')}>
        <p>There are no results for <span>'{search}'</span></p>
      </div>
    </div>
  </div>
);

export default PostNotFound;
