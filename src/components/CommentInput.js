import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/addComment.js';

class CommentInput extends React.Component {

  state = {
    text: '',
    gameweek: '',
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
      gameweek: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Gameweek:</label>
          <input type="number" name="gameweek" min="1" max="38" value={this.state.gameweek} onChange={this.handleChange}/><br/><br/>
          <label>Comment:</label><br/>
          <textarea name="text" value={this.state.comment} onChange={this.handleChange} rows="8" cols="80" placeholder="Leave a comment..."/><br/>
          <input type="submit" placeholder="Submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addComment })(CommentInput);
