import React from 'react'
import styles from './Landing.scss';
import classNames from 'classnames/bind';

import Myface from 'images/myFace.jpeg';

const cx = classNames.bind(styles);

const Landing = () => (
  <div className={cx('landing')}>
    <img src={Myface} alt={'myface'} />
    <h1 className={cx('lg-heading')}>
        Yongtany
        <span className={cx('text-secondary')}> 's blog</span>
    </h1>
    <h2 className={cx('sm-heading')}>
        Developer, Designer &
        Univ. student
    </h2>
    <div className={cx('icons')}>
        <a href="http://dev-yong.tistory.com/" className={cx('icon')}>
            <i className={cx('fab fa-blogger fa-2x')}></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100000467400701" className={cx('icon')}>
            <i className={cx('fab fa-facebook fa-2x')}></i>
        </a>
        <a href="https://www.instagram.com/yong_tany/" className={cx('icon')}>
            <i className={cx('fab fa-instagram fa-2x')}></i>
        </a>
        <a href="https://github.com/nomad-yong" className={cx('icon')}>
            <i className={cx('fab fa-github fa-2x')}></i>
        </a>
    </div>
  </div>

);

export default Landing;
