import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const PostComments = ({title, postId}) => {
  const baseUrl = 'https://yongtany.herokuapp.com/'

    const disqusShortname = 'yongtany';
    const disqusConfig = {
      url: baseUrl + 'post/' + postId,
      identifier: postId,
      title: title
    };

    const style = {
      'padding' : '1rem',
      'marginRight': '0.7rem'
    }

  return (
    <div style={style}>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
};

export default PostComments;

