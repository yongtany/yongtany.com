import React from 'react';
import styles from './PostHeader.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';


const cx = classNames.bind(styles);

const PostHeader = ({postId, isLoggedIn, userId, writerId, onRemove }) => (
  <div className={cx('post-header')}>
  {isLoggedIn && <div className={cx('buttons')}>
    <div className={cx('button1')}>
      <Link to="/editor">
        <Button>Write</Button>
      </Link>
    </div>
    {
      // flex를 유지하려고 배열 형태로 렌더링합니다.
      userId===writerId &&  [
      <div key="edit" className={cx('button1')}>
        <Button to={`/editor?id=${postId}`}>
            Edit
        </Button>
      </div>,
      <div key="remove" className={cx('button1')}>
        <Button theme="red" onClick={onRemove}>Delete</Button>
      </div>
      ]
    }
    </div> }
  </div>
);

export default PostHeader;
