import React from 'react';
import styles from './PostInfo.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

const PostInfo = () => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <h1 className={cx('title')}>Build a REST API with AdonisJs and TDD Part 1</h1>
      <h2 className={cx('sub')}>JANUARY 02, 2019 | PUBLISHED BY NOMADYONG</h2>
      <div className={cx('tags')}>
        <Link to={'/'}>#tags</Link>
        <Link to={'/'}>#tags</Link>
        <Link to={'/'}>#tags</Link>
      </div>
    </div>
  </div>
);

export default PostInfo;

