/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import styles from './PostItem.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';

import Tag from 'components/common/Tag';

const cx = classNames.bind(styles);
const url='https://picsum.photos/740/420/?random';

const PostItem = ({title, body, publishedDate, userName, tags, id}) => {
  const tagList = tags.map(
    tag => <Tag key={tag} to={`/tag/${tag}`} tag={tag} />
  );

  return (
    <div className={cx('post-item')}>
      <img src={url} alt={'logo'} />
      <div className={cx('content')}>
        <Link to={`/post/${id}`}><span className={cx('title')}>{title}</span></Link>
        <div className={cx('sub')}>
          <span className={cx('published')}>{userName}</span> | <span className={cx('created')}>{moment(publishedDate).format('ll')}</span>
        </div>
        <p className={cx('text')}>
          {removeMd(body)}
        </p>
        <div className={cx('tags')}>
          {tagList}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
