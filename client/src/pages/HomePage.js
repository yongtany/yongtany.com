import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Landing from 'components/landing/Landing';
import RecentListContainer from 'containers/list/RecentListContainer';
import LandingWrapper from 'components/landing/LandingWrapper';
import Contact from 'components/landing/Contact';
import SubWrapper from 'components/landing/SubWrapper';
import Projects from 'components/landing/Projects';

const HomePage = () => {
  return (
    <PageTemplate>
      <Landing />
      <LandingWrapper>
        <RecentListContainer />
        <SubWrapper>
          <Projects />
          <Contact />
        </SubWrapper>
      </LandingWrapper>
    </PageTemplate>
  );
};

export default HomePage;
