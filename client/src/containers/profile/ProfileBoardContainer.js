import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'store/modules/auth';
import { withRouter } from 'react-router-dom';

import ProfileBoard from 'components/profile/ProfileBoard';


class ProfileBoardContainer extends Component {

  handleSignOut = async () => {
    const { AuthActions, history } = this.props;
    await AuthActions.signOut();
    history.push('/');
  }

  render() {
    const { name,profile_image } = this.props;
    const { handleSignOut } = this;

    return (
      <ProfileBoard
        name={name}
        profile_image={profile_image}
        signOut={handleSignOut}
      />
    );
  }
}

export default connect(
  (state) => ({
    name: state.auth.get('name'),
    profile_image: state.auth.get('profile_image')
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
  })
)(withRouter(ProfileBoardContainer));
