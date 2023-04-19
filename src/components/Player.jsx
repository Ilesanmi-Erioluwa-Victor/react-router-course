import React from "react";
import { useParams, Link } from "react-router-dom";
import usePlayer from "../hooks/usePlayer";

const Player = () => {
  const { playerId } = useParams();

  const { loading, response: player } = usePlayer(playerId);

  if (loading === true) {
    return null;
  }

  if (!player) {
    return null;
  }
  return (
    <div className="panel">
      <img
        src={player.avatar}
        alt={`Avatar for${player.name}`}
        className="avatar"
      />

      <h1 className="medium-header">{player.name}</h1>
      <h3 className="header">#{player.number}</h3>

      <div className="row">
        <ul
          className="info-list"
          style={{ marginRight: 80 }}
        >
          <li>
            Team
            <div>
              <Link to={`/${player.teamId}`}>
                {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
              </Link>
            </div>
          </li>

          <li>
            Position
            <div>{player.position}</div>
          </li>

          <li>
            PPG <div>{player.ppg}</div>
          </li>
        </ul>
  

      </div>
    </div>
  );
};

export default Player;
