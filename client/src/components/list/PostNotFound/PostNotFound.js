import React from 'react';
import styles from './PostNotFound.scss';
import classNames from 'classnames/bind';

import Loading from 'components/common/Loading';

const cx = classNames.bind(styles);


const PostNotFound = ({ search, loading }) => (
  <div className={cx('not-found')}>
    <div className={cx('content')}>
      <div className={cx('text')}>
        {loading ? <Loading /> : (
          <p>There are no results for <span>'{search}'</span></p>
        )}
      </div>
    </div>
  </div>
);

export default PostNotFound;
