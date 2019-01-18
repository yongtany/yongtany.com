import React, { Component } from 'react';
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

  render() {
    const { loading, post } = this.props;

    if(loading) return <Loading />;

    const { title, body, publishedDate, tags, postImage } = post.toJS();

    const name = post.getIn(['user', 'name']);

    const profile_image = post.getIn(['user', 'profile_image']);

    return (
      <div>
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
    loading: state.pender.pending['post/GET_POST'] // 로딩 상태
  }),
  (dispatch) => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(Post);
