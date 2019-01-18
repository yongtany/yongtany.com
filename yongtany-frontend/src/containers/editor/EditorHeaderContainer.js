import  React, { Component } from 'react';
import EditorHeader from 'components/editor/EditorHeader';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom';

import * as editorActions from 'store/modules/editor';

class EditorHeaderContainer extends Component {
  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { handleGoBack } = this;
    return (
      <EditorHeader
        onGoBack = {handleGoBack}
      />
    )
  }
}

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    postImage: state.editor.get('postImage'),
    tags: state.editor.get('tags'),
    postId: state.editor.get('postId')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(withRouter(EditorHeaderContainer));
