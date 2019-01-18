import React, { Component } from 'react';
import EditorPane from 'components/editor/EditorPane';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';
import { withRouter } from 'react-router-dom';

class EditorPaneContainer extends Component {

  handleChangeInput = ({name, value}) => {
    const { EditorActions } = this.props;
    EditorActions.changeInput({name, value});
  }

  handleChangeFileInput = ({ files}) => {
    const { EditorActions } = this.props;
    EditorActions.changeFileInput({files});
  }

  handleSubmit = async (event) => {
    const { title, markdown, tags, postImage, EditorActions, history } = this.props;
    const token = localStorage.getItem('jwt');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', markdown);
    const tag = tags.split(",");

    for (var i = 0; i < tag.length; i++) {
      formData.append('tags', tag[i]);
    }
    formData.append('postImage', postImage);
    event.preventDefault();

    try {
      await EditorActions.writePost(formData, token);
      // 페이지를 이동시킨다. 주의 : postId는 위쪽에서 레퍼런스를 만들지 않고
      // 이 자리에서 this.props.postId를 조회해야 한다.(현재 값을 불러오기 위함).
      history.push(`post/${this.props.postId}`);
    } catch (e) {
      console.log(e);
    }
  }



  render() {
    const { title, tags, markdown, postImage } = this.props;
    const { handleChangeInput, handleChangeFileInput, handleSubmit } = this;

    return (
      <EditorPane
        title={title}
        markdown={markdown}
        tags={tags}
        postImage={postImage}
        onChangeInput={handleChangeInput}
        onChangeFileInput={handleChangeFileInput}
        onSubmit={handleSubmit}
      />
    );
  }
}

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags'),
    postImage: state.editor.get('postImage'),
    postId: state.editor.get('postId')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(withRouter(EditorPaneContainer));
