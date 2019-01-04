import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import PostList from '../components/list/PostList';
import RecomPostList from '../components/list/RecomPostList/RecomPostList';

const ListPage = () => {
  return (
    <PageTemplate>
      <ListWrapper>
        <PostList />
        <RecomPostList />
      </ListWrapper>
    </PageTemplate>
  );
};

export default ListPage;
