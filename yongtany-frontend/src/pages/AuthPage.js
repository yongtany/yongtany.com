import React from 'react';
import AuthWrapper from 'components/auth/AuthWrapper';
import AuthContainer from 'containers/auth/AuthContainer';

const AuthPage = () => {
  return (
      <AuthWrapper>
        <AuthContainer />
      </AuthWrapper>
  );
};

export default AuthPage;
