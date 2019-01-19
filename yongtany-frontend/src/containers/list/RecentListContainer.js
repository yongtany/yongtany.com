import React, { Component } from 'react';
import RecentPostList from 'components/list/RecentPostList';
import Loading from 'components/common/Loading';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as listActions from 'store/modules/list';

class RecentListContainer extends Component {



  componentDidMount() {
    const { ListActions } = this.props;
    ListActions.getRecentList();
  }

  render() {
    const { loading, recentPosts } = this.props;

    if(loading) return <Loading />; // 로딩 중에는 아무것도 보여주지 않습니다.
    return (
        <RecentPostList
        recentPosts={recentPosts}
        />
    );
  }
}

export default connect(
  (state) => ({
    recentPosts: state.list.get('recentPosts'),
    loading: state.pender.pending['list/GET_POST_LIST'],
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(RecentListContainer);
