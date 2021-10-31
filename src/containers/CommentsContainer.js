import React from 'react';
import { connect } from 'react-redux';
import Comments from '../components/Comments';
import CommentInput from '../components/CommentInput';
import { fetchComments } from '../actions/fetchComments';

class CommentsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    return (
      <div>
        <h5>CommentContainer</h5>
        <Comments/>
        <CommentInput/>
      </div>
    );
  };
}


const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, { fetchComments })(CommentsContainer);
