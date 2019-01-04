import React from 'react';
import styles from './RecomPostList.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const RecomPostItem = () => (
  <div>
    Recommand Post
  </div>
);

const RecomPostList = () => (
  <div className={cx('post-list')}>
    <RecomPostItem />
    <RecomPostItem />
    <RecomPostItem />
    <RecomPostItem />
  </div>
);


export default RecomPostList;
