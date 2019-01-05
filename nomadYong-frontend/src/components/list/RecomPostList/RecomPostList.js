/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './RecomPostList.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const url='https://picsum.photos/740/420/?random';

const RecomPostItem = () => (
  <div className={cx('recompost-item')}>
    <div className={cx('column')}>
      <img src={url} alt={'photo'} />
    </div>
    <div className={cx('column')}>
      <div className={cx('content')}>
        <span className={cx('title')}>Title</span>
        <span className={cx('author')}>By author</span>
        <div className={cx('tags')}>
          <a to="#">#태그</a>
          <a to="#">#태그</a>
          <a to="#">#태그</a>
        </div>
      </div>
    </div>
  </div>
);

const RecomPostList = () => (
  <div className={cx('recompost-list')}>
    <span className={cx('label')}>MOST LIKED POSTS</span>
    <br />
    <RecomPostItem />
    <RecomPostItem />
    <RecomPostItem />
    <RecomPostItem />
  </div>
);


export default RecomPostList;
