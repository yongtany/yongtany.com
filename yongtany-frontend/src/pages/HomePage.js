import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Landing from 'components/landing/Landing';
import RecentListContainer from 'containers/list/RecentListContainer';
import LandingWrapper from 'components/landing/LandingWrapper';
import TagList from 'components/landing/TagList';
import Skillsets from '../components/landing/Skillsets';
import SubWrapper from '../components/landing/SubWrapper';
import Projects from '../components/landing/Projects';

const HomePage = ({match}) => {
  const { page =1, tag } = match.params;
  return (
    <PageTemplate>
      <Landing />
      <LandingWrapper>
        <RecentListContainer
        page={parseInt(page, 10)}
        tag={tag}/>
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
