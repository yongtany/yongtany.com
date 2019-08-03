import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as authActions from 'store/modules/auth';

import Footer from 'components/common/Footer';

class FooterContainer extends Component {

  handleSignOut = () => {
    const { AuthActions } = this.props;
    AuthActions.signOut();
  }

  render() {
    const { isLoggedIn, profile_image, name} = this.props;
    console.log(profile_image);
    return (
      <Footer
        isLoggedIn={isLoggedIn}
        name={name}
        signOut={this.handleSignOut}
      />
    )
  }
}

export default connect(
  (state) => ({
    isLoggedIn: state.auth.get('isLoggedIn'),
    profile_image: state.auth.get('profile_image'),
    name: state.auth.get('name')
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
  })
)(withRouter(FooterContainer));
