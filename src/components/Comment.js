import React from 'react';

const Comment = (props) => {

  return(
    <div>
      <h6>Posted by {props.comment.name}</h6>
      <p id="commentText">{props.comment.text}</p>
    </div>
  )
}

export default Comment;
