import React, { Component } from 'react';
import PostList from 'components/list/PostList';
import Loading from 'components/common/Loading';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as listActions from 'store/modules/list';

class ListContainer extends Component {
  getPostList = () => {
    // 페이지와 태그 값을 부모로부터 받아 옵니다.
    const { tag, page, search, ListActions } = this.props;
    if(tag) {
      ListActions.getPostList({
        page,
        tag,
      });
    } else if(search) {
      ListActions.searchPost({
        page,
        search,
      });
    } else {
      ListActions.getPostList({
        page,
        tag,
      });
    }
  }

  componentDidMount() {
    this.getPostList();
  }

  componentDidUpdate(prevProps, prevState) {
    // 페이지/태그가 바뀔 때 리스트를 다시 불러옵니다.
    if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag
      || prevProps.search !== this.props.search) {
      this.getPostList();
      // 스크롤을 맨 위로 올립니다.
      document.documentElement.scrollTop = 0;
    }
    window.scrollTo(0,0);
  }

  render() {
    const { loading, posts, page, lastPage, tag, search, isLoggedIn } = this.props;

    if(loading) return <Loading />; // 로딩 중에는 아무것도 보여주지 않습니다.

    return (
        <PostList
          posts={posts}
          page={page}
          lastPage={lastPage}
          tag={tag}
          search={search}
          isLoggedIn={isLoggedIn}
          loading={loading}
        />
    );
  }
}

export default connect(
  (state) => ({
    lastPage: state.list.get('lastPage'),
    posts: state.list.get('posts'),
    loading: state.pender.pending['list/GET_POST_LIST'],
    isLoggedIn: state.auth.get('isLoggedIn')
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(ListContainer);
