import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Landing from 'components/landing/Landing'
import AboutWrapper from 'components/about/AboutWrapper';
import AboutMyself from 'components/about/AboutMyself';

const AboutPage = () => {
  return (
    <PageTemplate>
      <Landing />
      <AboutWrapper>
        <AboutMyself />
      </AboutWrapper>
    </PageTemplate>
  );
};

export default AboutPage;
