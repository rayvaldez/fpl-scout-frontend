import React from 'react';
import Team from './Team';
import CommentsContainer from '../containers/CommentsContainer';
import { Spinner, Container, Col, CardImg, Row } from 'reactstrap';

const Player = (props) => {

  let player = props.players.players[props.match.params.id]

  return(
    <Container className="player-container">
      {player ?
        <Row id="player-details">
          <Col id="player-image-box" sm="3">
            <CardImg
              src={`http://resources.premierleague.com/premierleague/photos/players/110x140/p${player.photo.substring(0, player.photo.length-4)}.png`}
              alt={`${player.web_name}`}
              bottom
              width="100%"
            />
            <h4 align="center">{player.first_name} {player.second_name}</h4>
          </Col>
          <Col id="player-detail-box"
            md={{
            offset: 2,
            size: 7
            }}
          >
            <table id="player-table">
              <tbody>
                <tr>
                <td>Team</td>
                <td><Team team={player.team}/></td>
                </tr>
                <tr>
                <td>Cost</td>
                <td>{player.now_cost}</td>
                </tr>
                <tr>
                <td>Points per game</td>
                <td>{player.points_per_game}</td>
                </tr>
                <tr>
                <td>Total Points</td>
                <td>{player.total_points}</td>
                </tr>
                <tr>
                <td>Goals</td>
                <td>{player.goals_scored}</td>
                </tr>
                <tr>
                <td>Assists</td>
                <td>{player.assists}</td>
                </tr>
                <tr>
                <td>Clean Sheets</td>
                <td>{player.clean_sheets}</td>
                </tr>
                <tr>
                <td>Bonus Points</td>
                <td>{player.bonus}</td>
                </tr>
              </tbody>
            </table>
            </Col>
          </Row>
       : <div>
          <Spinner color="light">
            Loading...
          </Spinner>
        </div>
      }

      <br/>
      <Row id="comments-container">
        <CommentsContainer />
      </Row>
    </Container>
  )

}

export default Player
