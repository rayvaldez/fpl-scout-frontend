import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/addComment.js';

class CommentInput extends React.Component {

  state = {
    text: '',
    name: '',
    player_id: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      player_id: this.props.match.params.id
    });
  };

  handleSubmit = () => {
    this.props.addComment(this.state);
    this.setState({
      comment: '',
      name: ''
    });

  };

  render() {
    return (
      <div>
        <form className="commentInput" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input name="name" value={this.state.name} onChange={this.handleChange}/><br/><br/>
          <label>Comment:</label><br/>
          <textarea name="text" value={this.state.comment} onChange={this.handleChange} rows="4" cols="60" placeholder="Leave a comment..."/><br/>
          <input type="submit" placeholder="Submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addComment })(CommentInput);
