import React from 'react';
import styles from './PostItem.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';

import Tag from 'components/common/Tag';

const cx = classNames.bind(styles);

const PostItem = ({title, body, publishedDate, userName, tags, id}) => {
  const tagList = tags.map(
    tag => <Tag key={tag} to={`/tag/${tag}`} tag={tag} />
  );

  return (
    <div className={cx('post-item')}>
      <div className={cx('image')}>
        <h4 className={cx('category')}>Develop</h4>
      </div>
      <div className={cx('content')}>
        <Link to={`/post/${id}`}><h2 className={cx('title')}>{title}</h2></Link>
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
