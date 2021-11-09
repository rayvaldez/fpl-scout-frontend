import React from 'react';
import Players from '../components/Players';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchPlayers } from '../actions/fetchPlayers';
import Player from '../components/Player';

class PlayersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div>
        <Route path='/players/:id' render={(routerProps) => <Player {...routerProps} players={this.props.players}/>}/>
        <Route exact path='/players' render={() => <Players players={this.props.players}/>}/>
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
