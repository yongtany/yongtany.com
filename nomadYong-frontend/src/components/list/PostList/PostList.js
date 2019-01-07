import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';

import PostItem from 'components/list/PostItem';
import Pagination from 'components/list/Pagination';

const cx = classNames.bind(styles);


const PostList = ({posts, page, lastPage, tag}) => {
  const postList = posts.map(
    (post) => {
      const { _id, title, body, publishedDate, tags } = post.toJS();
      return (
        <PostItem
          title={title}
          body={body}
          publishedDate={publishedDate}
          tags={tags}
          key={_id}
          id={_id}
        />
      )
    }
  );


  return (
    <div className={cx('post-list')}>
    <span className={cx('label')}>LATEST BLOG POSTS</span>
      {postList}
      <Pagination page={page} lastPage={lastPage} tag={tag}/>
  </div>
  )
};


export default PostList;
