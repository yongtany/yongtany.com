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

  handleSubmit = async () => {
    const { title, markdown, tags, EditorActions, history, location } = this.props;
    const token = localStorage.getItem('jwt');
    const post ={
      title: title,
      body: markdown,
      // 태그 텍스트를 ,로 분리시키고 앞뒤 공백을 지운 후 중복되는 값을 제거한다.
      tags: tags === "" ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))],
    };


    try {
        await EditorActions.writePost(post, token);
        // 페이지를 이동시킨다. 주의 : postId는 위쪽에서 레퍼런스를 만들지 않고
        // 이 자리에서 this.props.postId를 조회해야 한다.(현재 값을 불러오기 위함).
        history.push(`post/${this.props.postId}`);
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    const { handleGoBack, handleSubmit } = this;
    return (
      <EditorHeader
        onGoBack = {handleGoBack}
        onSubmit = {handleSubmit}
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
