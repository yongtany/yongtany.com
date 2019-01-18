import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Post from '../containers/post/Post';


const PostPage = ({match}) => {
  const { id } = match.params;
  return (
    <div>
      <PageTemplate>
        <Post id={id} />
      </PageTemplate>
    </div>
  );
};

export default PostPage;
