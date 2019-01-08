import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Landing from 'components/landing/Landing';
import RecomPostList from 'components/list/RecomPostList';
import LandingWrapper from 'components/landing/LandingWrapper';
import TagList from 'components/landing/TagList';

const HomePage = () => {
  return (
    <PageTemplate>
      <Landing />
      <LandingWrapper>
        <RecomPostList />
        <TagList />
      </LandingWrapper>
    </PageTemplate>
  );
};

export default HomePage;
