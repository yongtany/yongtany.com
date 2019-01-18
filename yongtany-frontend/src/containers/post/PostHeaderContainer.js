import React, { Component } from 'react';
import PostHeader from 'components/post/PostHeader';
import { withRouter } from 'react-router-dom';

import * as authActions from 'store/modules/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PostHeaderContainer extends Component {
  render() {
    const { isLoggedIn, match} = this.props;

    const { id } = match.params;

    return (
      <PostHeader
        postId={id}
        isLoggedIn={isLoggedIn}
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
)(withRouter(PostHeaderContainer));
