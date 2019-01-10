import React from 'react';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const EditorHeader = ({onGoBack, onSubmit}) => {
  return (
    <div className={cx('editor-header')}>
      <div className={cx('back')}>
        <Button theme="outline">
          <Link to="/">뒤로가기</Link>
        </Button>
      </div>
      <div className={cx('submit')}>
        <Button onClick={onSubmit} theme="outline">작성하기</Button>
      </div>
    </div>
  )
}


export default EditorHeader;
