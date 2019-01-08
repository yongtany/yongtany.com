import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Landing from 'components/landing/Landing';
import RecomPostList from 'components/list/RecomPostList';
import LandingWrapper from 'components/landing/LandingWrapper';

const HomePage = () => {
  return (
    <PageTemplate>
      <Landing />
      <LandingWrapper>
        <RecomPostList />
      </LandingWrapper>
    </PageTemplate>
  );
};

export default HomePage;
