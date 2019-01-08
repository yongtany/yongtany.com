import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Landing from 'components/landing/Landing';
import RecomPostList from 'components/list/RecomPostList';
import LandingWrapper from 'components/landing/LandingWrapper';
import TagList from 'components/landing/TagList';
import Skillsets from '../components/landing/Skillsets';
import SubWrapper from '../components/landing/SubWrapper';
import Projects from '../components/landing/Projects';

const HomePage = () => {
  return (
    <PageTemplate>
      <Landing />
      <LandingWrapper>
        <RecomPostList />
        <SubWrapper>
          <Skillsets />
          <Projects />
          <TagList />
        </SubWrapper>
      </LandingWrapper>
    </PageTemplate>
  );
};

export default HomePage;
