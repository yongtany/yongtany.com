import React from 'react'
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = () => (
    <div className={cx('footer')}>
        <Link to="/" className={cx('brand')}>yongtany</Link>
        <div className={cx('copyright')}>
        Copyright &copy; {new Date().getFullYear()} yongtany
        </div>
    </div>
);

export default Footer;
