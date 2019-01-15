import React, { Component } from 'react';
import EditorPane from 'components/editor/EditorPane';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';

class EditorPaneContainer extends Component {

  handleChangeInput = ({name, value}) => {
    const { EditorActions } = this.props;
    EditorActions.changeInput({name, value});
  }

  handleChangeFileInput = ({ files}) => {
    const { EditorActions } = this.props;
    EditorActions.changeFileInput({ files});
  }

  render() {
    const { title, tags, markdown, postImage } = this.props;
    const { handleChangeInput, handleChangeFileInput } = this;

    return (
      <EditorPane
        title={title}
        markdown={markdown}
        tags={tags}
        postImage={postImage}
        onChangeInput={handleChangeInput}
        onChangeFileInput={handleChangeFileInput}
      />
    );
  }
}

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags'),
    postImage: state.editor.get('postImage')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(EditorPaneContainer);
