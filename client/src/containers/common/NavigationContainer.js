import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as authActions from 'store/modules/auth';
import * as listActions from 'store/modules/list';


import Navigation from 'components/common/Navigation';


class NavigationContainer extends Component {
  state = {
    search: ''
  };

  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
  };
  _handleKeyPress = async event  => {
    if(event.key === 'Enter') {
      const { search } = this.state;
      const { history } = this.props;
      history.push(`/search/${search}`);
    }
  };

  handleSignOut = () => {
    const { AuthActions } = this.props;
    AuthActions.signOut();
  }

  render() {
    const { isLoggedIn, profile_image, name} = this.props;
    const { search } = this.state;

    return (
      <Navigation
        isLoggedIn={isLoggedIn}
        profile_image={profile_image}
        search={search}
        name={name}
        handleInputChange={this._handleInputChange}
        handleKeyPress= {this._handleKeyPress}
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
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(withRouter(NavigationContainer));
