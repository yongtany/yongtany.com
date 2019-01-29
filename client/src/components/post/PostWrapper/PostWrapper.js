import React from 'react';
import styles from './PostWrapper.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const PostWrapper = ({children}) => (
    <div className={cx('post-wrapper')}>
        {children}
    </div>
);

export default PostWrapper;
