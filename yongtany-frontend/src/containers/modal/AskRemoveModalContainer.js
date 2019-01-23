import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from 'store/modules/modal';
import * as postActions from 'store/modules/post';
import AskRemoveModal from 'components/modal/AskRemoveModal';
import { withRouter } from 'react-router-dom';

class AskRemoveModalContainer extends Component {
  handleCancel = () => {
    const { ModalActions } = this.props;
    ModalActions.hideModal('remove');
  }

  handleConfirm = async () => {
    const { ModalActions, PostActions, token, history, match } = this.props;
    const { id } = match.params;

    try {
      // 포스트 삭제 후, 모달 닫고 홈페이지로 이동
      await PostActions.removePost(id, token);
      ModalActions.hideModal('remove');
      history.push('/post');
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { visible } = this.props;
    const { handleCancel, handleConfirm } = this;

    return (
      <AskRemoveModal
        visible={visible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    );
  }
}

export default connect(
  (state) => ({
    visible: state.modal.getIn(['modal', 'remove']),
    token: state.auth.get('token')
  }),
  (dispatch) => ({
    ModalActions: bindActionCreators(modalActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(withRouter(AskRemoveModalContainer));
