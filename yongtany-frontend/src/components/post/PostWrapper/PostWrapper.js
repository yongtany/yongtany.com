import React from 'react';
import styles from './PostWrapper.scss';
import classNames from 'classnames/bind';
import PostHeaderContainer from 'containers/post/PostHeaderContainer';



const cx = classNames.bind(styles);

const PostWrapper = ({children}) => (
    <div className={cx('post-wrapper')}>
      <PostHeaderContainer />
        {children}
    </div>
);

export default PostWrapper;
