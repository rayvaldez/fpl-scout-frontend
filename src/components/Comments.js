import React from 'react';
import Comment from './Comment';

const Comments = (props) => {

  const playerId = props.match.params.id
  const allComments = props.comments.comments
  let sorted = allComments.filter(comment => comment.player_id == playerId)

  return (
    <div className="comments">
      <h4>Comments</h4>
      {sorted.map(comment =>
        <div key={comment.id}>
          <Comment comment={comment} player={playerId} />
        </div>
      )}
    </div>
  )
}

export default Comments
