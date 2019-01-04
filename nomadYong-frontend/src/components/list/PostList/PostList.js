import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';

import PostItem from 'components/list/PostItem';

const cx = classNames.bind(styles);

const PostList = () => (
  <div className={cx('post-list')}>
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </div>
);


export default PostList;
