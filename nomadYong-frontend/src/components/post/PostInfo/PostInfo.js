import React from 'react';
import styles from './PostInfo.scss';
import classNames from 'classnames/bind';
import moment from 'moment';

import Tag from 'components/common/Tag';


const cx = classNames.bind(styles);

const PostInfo = ({title, tags, publishedDate, id}) => {


  return (
    <div className={cx('post-info')}>
    <div className={cx('info')}>
      <h1 className={cx('title')}>{title}</h1>
      <h2 className={cx('sub')}>{moment(publishedDate).format('ll')} | PUBLISHED BY {id}</h2>
      <div className={cx('tags')}>
        {
          // tags가 존재하는 경우에만 map을 실행합니다.
          tags && tags.map(
            tag => <Tag key={tag} to={`/tag/${tag}`} tag={tag} />
          )
        }
      </div>
    </div>
  </div>
  )
};

export default PostInfo;

