import React, { Component } from 'react';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';

class PostContainer extends Component {
  render() {
    return (
      <div>
        <PostInfo />
        <PostBody />
      </div>
    )
  }
}

export default PostContainer;
