import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ProfileBoardContainer from 'containers/profile/ProfileBoardContainer'


const ProfilePage = () => {
  return (
    <PageTemplate>
      <ProfileBoardContainer />
    </PageTemplate>
  );
};

export default ProfilePage;
