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
    </div>
  );
};

export default Player;
