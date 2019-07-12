import React from 'react'
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = () => (
    <footer className={cx('footer')}>
      <div className={cx('f-container')}>
        <div className={cx('f-logo')}>
          <p className={cx('copyright')}>
            All content &copy; {new Date().getFullYear()}
          </p>
          <Link to="/" className={cx('brand')}>&lt;Yongtany /&gt;</Link>
        </div>
        <ul className={cx('navbar-link')}>
          <li className={cx('nav-item')}>
            <Link to="/about" className={cx('link')}>About</Link>
          </li>
          <li className={cx('nav-item')}>
            <Link to="/post" className={cx('link')}>Blog</Link>
          </li>
          <li className={cx('nav-item')}>
            <Link to="/auth" className={cx('link')}>Sign In</Link>
          </li>
        </ul>
      </div>
    </footer>
);

export default Footer;
