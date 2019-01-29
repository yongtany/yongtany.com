import React from 'react';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button'

const cx = classNames.bind(styles);

const EditorHeader = ({onGoBack, onUpdate, onDelete}) => {
  return (
    <div className={cx('editor-header')}>
      <div className={cx('back')}>
      <Button onClick={onGoBack} theme="outline">BACK</Button>
      </div>
      <div className={cx('right')}>
        <div className={cx('update')}>
          <Button onClick={onUpdate} theme="outline">UPDATE</Button>
        </div>
        <div className={cx('delete')}>
          <Button onClick={onDelete} theme="outline">DELETE</Button>
        </div>
      </div>
    </div>
  )
}


export default EditorHeader;
