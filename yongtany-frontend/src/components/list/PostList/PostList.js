import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import PostItem from 'components/list/PostItem';
import Pagination from 'components/list/Pagination';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);


const PostList = ({posts, page, lastPage, tag, isLoggedIn}) => {
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
        {isLoggedIn ?
          <div className={cx('button')}>
            <Link to="/editor">
              <Button>Write post</Button>
            </Link>
          </div>
        : null
        }
      </div>

        {postList}
        <Pagination page={page} lastPage={lastPage} tag={tag}/>
    </div>
  )
};


export default PostList;
