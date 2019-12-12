import React from 'react';
import styles from './PostSkeleton.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Item = () => {
  return (
    <div className={cx('em-item')}>
        <div className={cx('em-image')} />
        <div className={cx('content')}>
          <div className={cx('em-title')} />
          <div>
            <div className={cx('halfLine')} />
          </div>
          <div className={cx('fullLine')} />
          <div className={cx('fullLine')} />
          <div className={cx('fullLine')} />
          <div className={cx('em-tags')}>
            <div className={cx('em-tag')}/>
            <div className={cx('em-tag')}/>
            <div className={cx('em-tag')}/>
          </div>
        </div>
      </div>
  )
}

const PostSkeleton = () => {
  return (
    <div className={'skeleton-wrapper'}>
      <div className={cx('label')}>LATEST BLOG POSTS</div>
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default PostSkeleton;
