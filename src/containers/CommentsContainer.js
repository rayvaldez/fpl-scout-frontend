import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
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
        <Route path='/players/:id' render={(routerProps) => <Comments {...routerProps} comments={this.props.comments}/>}/>
        <Route path='/players/:id' component={CommentInput} ></Route>
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
