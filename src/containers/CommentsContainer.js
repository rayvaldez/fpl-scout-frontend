import React from 'react';
import Comments from '../components/Comments';
import CommentInput from '../components/CommentInput';


class CommentsContainer extends React.Component {

  render() {
    return (
      <div>
        <Comments/>
        <CommentInput/>
      </div>
    )
  }
}

export default CommentsContainer
