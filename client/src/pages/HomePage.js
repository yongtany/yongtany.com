import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Landing from 'components/landing/Landing';
import RecentListContainer from 'containers/list/RecentListContainer';
import LandingWrapper from 'components/landing/LandingWrapper';
import ContactContainer from 'containers/contact/ContactContainer';
import SubWrapper from 'components/landing/SubWrapper';
import RecentWrapper from 'components/landing/RecentWrapper';
import Projects from 'components/landing/Projects';

const HomePage = () => {
  return (
    <PageTemplate>
      <Landing />
      <LandingWrapper>
        <RecentWrapper>
          <RecentListContainer />
        </RecentWrapper>
        <SubWrapper>
          <Projects />
          <ContactContainer />
        </SubWrapper>
      </LandingWrapper>
    </PageTemplate>
  );
};

export default HomePage;
