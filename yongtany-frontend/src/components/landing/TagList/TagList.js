import React from 'react';
import styles from './TagList.scss';
import classNames from 'classnames/bind';

import Tag from 'components/common/Tag';

const cx = classNames.bind(styles);

const TagList = () => {
  return (
    <div className={cx('tag-list')}>
      <div className={cx('list-header')}>
        <h2 className={cx('title')}>Tag List</h2>
      </div>
      <div className={cx('tags')}>
        <Tag to={'/'} tag={'javascript'} />
        <Tag to={'/'} tag={'programming'} />
        <Tag to={'/'} tag={'google'} />
        <Tag to={'/'} tag={'facebook'} />
        <Tag to={'/'} tag={'function'} />
        <Tag to={'/'} tag={'react'} />
        <Tag to={'/'} tag={'nodejs'} />
        <Tag to={'/'} tag={'express'} />
        <Tag to={'/'} tag={'redux'} />
        <Tag to={'/'} tag={'python'} />
        <Tag to={'/'} tag={'koa'} />
        <Tag to={'/'} tag={'database'} />
        <Tag to={'/'} tag={'mongodb'} />
        <Tag to={'/'} tag={'mongoose'} />
        <Tag to={'/'} tag={'joi'} />
        <Tag to={'/'} tag={'router'} />
        <Tag to={'/'} tag={'props'} />
      </div>
    </div>
  )
}

export default TagList;
