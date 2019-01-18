import React from 'react';
import styles from './PostHeader.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';


const cx = classNames.bind(styles);

const PostHeader = () => (
  <div className={cx('post-header')}>
    <div className={cx('button')}>
      <Link to="/editor">
         <Button>Write post</Button>
      </Link>
    </div>
    <div className={cx('button')}>
      <Link to="/editor">
         <Button>Update</Button>
      </Link>
    </div>
    <div className={cx('button')}>
      <Link to="/editor">
         <Button theme="red">Delete</Button>
      </Link>
    </div>
  </div>
);

export default PostHeader;
