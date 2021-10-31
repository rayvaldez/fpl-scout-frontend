import React from 'react';
import Players from '../components/Players';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions/fetchPlayers';
import Player from '../components/Player';

class PlayersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div>
        <h5>PlayersContainer</h5>
        <Player players={this.props.players}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps, { fetchPlayers }) (PlayersContainer)
