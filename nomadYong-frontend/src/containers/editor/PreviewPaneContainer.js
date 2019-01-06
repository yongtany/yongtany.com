import React, { Component } from 'react';
import { connect } from 'react-redux';
import PreviewPane from 'components/editor/PreviewPane';

class PreviewPaneContainer extends Component {
  render() {
      const { markdown, title } = this.props;
    return (
        <PreviewPane
            title={title}
            markdown={markdown}
        />
    )
  }
}

const mapStateToProps = (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown')
})

export default connect(mapStateToProps)(PreviewPaneContainer);
