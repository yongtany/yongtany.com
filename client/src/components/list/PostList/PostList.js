import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';

import PostItem from 'components/list/PostItem';
import PostNotFound from 'components/list/PostNotFound'
import Pagination from 'components/list/Pagination';
import Button from 'components/common/Button';
import Loading from 'components/common/Loading';

const cx = classNames.bind(styles);

const PostList = ({posts, page, lastPage, tag, search, isLoggedIn, loading}) => {
  const postList = posts.map(
    (post) => {
      const { _id, title, body, publishedDate, postImage, tags } = post.toJS();

      const name = post.getIn(['user', 'name']);
      const profile_image = post.getIn(['user', 'profile_image']);

      return (
        <PostItem
          title={title}
          body={body}
          publishedDate={publishedDate}
          postImage={postImage}
          name={name}
          profile_image={profile_image}
          tags={tags}
          key={_id}
          id={_id}
        />
      )
    }
  );

  return (
    <div className={cx('post-list')}>
      <div className={cx('header')}>
        <div className={cx('label')}>LATEST BLOG POSTS</div>
        <div className={cx('write')}>
        {isLoggedIn ?
          <Button to={'/editor'}>
            Write post
          </Button>
        : null
        }
        </div>
      </div>
        {posts.toJS().length === 0 ?
        loading ? <Loading /> :
        <PostNotFound
          search={search}
        /> :
          postList
        }
        <Pagination page={page} lastPage={lastPage} tag={tag}/>
    </div>
  )
};

export default PostList;
