import React from 'react';
import styles from './PostWrapper.scss';
import classNames from 'classnames/bind';
import PostHeader from 'components/post/PostHeader';



const cx = classNames.bind(styles);

const PostWrapper = ({children}) => (
    <div className={cx('post-wrapper')}>
      <PostHeader />
        {children}
    </div>
);

export default PostWrapper;
