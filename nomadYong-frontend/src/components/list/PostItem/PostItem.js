/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import styles from './PostItem.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const url = 'https://picsum.photos/740/420/?random'

const PostItem = () => (
  <div className={cx('post-item')}>
    <img src={url} alt={'photo'} />
    <div className={cx('content')}>
      <span className={cx('pre-title')}>2019-01-04</span>
      <span className={cx('title')}>Title</span>
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
