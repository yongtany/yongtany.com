import React from 'react';
import styles from './Tag.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Tag = (prop) => (
  <Link to={prop.to} className={cx('tag')}>#tag</Link>
);

export default Tag;
