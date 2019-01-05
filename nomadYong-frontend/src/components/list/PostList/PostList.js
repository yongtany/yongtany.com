import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';

import PostItem from 'components/list/PostItem';
import Pagination from 'components/list/Pagination';

const cx = classNames.bind(styles);

const PostList = () => (
  <div className={cx('post-list')}>
    <span className={cx('label')}>LATEST BLOG POSTS</span>
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <Pagination />
  </div>
);


export default PostList;
