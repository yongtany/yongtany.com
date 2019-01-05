import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import PostContainer from '../containers/post/PostContainer';


const PostPage = () => {
  return (
    <div>
      <PageTemplate>
        <PostContainer />
      </PageTemplate>
    </div>
  );
};

export default PostPage;
