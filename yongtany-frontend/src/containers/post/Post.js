import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PostHeader from 'components/post/PostHeader';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import Loading from 'components/common/Loading';

import * as postActions from 'store/modules/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Post extends Component {
  initialize = async () => {
    const { PostActions, id } = this.props;
    try {
      await PostActions.getPost(id);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    const { loading, post, isLoggedIn, match, _id } = this.props;

    const { id } = match.params;

    if(loading) return <Loading />;

    const { title, body, publishedDate, tags, postImage } = post.toJS();

    const name = post.getIn(['user', 'name']);
    const writerId = post.getIn(['user', '_id']);
    const profile_image = post.getIn(['user', 'profile_image']);


    return (
      <div>
        <PostHeader
          isLoggedIn={isLoggedIn}
          userId={_id}
          postId={id}
          writerId={writerId}
        />
        <PostInfo
          title={title}
          publishedDate={publishedDate}
          tags={tags}
          name={name}
          profile_image={profile_image}
          postImage={postImage}
        />
        <PostBody body={body}/>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    post: state.post.get('post'),
    loading: state.pender.pending['post/GET_POST'], // 로딩 상태
    isLoggedIn: state.auth.get('isLoggedIn'),
    name: state.auth.get('name'),
    _id: state.auth.get('_id'),
  }),
  (dispatch) => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(withRouter(Post));
