import React from 'react';
import styles from './PostPageWrapper.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);

const PostPageWrapper = ({children}) => (
    <div className={cx('post-page-wrapper')}>
        {children}
    </div>
);

export default PostPageWrapper;
