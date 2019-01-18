import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'store/modules/auth';


import Navigation from 'components/common/Navigation';


class NavigationContainer extends Component {

  handleSignOut = () => {
    const { AuthActions } = this.props;
    AuthActions.signOut();
  }

  render() {
    const { isLoggedIn} = this.props;

    return (
      <Navigation
        isLoggedIn={isLoggedIn}
        signOut={this.handleSignOut}
      />
    )
  }
}

export default connect(
  (state) => ({
    isLoggedIn: state.auth.get('isLoggedIn'),
    name: state.auth.get('name')
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(NavigationContainer);
