/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './RecentPostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Tag from 'components/common/Tag';
import { List } from 'immutable';

const cx = classNames.bind(styles);

const RecentPostList = ({recentPosts= List()}) => {

  const recentPostList = recentPosts.map(
    (recentPost) => {
      const { _id, title, postImage, tags } = recentPost.toJS();

      const name = recentPost.getIn(['user', 'name']);

      return (
        <RecentPostItem
          title={title}
          postImage={postImage}
          name={name}
          tags={tags}
          key={_id}
          id={_id}
        />
      )
    }
  );
  return (
    <div className={cx('recent-list')}>
      <span className={cx('label')}>Recent posts</span>
      <br />
      {recentPostList}
    </div>
  )
};

const RecentPostItem = ({title, postImage, name, tags, id}) => (
    <div className={cx('container')}>
      <div className={cx('recent-item')}>
        <div className={cx('column')}>
          <img src={postImage} alt={'photo'} />
        </div>
        <div className={cx('column')}>
          <div className={cx('content')}>
            <Link to={`/post/${id}`}><h2 className={cx('title')}>{title}</h2></Link>
            <span className={cx('author')}>By {name}</span>
            <div className={cx('tags')}>
              {/* <Tag key={''} to={`/tag/${''}`} tag={'#tag'} />
              <Tag key={''} to={`/tag/${''}`} tag={'#tag'} />
              <Tag key={''} to={`/tag/${''}`} tag={'#tag'} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
)




export default RecentPostList;
