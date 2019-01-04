/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import styles from './PostItem.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);


const PostItem = () => (
  <div className={cx('post-item')}>
    <div className={cx('photo')} />
    <div className={cx('content')}>
      <span className={cx('title')}>Title</span>
      <p className={cx('sub')}>
        <span className={cx('published')}>By nomadyong</span> | <span className={cx('created')}>On 2019-01-04</span>
      </p>
      <p className={cx('text')}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      <div className={cx('tags')}>
        <a to="#">#태그</a>
        <a to="#">#태그</a>
        <a to="#">#태그</a>
      </div>
    </div>
  </div>
);

export default PostItem;
