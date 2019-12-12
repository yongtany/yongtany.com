import React, { Component } from 'react';
import PostList from 'components/list/PostList';
import PostSkeleton from 'components/skeleton/PostSkeleton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as listActions from 'store/modules/list';

class ListContainer extends Component {
  getPostList = () => {
    // 검색어, 태그, 페이지 값을 부모로부터 받아 옵니다.
    // 부모컴포넌트에서 match.params을 이용해 url에서 자식컴포넌트로 props를 전달합니다.
    const { tag, page, search, ListActions } = this.props;
    if(search) {
      ListActions.searchPost({
        page,
        search,
      });
    } else {
      ListActions.getPostList({
        page,
        tag,
      });
    }
  }

  componentDidMount() {
    this.getPostList();
  }

  componentDidUpdate(prevProps, prevState) {
    // 페이지/태그/검색어가 바뀔 때 리스트를 다시 불러옵니다.
    if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag
      || prevProps.search !== this.props.search) {
      this.getPostList();
      // 랜더링후 스크롤을 맨 위로 올립니다.
      document.documentElement.scrollTop = 0;
    }
  }

  render() {
    const { loading, loading2, posts, page, lastPage, tag, search, isLoggedIn } = this.props;
    const canSearch = posts.toJS().length ? true : false;

    if(loading || loading2) return (<PostSkeleton />); // 로딩 중에는 아무것도 보여주지 않습니다.

    return (
        <PostList
          posts={posts}
          page={page}
          lastPage={lastPage}
          tag={tag}
          search={search}
          canSearch={canSearch}
          isLoggedIn={isLoggedIn}
        />
    );
  }
}

export default connect(
  (state) => ({
    lastPage: state.list.get('lastPage'),
    posts: state.list.get('posts'),
    loading: state.pender.pending['list/GET_POST_LIST'],
    loading2: state.pender.pending['list/GET_SEARCH_POST'],
    isLoggedIn: state.auth.get('isLoggedIn')
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(ListContainer);
