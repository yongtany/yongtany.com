import React from 'react';
import styles from './PostHeader.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';


const cx = classNames.bind(styles);

const PostHeader = ({postId, isLoggedIn}) => (
  <div className={cx('post-header')}>
  {isLoggedIn && <div className={cx('buttons')}>
    <div className={cx('button')}>
      <Link to="/editor">
        <Button>Write post</Button>
      </Link>
    </div>
    {

      // flex를 유지하려고 배열 형태로 렌더링합니다.
      postId && [
      <div key="edit" className={cx('button')}>
        <Link to={`/editor?id=${postId}`}>
          <Button>Update</Button>
        </Link>
      </div>,
      <div key="remove" className={cx('button')}>
        <Link to="/editor">
          <Button theme="red">Delete</Button>
        </Link>
      </div>
      ]
    }
    </div> }
  </div>
);

export default PostHeader;
