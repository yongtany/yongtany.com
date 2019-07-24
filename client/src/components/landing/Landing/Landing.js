import React from 'react'
import styles from './Landing.scss';
import classNames from 'classnames/bind';

import Myface from 'images/myFace.jpeg';

const cx = classNames.bind(styles);

const Landing = () => (
  <div className={cx('landing-board')}>
    <img src={Myface} alt={'myface'} />
    <h1 className={cx('heading')}>
        Yongtany
        <span className={cx('text-secondary')}> 's TIL</span>
    </h1>
    <h2 className={cx('bio')}>
      Univ. student & Wanna be a front-end Developer
    </h2>
    <div className={cx('conn-icons')}>
        <a href="http://dev-yong.tistory.com/" className={cx('icon')}>
            <i className={cx('fab fa-blogger fa-2x')}></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100000467400701" className={cx('icon')}>
            <i className={cx('fab fa-facebook fa-2x')}></i>
        </a>
        <a href="https://www.instagram.com/yong_tany/" className={cx('icon')}>
            <i className={cx('fab fa-instagram fa-2x')}></i>
        </a>
        <a href="https://github.com/yongtany" className={cx('icon')}>
            <i className={cx('fab fa-github fa-2x')}></i>
        </a>
    </div>
  </div>

);

export default Landing;
