import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';
import RecentListContainer from 'containers/list/RecentListContainer';

const ListPage = ({ match }) => {
  // page의 기본 값을 1로
  const { page =1, tag } = match.params;
  return (
    <PageTemplate>
      <ListWrapper>
        <ListContainer
          page={parseInt(page, 10)}
          tag={tag}
        />
        <RecentListContainer />
      </ListWrapper>
    </PageTemplate>
  );
};

export default ListPage;
