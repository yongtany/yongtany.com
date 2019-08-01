import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import PostPageWrapper from 'components/post/PostPageWrapper';
import PostWrapper from 'components/post/PostWrapper';
import Post from 'containers/post/Post';
import RecentListContainer from 'containers/list/RecentListContainer';
import RecentWrapper from 'components/landing/RecentWrapper';
import AskRemoveModalContainer from 'containers/modal/AskRemoveModalContainer';



const PostPage = ({match}) => {
  const { id } = match.params;
  return (
    <div>
      <PageTemplate>
        <PostPageWrapper>
          <PostWrapper>
            <Post id={id} />
          </PostWrapper>
          <AskRemoveModalContainer />
          <RecentWrapper>
            <RecentListContainer />
          </RecentWrapper>
        </PostPageWrapper>
      </PageTemplate>
    </div>
  );
};

export default PostPage;
